document
  .getElementById("dropdown-btn")
  .addEventListener("click", () => overlayOn());

function overlayOn() {
  document
    .getElementById("dropdown-container")
    .classList.toggle("dropdown-open");
  document.body.classList.toggle("noscroll");

  const x = document.getElementById("hamburger");
  const y = document.getElementById("close");
  if (x.style.display == "block" && y.style.display == "none") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
