// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createCards } from '../js/createCards.js';

const regionSelect = document.getElementById('region');

regionSelect.addEventListener('change', e => {
  console.log(e.target.value);
  createCards(e.target.value);
});
