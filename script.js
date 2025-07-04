/* ----- Modo oscuro ----- */
const btnDark = document.getElementById("toggle-dark");
btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark"));
});
/* Estado inicial */
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
}

/* ----- Scroll Reveal animaciones ----- */
ScrollReveal().reveal(".section h2",{origin:"bottom",distance:"40px",duration:800,delay:150});
ScrollReveal().reveal(".timeline .tl-item",{origin:"left",distance:"50px",duration:700,interval:120});
ScrollReveal().reveal(".ideas li, .works-grid article, .flex-cols div, .video-list article",{origin:"bottom",distance:"40px",duration:700,interval:120});
