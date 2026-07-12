/**
 * NextGenAR — Portfolio Grid
 * Dynamically renders all models from the shared data (window.NGAR_MODELS)
 * as interactive cards. Clicking a card loads it in the featured viewer.
 */
(function () {
  "use strict";

  var MODELS = window.NGAR_MODELS || [];
  var grid = document.getElementById("portfolio-grid");
  var featuredViewer = document.getElementById("featured-viewer");
  var featuredName = document.getElementById("featured-name");
  var featuredDesc = document.getElementById("featured-desc");

  if (!grid || MODELS.length === 0) return;

  // Load a model into the featured viewer
  function loadFeatured(index) {
    var model = MODELS[index];
    if (!model) return;
    featuredViewer.setAttribute("src", model.src);
    featuredViewer.setAttribute("alt", model.name);
    featuredName.textContent = model.name;
    featuredDesc.textContent = model.description;

    // Update active card highlight
    var cards = grid.querySelectorAll(".portfolio-card-item");
    cards.forEach(function (card, i) {
      card.classList.toggle("is-active", i === index);
    });

    // Scroll to featured viewer
    document.getElementById("portfolio-featured").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Build a card for each model
  MODELS.forEach(function (model, index) {
    var col = document.createElement("div");
    col.className = "col-lg-4 col-md-6";
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", String(100 + index * 100));

    var card = document.createElement("div");
    card.className = "portfolio-card-item";
    if (index === 0) card.classList.add("is-active");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "Load " + model.name + " in viewer");

    var viewer = document.createElement("model-viewer");
    viewer.setAttribute("src", model.src);
    viewer.setAttribute("alt", model.name);
    viewer.setAttribute("auto-rotate", "");
    viewer.setAttribute("camera-controls", "");
    viewer.setAttribute("ar", "");
    viewer.setAttribute("shadow-intensity", "1");
    viewer.style.width = "100%";
    viewer.style.height = "280px";

    var info = document.createElement("div");
    info.className = "portfolio-card-info";

    var title = document.createElement("h4");
    title.textContent = model.name;
    title.style.fontSize = "1.15rem";
    title.style.fontWeight = "700";
    title.style.marginBottom = "4px";

    var desc = document.createElement("p");
    desc.textContent = model.description;
    desc.className = "text-muted";
    desc.style.fontSize = "0.85rem";
    desc.style.marginBottom = "0";

    info.appendChild(title);
    info.appendChild(desc);

    card.appendChild(viewer);
    card.appendChild(info);

    card.addEventListener("click", function () { loadFeatured(index); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); loadFeatured(index); }
    });

    col.appendChild(card);
    grid.appendChild(col);
  });

  // Load the first model in the featured viewer
  loadFeatured(0);
})();
