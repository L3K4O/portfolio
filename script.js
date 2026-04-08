document.addEventListener("DOMContentLoaded", () => {
  // Navigation hover effect
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
    });
  });

  // Back button functionality
  const backBtn = document.querySelector(".back-button a");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.history.back(); // goes to previous page
    });
  }
});

