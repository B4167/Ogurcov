document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".main__section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");

        // Останавливаем слежение за секцией — оптимизация
        observer.unobserve(entry.target);
      }

    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -10% 0px" // делает появление более мягким
  });

  sections.forEach(section => observer.observe(section));
});
