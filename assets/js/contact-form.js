/**
 * NextGenAR — Secure Contact Form Handler
 * Submits to Formspree via fetch with multiple anti-spam layers:
 *   1. Honeypot field (bots fill hidden fields)
 *   2. Time-trap (reject submissions faster than 3 seconds — bots are instant)
 *   3. Client-side input sanitization (strip HTML tags / scripts)
 *   4. Field length limits (prevent oversized payloads)
 *   5. Email format validation
 *   6. Rate limiting (30-second cooldown after each submission)
 */
(function () {
  "use strict";

  var FORMSPREE_ENDPOINT = "https://formspree.io/f/xdabqvql";
  var MIN_SUBMIT_TIME = 3000;   // 3s — bots submit instantly
  var COOLDOWN_MS = 30000;      // 30s between submissions
  var MAX_NAME = 80;
  var MAX_SUBJECT = 150;
  var MAX_MESSAGE = 2000;
  var MAX_EMAIL = 120;

  var form = document.getElementById("contact-form");
  if (!form) return;

  var submitBtn = document.getElementById("submit-btn");
  var successMsg = document.getElementById("form-success");
  var errorMsg = document.getElementById("form-error");
  var formRenderedAt = Date.now();
  var lastSubmitAt = 0;

  // ── Sanitization: strip HTML tags and trim ─────────────────────
  function sanitize(value) {
    if (typeof value !== "string") return "";
    // Remove any HTML tags
    value = value.replace(/<[^>]*>/g, "");
    // Remove script/event-handler patterns
    value = value.replace(/javascript:/gi, "");
    value = value.replace(/on\w+\s*=/gi, "");
    // Trim and collapse whitespace
    return value.trim().replace(/\s{2,}/g, " ");
  }

  // ── Validation ──────────────────────────────────────────────────
  function validateField(field) {
    var errorEl = form.querySelector('[data-error-for="' + field.id + '"]');
    if (!errorEl) return true;

    var value = (field.value || "").trim();
    var error = "";

    if (!value) {
      error = "This field is required.";
    } else if (field.id === "email") {
      // RFC-friendly email regex (simplified)
      var emailRe = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
      if (!emailRe.test(value)) {
        error = "Please enter a valid email address.";
      } else if (value.length > MAX_EMAIL) {
        error = "Email is too long.";
      }
    } else if (field.id === "name" && value.length > MAX_NAME) {
      error = "Name must be under " + MAX_NAME + " characters.";
    } else if (field.id === "subject" && value.length > MAX_SUBJECT) {
      error = "Subject must be under " + MAX_SUBJECT + " characters.";
    } else if (field.id === "message" && value.length > MAX_MESSAGE) {
      error = "Message must be under " + MAX_MESSAGE + " characters.";
    }

    errorEl.textContent = error;
    field.classList.toggle("is-invalid", !!error);
    return !error;
  }

  // Validate on blur
  ["name", "email", "subject", "message"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener("blur", function () { validateField(el); });
      // Clear error on input
      el.addEventListener("input", function () {
        var errorEl = form.querySelector('[data-error-for="' + id + '"]');
        if (errorEl) errorEl.textContent = "";
        el.classList.remove("is-invalid");
      });
    }
  });

  // ── UI helpers ─────────────────────────────────────────────────
  function showSuccess(msg) {
    successMsg.textContent = msg;
    successMsg.style.display = "block";
    errorMsg.style.display = "none";
    successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function showError(msg) {
    errorMsg.textContent = msg;
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
  }

  function hideMessages() {
    successMsg.style.display = "none";
    errorMsg.style.display = "none";
  }

  function setButtonState(state) {
    if (state === "loading") {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
    } else if (state === "cooldown") {
      submitBtn.disabled = true;
      var remaining = Math.ceil(COOLDOWN_MS / 1000);
      submitBtn.innerHTML = 'Please wait ' + remaining + 's...';
      var interval = setInterval(function () {
        remaining--;
        if (remaining <= 0) {
          clearInterval(interval);
          setButtonState("ready");
        } else {
          submitBtn.innerHTML = 'Please wait ' + remaining + 's...';
        }
      }, 1000);
    } else {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <i class="bi bi-arrow-right ms-1"></i>';
    }
  }

  // ── Submit handler ──────────────────────────────────────────────
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    hideMessages();

    // 1. Honeypot check — if filled, silently "succeed" (bot detected)
    var honey = form.querySelector('[name="_honey"]');
    if (honey && honey.value.trim() !== "") {
      showSuccess("Your message has been sent. Thank you!");
      form.reset();
      return;
    }

    // 2. Time-trap — reject if submitted too fast (bot behavior)
    var elapsed = Date.now() - formRenderedAt;
    if (elapsed < MIN_SUBMIT_TIME) {
      showError("Please review the form and try again in a moment.");
      return;
    }

    // 3. Rate limiting — prevent spam submissions
    if (Date.now() - lastSubmitAt < COOLDOWN_MS) {
      showError("You\'re sending messages too quickly. Please wait a moment.");
      return;
    }

    // 4. Validate all fields
    var fields = ["name", "email", "subject", "message"];
    var isValid = true;
    fields.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && !validateField(el)) isValid = false;
    });
    if (!isValid) {
      showError("Please correct the errors above.");
      return;
    }

    // 5. Sanitize all inputs before sending
    var data = {
      name: sanitize(document.getElementById("name").value),
      email: sanitize(document.getElementById("email").value).slice(0, MAX_EMAIL),
      subject: sanitize(document.getElementById("subject").value),
      message: sanitize(document.getElementById("message").value)
    };

    // 6. Submit to Formspree via fetch
    setButtonState("loading");

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(function (response) {
      if (response.ok) {
        showSuccess("Your message has been sent. Thank you!");
        form.reset();
        formRenderedAt = Date.now();
        lastSubmitAt = Date.now();
        setButtonState("cooldown");
      } else {
        throw new Error("Server returned " + response.status);
      }
    })
    .catch(function () {
      showError("Something went wrong. Please try again or email us directly.");
      setButtonState("ready");
    });
  });
})();
