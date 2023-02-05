// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import {
  createCardsByRegion,
  createCardsByCountry,
  cardsContainer,
  printAllCountries,
} from "../js/createCards.js";
import { modalOpen, modalClose, modalBorder } from "../js/modal.js";
import { ALLCOUNTRIES } from "../js/const.js";
import { lightModeChange } from "../js/light-mode";
const form = document.getElementById("form");
const regionSelect = document.getElementById("region");
const inputCountry = document.getElementById("input-country");

const lightMode = document.getElementById("light-mode");

const crossIcon = document.getElementById("cross-icon");

printAllCountries(ALLCOUNTRIES);

regionSelect.addEventListener("change", (e) => {
  createCardsByRegion(e.target.value, ALLCOUNTRIES);
  if (e.target.value === "default") {
    printAllCountries(ALLCOUNTRIES);
  }
});

inputCountry.addEventListener("input", (e) => {
  if (e.target.value.length >= 3) {
    console.log(e.target.value.length);
    createCardsByCountry(e.target.value, ALLCOUNTRIES);
  }
  if (e.target.value.length === 0) {
    printAllCountries(ALLCOUNTRIES);
  }
});

cardsContainer.addEventListener("click", (e) => {
  if (e.target.dataset.country) {
    modalOpen(e.target.dataset.country);
  }
});

crossIcon.addEventListener("click", (e) => {
  modalClose();
});

lightMode.addEventListener("click", (e) => {
  lightModeChange(lightMode, crossIcon);
});

modalBorder.addEventListener("click", (e) => {
  if (e.target.dataset.country) {
    modalOpen(e.target.dataset.country);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
