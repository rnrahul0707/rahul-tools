// Common JS for Rahul Tools

// Console check (optional)
console.log("Rahul Tools JS loaded");

// Smooth scroll for future use
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button click animation (future buttons)
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.97)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 120);
  });
});
