const iconOn = document.querySelector(".icon-on");
const iconOff = document.querySelector(".icon-off");

const main = document.querySelector("main");

iconOn.addEventListener("click", () => {
  main.classList.add("active");
});
iconOff.addEventListener("click", () => {
  main.classList.remove("active");
});
