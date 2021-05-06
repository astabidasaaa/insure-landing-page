document
  .getElementById("dropdown-btn")
  .addEventListener("click", () => overlayOn());

function overlayOn() {
  //   document.getElementById("overlay").style.display = "flex";
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

  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }

  //   console.log("hello");
  //   document.getElementById("nav-bar").classList.toggle("pad-right", true);
}

// function overlayOff() {
//   document.getElementById("overlay").style.display = "none";
//   document.body.classList.toggle("noscroll", false);
//   document.getElementById("nav-bar").classList.toggle("pad-right", false);
// }
