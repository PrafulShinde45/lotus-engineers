document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);

      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");

      if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });
      }
    })
    .catch(err => console.error("Error loading navbar:", err));

  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);
    })
    .catch(err => console.error("Error loading footer:", err));
});
