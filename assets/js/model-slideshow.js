/**
 * 3D Model Showcase Slideshow
 * Auto-rotating model-viewer slideshow.
 * Models are loaded from the shared models-data.js file (window.NGAR_MODELS).
 */
(function () {
  "use strict";

  const MODELS = window.NGAR_MODELS || [];

  const AUTO_PLAY_INTERVAL = 5000;
  let currentIndex = 0;
  let autoPlayTimer = null;

  const viewer = document.getElementById("showcase-viewer");
  const nameEl = document.querySelector(".slideshow-model-name");
  const descEl = document.querySelector(".slideshow-model-desc");
  const dotsContainer = document.getElementById("slideshow-dots");
  const prevBtn = document.querySelector(".slideshow-prev");
  const nextBtn = document.querySelector(".slideshow-next");

  if (!viewer) return;

  function buildDots() {
    dotsContainer.innerHTML = "";
    MODELS.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "slideshow-dot";
      dot.setAttribute("aria-label", "Go to model " + (i + 1));
      dot.addEventListener("click", () => { goTo(i); resetAutoPlay(); });
      dotsContainer.appendChild(dot);
    });
  }

  function updateActiveDot() {
    const dots = dotsContainer.querySelectorAll(".slideshow-dot");
    dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));
  }

  function goTo(index) {
    currentIndex = ((index % MODELS.length) + MODELS.length) % MODELS.length;
    const model = MODELS[currentIndex];
    viewer.setAttribute("src", model.src);
    viewer.setAttribute("alt", model.name);
    nameEl.textContent = model.name;
    descEl.textContent = model.description;
    updateActiveDot();
  }

  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(next, AUTO_PLAY_INTERVAL);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  prevBtn.addEventListener("click", () => { prev(); resetAutoPlay(); });
  nextBtn.addEventListener("click", () => { next(); resetAutoPlay(); });

  // Pause on hover, resume on leave
  const stage = document.querySelector(".slideshow-stage");
  stage.addEventListener("mouseenter", stopAutoPlay);
  stage.addEventListener("mouseleave", startAutoPlay);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!viewer) return;
    const rect = viewer.getBoundingClientRect();
    const visible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!visible) return;
    if (e.key === "ArrowLeft") { prev(); resetAutoPlay(); }
    if (e.key === "ArrowRight") { next(); resetAutoPlay(); }
  });

  // Touch / swipe support
  let touchStartX = 0;
  stage.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); resetAutoPlay(); }
  }, { passive: true });

  // Init
  buildDots();
  goTo(0);
  startAutoPlay();
})();
