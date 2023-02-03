import { fetchData } from '../js/utility';

const modal = document.getElementById('modal');
const modalInfo = document.getElementById('modal__info');
const modalTitle = document.getElementById('modal-title');
const modalNativeName = document.getElementById('modal-native-name');
const modalImg = document.getElementById('modal-img');

const modalOpen = data => {
  modal.classList.add('modal--show');
  modal.children[0].classList.add('modal__container--show');
  modalPrintText(data);
};

const modalClose = () => {
  modal.children[0].classList.remove('modal__container--show');
  modal.classList.remove('modal--show');
};

const modalPrintText = async data => {
  modalImg.innerHTML = '';
  const dataCountry = await fetchData(
    `https://restcountries.com/v3.1/name/${data}`
  );
  console.log(dataCountry);
  modalImg.src = dataCountry[0].flags.svg;

  modalTitle.textContent = dataCountry[0].name.common;
};

export { modalOpen, modalClose };
