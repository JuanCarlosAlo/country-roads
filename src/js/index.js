// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import {
  createCardsByRegion,
  createCardsByCountry,
  cardsContainer
} from '../js/createCards.js';
import { modalOpen, modalClose } from '../js/modal.js';

const regionSelect = document.getElementById('region');
const inputCountry = document.getElementById('input-country');

const crossIcon = document.getElementById('cross-icon');

regionSelect.addEventListener('change', e => {
  createCardsByRegion(e.target.value);
});

addEventListener('keyup', e => {
  console.log(inputCountry.value);
  createCardsByCountry(inputCountry.value);
});

cardsContainer.addEventListener('click', e => {
  if (e.target.dataset.country) {
    modalOpen(e.target.dataset.country);
  }
});

crossIcon.addEventListener('click', e => {
  modalClose();
});
