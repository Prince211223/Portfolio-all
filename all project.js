// Simple hover animation logging (optional)
const cards = document.querySelectorAll(".cert-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.cursor = "pointer";
  });
});
