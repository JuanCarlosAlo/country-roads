// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import {
  createCardsByRegion,
  createCardsByCountry,
  cardsContainer,
} from "../js/createCards.js";
import { modalOpen, modalClose } from "../js/modal.js";

const regionSelect = document.getElementById("region");
const inputCountry = document.getElementById("input-country");

const crossIcon = document.getElementById("cross-icon");

regionSelect.addEventListener("change", (e) => {
  createCardsByRegion(e.target.value);
});

inputCountry.addEventListener("input", (e) => {
  createCardsByCountry(e.target.value);
});

cardsContainer.addEventListener("click", (e) => {
  console.log(e.target.value);
  modalOpen();
});

crossIcon.addEventListener("click", (e) => {
  modalClose();
});
