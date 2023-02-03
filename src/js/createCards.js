import { fetchData } from '../js/utility';

const cardsContainer = document.getElementById('cards-container');

const createCardElement = element => {
  const card = document.createElement('div');
  card.classList.add('card');
  console.log(element);
  card.dataset.country = element.name.common.toLowerCase();

  return card;
};

const createCardImg = element => {
  const cardImg = document.createElement('img');
  cardImg.classList.add('card__flag');
  cardImg.src = element.flags.svg;
  return cardImg;
};

const createCardInfo = () => {
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card__info');
  return cardInfo;
};

const createCardTitle = element => {
  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card__info--title');
  cardTitle.textContent = element.name.common;
  return cardTitle;
};

const createCardPopulation = element => {
  const cardPopulation = document.createElement('div');
  cardPopulation.classList.add('card__info--region');
  cardPopulation.textContent = 'Population: ' + element.population;
  return cardPopulation;
};

const createCardRegion = element => {
  const cardRegion = document.createElement('div');
  cardRegion.classList.add('card__info--region');
  cardRegion.textContent = 'Region: ' + element.region;
  return cardRegion;
};

const createCardCapital = element => {
  const cardCapital = document.createElement('div');
  cardCapital.classList.add('card__info--capital');
  if (element.capital) {
    cardCapital.textContent = 'Capital: ' + element.capital[0];
  } else {
    cardCapital.textContent = 'Capital: None';
  }

  return cardCapital;
};

const createCardsByRegion = async region => {
  cardsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const dataRegion = await fetchData(
    `https://restcountries.com/v3.1/region/${country}`
  );

  dataRegion.forEach(element => {
    const cardElement = createCardElement(element);

    const cardInfoElement = createCardInfo();

    cardInfoElement.append(
      createCardTitle(element),
      createCardPopulation(element),
      createCardRegion(element),
      createCardCapital(element)
    );
    cardElement.append(createCardImg(element), cardInfoElement);
    fragment.append(cardElement);
  });

  cardsContainer.append(fragment);
};

const createCardsByCountry = async country => {
  cardsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const dataRegion = await fetchData(
    `https://restcountries.com/v3.1/name/${country}`
  );
  console.log(dataRegion);
  dataRegion.forEach(element => {
    const cardElement = createCardElement(element);

    const cardInfoElement = createCardInfo();

    cardInfoElement.append(
      createCardTitle(element),
      createCardPopulation(element),
      createCardRegion(element),
      createCardCapital(element)
    );
    cardElement.append(createCardImg(element), cardInfoElement);
    fragment.append(cardElement);
  });

  cardsContainer.append(fragment);
};

export { createCardsByRegion, createCardsByCountry, cardsContainer };
