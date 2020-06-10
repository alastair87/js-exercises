const setElementBackgroundColor = (element, backgroundColor) =>
  (element.style.backgroundColor = backgroundColor);

const setTheme = (color1, color2, color3, color4 = "black") => {
  const jumbotron = document.querySelector(".jumbotron"),
    donateBtn = document.querySelectorAll("a, .btn, .btn-primary, .btn-lrg")[7],
    volunteerBtn = document.querySelectorAll(
      "a, .btn, .btn-primary, .btn-lrg"
    )[8];
  jumbotron.style.backgroundColor = color1;
  donateBtn.style.backgroundColor = color2;
  volunteerBtn.style.backgroundColor = color3;
  volunteerBtn.style.color = color4;
};

const setBlueTheme = () => setTheme("588fbd", "ffa500", "black", "white");

const setOrangeTheme = () => setTheme("#f0ad4e", "#5751fd", "#31b0d5", "white");

const setGreenTheme = () => setTheme("#87ca8a", "black", "#8c9c08");

let blueBtn = document.querySelector("#blueBtn"),
  orangeBtn = document.querySelector("#orangeBtn");
greenBtn = document.querySelector("#greenBtn");

blueBtn.addEventListener("click", setBlueTheme);
orangeBtn.addEventListener("click", setOrangeTheme);
greenBtn.addEventListener("click", setGreenTheme);
