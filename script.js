document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const section = entry.target;

        // Stagger effect based on index
        section.style.visibility = "visible";
        section.style.animationPlayState = "running";
        section.style.animationDelay = `${index * 0.3}s`;

        observer.unobserve(section); // So it doesn't repeat
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => observer.observe(section));
});