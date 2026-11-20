document.querySelectorAll(".menu-btn").forEach((b) =>
  b.addEventListener("click", () => {
    const m = document.querySelector(".mobile-links");
    m.classList.toggle("open");
    b.setAttribute("aria-expanded", m.classList.contains("open"));
    b.textContent = m.classList.contains("open") ? "×" : "☰";
  }),
);
document.querySelectorAll("[data-carousel]").forEach((c) => {
  const imgs = [...c.querySelectorAll("[data-slide]")];
  let n = 0;
  const show = () => {
    imgs.forEach(
      (im, i) =>
        (im.style.display =
          i === n
            ? im.classList.contains("empty-photo")
              ? "grid"
              : "block"
            : "none"),
    );
    const cap = c.querySelector(".gallery-caption");
    if (cap) cap.textContent = `Foto ${n + 1} dari ${imgs.length}`;
  };
  const controls = c.nextElementSibling;
  controls?.querySelector("[data-prev]")?.addEventListener("click", () => {
    n = (n - 1 + imgs.length) % imgs.length;
    show();
  });
  controls?.querySelector("[data-next]")?.addEventListener("click", () => {
    n = (n + 1) % imgs.length;
    show();
  });
  show();
});
