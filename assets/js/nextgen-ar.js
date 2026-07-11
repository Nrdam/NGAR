/**
 * NextGenAR — 3D/AR Platform JavaScript
 * Handles QR code generation, client dashboard interactions,
 * model-viewer events, and AR-specific UI behaviors.
 */

(function () {
  "use strict";

  /**
   * Generate QR codes for elements with data-qr attribute.
   * Uses api.qrserver.com as a free QR code generation API.
   */
  function initQRCodes() {
    document.querySelectorAll("[data-qr]").forEach(function (el) {
      var url = el.getAttribute("data-qr");
      var size = el.getAttribute("data-qr-size") || "160";
      var img = document.createElement("img");
      img.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=" +
        size +
        "x" +
        size +
        "&data=" +
        encodeURIComponent(url);
      img.alt = "QR Code for " + url;
      img.className = el.getAttribute("data-qr-class") || "qr-image";
      el.appendChild(img);
    });
  }

  /**
   * Product QR modal/tooltip on client pages.
   * When clicking the QR button on a product card,
   * toggle a small QR preview.
   */
  function initProductQRButtons() {
    document.querySelectorAll(".product-card-ar .btn-qr").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var card = btn.closest(".product-card-ar");
        var existing = card.querySelector(".qr-popup");

        if (existing) {
          existing.remove();
          return;
        }

        var productName = card.querySelector("h4")
          ? card.querySelector("h4").textContent
          : "Product";

        var popup = document.createElement("div");
        popup.className = "qr-popup";
        popup.style.cssText =
          "position:absolute;bottom:100%;right:0;margin-bottom:10px;" +
          "background:#fff;border:1px solid #e2e8f0;border-radius:12px;" +
          "padding:15px;box-shadow:0 15px 40px rgba(0,0,0,0.15);z-index:10;" +
          "text-align:center;min-width:180px;";

        var qrUrl =
          "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=" +
          encodeURIComponent("https://nextgenar.com/view?product=" + encodeURIComponent(productName));

        popup.innerHTML =
          '<img src="' +
          qrUrl +
          '" alt="QR" style="width:120px;height:120px;border-radius:8px;margin-bottom:8px;">' +
          "<p style='font-size:0.8rem;margin:0;color:#475569;'>Scan to view in AR</p>";

        var viewer = card.querySelector(".product-viewer");
        if (viewer) {
          viewer.style.position = "relative";
          viewer.appendChild(popup);
        }

        // Close on outside click
        setTimeout(function () {
          document.addEventListener("click", function closeHandler(ev) {
            if (!popup.contains(ev.target) && ev.target !== btn) {
              popup.remove();
              document.removeEventListener("click", closeHandler);
            }
          });
        }, 100);
      });
    });
  }

  /**
   * Client dashboard sidebar filter.
   * Filters product cards by category (data-category on cards).
   */
  function initDashboardFilter() {
    var filterItems = document.querySelectorAll(".client-sidebar .filter-list li");
    var products = document.querySelectorAll(".product-grid .product-card-ar");

    if (!filterItems.length || !products.length) return;

    filterItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var filter = item.getAttribute("data-filter") || "all";

        // Update active state
        filterItems.forEach(function (f) {
          f.classList.remove("active");
        });
        item.classList.add("active");

        // Filter products
        products.forEach(function (product) {
          var category = product.getAttribute("data-category") || "";
          var wrapper = product.closest('[class*="col-lg"], [class*="col-md"]');

          if (filter === "all" || category === filter) {
            if (wrapper) wrapper.style.display = "";
            product.style.display = "";
          } else {
            if (wrapper) wrapper.style.display = "none";
            product.style.display = "none";
          }
        });

        // Re-init AOS if available
        if (typeof AOS !== "undefined") {
          AOS.refresh();
        }
      });
    });
  }

  /**
   * Model-viewer AR status tracking.
   * Listens for AR session events and updates UI accordingly.
   */
  function initModelViewerEvents() {
    document.querySelectorAll("model-viewer").forEach(function (mv) {
      mv.addEventListener("ar-status", function (event) {
        var status = event.detail.status;
        if (status === "session-started") {
          console.log("[NextGenAR] AR session started for:", mv.getAttribute("alt"));
        } else if (status === "session-ended") {
          console.log("[NextGenAR] AR session ended for:", mv.getAttribute("alt"));
        }
      });

      mv.addEventListener("load", function () {
        mv.setAttribute("loaded", "");
      });

      mv.addEventListener("error", function () {
        console.warn("[NextGenAR] Model failed to load:", mv.getAttribute("src"));
      });
    });
  }

  /**
   * Smooth scroll for demo page instruction anchors.
   */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var target = document.querySelector(link.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  /**
   * Lazy-load model-viewer sources for performance.
   * Defers loading 3D models until they're near the viewport.
   */
  function initLazyModelViewers() {
    if (!("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var mv = entry.target;
            var src = mv.getAttribute("data-lazy-src");
            if (src) {
              mv.setAttribute("src", src);
              mv.removeAttribute("data-lazy-src");
              observer.unobserve(mv);
            }
          }
        });
      },
      { rootMargin: "200px" }
    );

    document.querySelectorAll("model-viewer[data-lazy-src]").forEach(function (mv) {
      observer.observe(mv);
    });
  }

  /**
   * Init everything on DOMContentLoaded.
   */
  document.addEventListener("DOMContentLoaded", function () {
    initQRCodes();
    initProductQRButtons();
    initDashboardFilter();
    initModelViewerEvents();
    initSmoothAnchors();
    initLazyModelViewers();
  });
})();
