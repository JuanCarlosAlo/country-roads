const body = document.body;
const lightModeChange = (lightMode, crossIcon) => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    lightMode.children[0].src = "assets/images/sun-solid.svg";
    lightMode.children[1].textContent = "Light Mode";
    crossIcon.src = "assets/images/cross.svg";
  } else {
    body.classList.add("dark-mode");
    lightMode.children[0].src = "assets/images/moon-solid.svg";
    lightMode.children[1].textContent = "Dark Mode";
    crossIcon.src = "assets/images/cross-dark.svg";
  }
};

export { lightModeChange };
