const aside = document.querySelector("aside");
const navBtn = document.querySelector(".nav-btn");
const main = document.querySelector("main");
navBtn.addEventListener("click", () => {
  if (aside.classList.contains("fade")) {
    aside.classList.remove("fade");
    main.classList.remove("scale-zero");
  } else {
    aside.classList.add("fade");
    main.classList.add("scale-zero");
  }
});
