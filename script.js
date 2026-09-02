document.addEventListener("DOMContentLoaded", () => {
  // Load Navbar & Footer Dynamically
  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      highlightActiveMenu();
    });

  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });

  // Remove Loader
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("opacity-0", "transition-opacity", "duration-500");
      setTimeout(() => (loader.style.display = "none"), 500);
    }, 400);
  }

  // Initialize AOS
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 800, once: true });
  }

  // Back to Top Button
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
        backToTop.classList.add("opacity-100", "translate-y-0");
      } else {
        backToTop.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
        backToTop.classList.remove("opacity-100", "translate-y-0");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

function highlightActiveMenu() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("text-pink-600", "font-bold");
    }
  });
}