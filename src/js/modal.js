import { filterCountry, formatNumber } from "../js/createCards.js";
import { ALLCOUNTRIES } from "../js/const";

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalNativeName = document.getElementById("modal-native-name");
const modalImg = document.getElementById("modal-img");
const modalLanguage = document.getElementById("modal-language");
const modalPopulation = document.getElementById("modal-population");
const modalRegion = document.getElementById("modal-region");
const modalSubRegion = document.getElementById("modal-sub-region");
const modalCapital = document.getElementById("modal-capital");
const modalTLD = document.getElementById("modal-top-level");
const modalCurrencies = document.getElementById("modal-currencies");
const modalBorder = document.getElementById("modal-border");

const filterData = (arr, searchKey) => {
  return arr.filter((obj) =>
    Object.keys(obj.name).some(
      (key) => obj.name.common.toLowerCase() === searchKey
    )
  );
};
const filterBorderCountry = (arr, searchKey) => {
  return arr.filter((obj) => obj.cca3 === searchKey);
};

const modalOpen = (data) => {
  modal.classList.add("modal--show");
  modal.children[0].classList.add("modal__container--show");
  modalPrintText(data);
};

const modalClose = () => {
  modal.children[0].classList.remove("modal__container--show");
  modal.classList.remove("modal--show");
};

const createModalBoreder = (dataCountry) => {
  modalBorder.innerHTML = "";
  const borders = dataCountry[0].borders;
  const fragment = document.createDocumentFragment();
  console.dir(dataCountry);

  borders.forEach((element) => {
    const borderElement = document.createElement("div");
    const borderCountry = filterBorderCountry(ALLCOUNTRIES, element);
    borderElement.textContent = borderCountry[0].name.common;
    borderElement.dataset.country = borderCountry[0].name.common.toLowerCase();
    borderElement.classList.add("modal__border__button");
    fragment.append(borderElement);
  });
  modalBorder.append(fragment);
};

const modalPrintText = (data) => {
  modalImg.innerHTML = "";
  const dataCountry = filterData(ALLCOUNTRIES, data);

  const lenguageKey = Object.keys(dataCountry[0].languages);
  const lenguageAmmount = Object.values(dataCountry[0].languages);
  const tldAmmount = Object.values(dataCountry[0].tld);
  const currenciesAmmount = Object.values(dataCountry[0].currencies);

  modalImg.src = dataCountry[0].flags.svg;

  modalTitle.textContent = dataCountry[0].name.common;

  modalPopulation.children[0].textContent = formatNumber(
    dataCountry[0].population
  );
  modalPopulation.children[0].classList.add("sub-text");

  modalRegion.children[0].textContent = dataCountry[0].region;
  modalRegion.children[0].classList.add("sub-text");

  modalSubRegion.children[0].textContent = dataCountry[0].subregion;
  modalSubRegion.children[0].classList.add("sub-text");

  modalCapital.children[0].textContent = dataCountry[0].capital;
  modalCapital.children[0].classList.add("sub-text");

  const currenciesArray = [];
  currenciesAmmount.forEach((element) => {
    currenciesArray.push(element.name + " ");
    modalCurrencies.children[0].textContent = currenciesArray;
    modalCurrencies.children[0].classList.add("sub-text");
    console.log(element);
  });

  const tldArray = [];
  tldAmmount.forEach((element) => {
    tldArray.push(element + " ");
    modalTLD.children[0].textContent = tldArray;
    modalTLD.children[0].classList.add("sub-text");
  });

  const languagesArray = [];
  lenguageAmmount.forEach((element) => {
    languagesArray.push(element + " ");
    modalLanguage.children[0].textContent = languagesArray;
    modalLanguage.children[0].classList.add("sub-text");
  });
  lenguageKey.forEach((element) => {
    modalNativeName.children[0].textContent =
      dataCountry[0].name.nativeName[element].official;
    modalNativeName.children[0].classList.add("sub-text");
  });
  createModalBoreder(dataCountry);
};

export { modalOpen, modalClose, modalBorder };
