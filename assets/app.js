/* Academic Burnout ML — shared behaviour
   Progressive enhancement only: every page is fully readable with JS disabled. */
(function () {
  "use strict";

  /* ---- Theme toggle (light / dark / system) ------------------------- */
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem("abml-theme"); } catch (e) {}
  if (stored === "light" || stored === "dark") root.setAttribute("data-theme", stored);

  function currentTheme() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function syncToggleLabel(btn) {
    if (btn) btn.textContent = currentTheme() === "dark" ? "Light mode" : "Dark mode";
  }

  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    syncToggleLabel(btn);
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("abml-theme", next); } catch (e) {}
      document.querySelectorAll("[data-theme-toggle]").forEach(syncToggleLabel);
    });
  });

  /* ---- Mobile sidebar drawer -------------------------------------- */
  var sidebar = document.querySelector(".sidebar");
  var scrim = document.querySelector(".scrim");
  var openBtn = document.querySelector("[data-nav-open]");

  function setNav(open) {
    if (!sidebar) return;
    sidebar.classList.toggle("open", open);
    if (scrim) scrim.classList.toggle("show", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (openBtn) openBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (openBtn) openBtn.addEventListener("click", function () { setNav(!sidebar.classList.contains("open")); });
  if (scrim) scrim.addEventListener("click", function () { setNav(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 980) setNav(false); });

  /* ---- Mark the current nav item -------------------------------- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target === here || (here === "" && target === "index.html")) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* ---- Tabbed model selector ---------------------------------- */
  document.querySelectorAll("[data-selector]").forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll(".tabs button"));
    var panels = Array.prototype.slice.call(root.querySelectorAll(".panel"));
    function activate(i) {
      tabs.forEach(function (t, j) { t.setAttribute("aria-selected", j === i ? "true" : "false"); });
      panels.forEach(function (p, j) { p.classList.toggle("active", j === i); });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { activate(i); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { activate((i + 1) % tabs.length); tabs[(i + 1) % tabs.length].focus(); }
        if (e.key === "ArrowLeft") { activate((i - 1 + tabs.length) % tabs.length); tabs[(i - 1 + tabs.length) % tabs.length].focus(); }
      });
    });
    activate(0);
  });

  /* ---- Copy-to-clipboard buttons ---------------------------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var sel = btn.getAttribute("data-copy");
      var node = document.querySelector(sel);
      if (!node) return;
      var text = node.innerText.trim();
      var done = function () {
        var old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = old; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta); done();
      }
    });
  });

  /* ---- Current year in footer ------------------------------ */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
