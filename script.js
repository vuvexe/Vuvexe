// VŨ VÉ XE - script.js
document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav) nav.classList.remove("open");
    });
  });

  const form = document.getElementById("routeSearch");
  if (form) {
    form.addEventListener("submit", function (e) {
      const from = (document.getElementById("from")?.value || "").trim();
      const to = (document.getElementById("to")?.value || "").trim();
      if (!from || !to) {
        e.preventDefault();
        alert("Vui lòng nhập điểm đi và điểm đến.");
      }
    });
  }

  document.querySelectorAll("[data-zalo]").forEach(function (el) {
    const number = (el.getAttribute("data-zalo") || "0386003098").replace(
      /\D/g,
      ""
    );
    el.href = "https://zalo.me/" + number;
  });
});
