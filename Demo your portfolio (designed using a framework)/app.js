// ---- Dark / light mode toggle ----
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

function updateToggle() {
  const dark = root.getAttribute("data-bs-theme") === "dark";
  toggle.textContent = dark ? "Light mode" : "Dark mode";
  toggle.setAttribute("aria-pressed", String(dark));
}

toggle.addEventListener("click", function () {
  const next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-bs-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateToggle();
});
updateToggle();

// ---- Photo lightbox (Bootstrap modal) ----
const modal = document.getElementById("photoModal");
modal.addEventListener("show.bs.modal", function (event) {
  const btn = event.relatedTarget;
  const img = document.getElementById("photoModalImg");
  img.src = btn.dataset.src;
  img.alt = btn.dataset.alt;
  document.getElementById("photoModalTitle").textContent = btn.dataset.title;
});
