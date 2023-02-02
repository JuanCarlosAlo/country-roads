import { fetchDataNameCountry, fetchDataNameRegion } from '../js/utility';

const cardsContainer = document.getElementById('cards-container');

const createCards = async region => {
  cardsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const data = await fetchDataNameRegion(
    `https://restcountries.com/v3.1/region/${region}`
  );
  data.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card__flag');
    cardImg.src = element.flags.svg;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card__info');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card__info--title');
    cardTitle.textContent = element.name.common;

    const cardPopulation = document.createElement('div');
    cardPopulation.classList.add('card__info--region');
    cardPopulation.textContent = element.population;

    const cardRegion = document.createElement('div');
    cardRegion.classList.add('card__info--region');
    cardRegion.textContent = element.region;

    const cardCapital = document.createElement('div');
    cardCapital.classList.add('card__info--capital');
    cardCapital.textContent = element.capital[0];

    cardInfo.append(cardTitle, cardPopulation, cardRegion, cardCapital);
    card.append(cardImg, cardInfo);
    fragment.append(card);
  });

  cardsContainer.append(fragment);

  console.log(data);
};

export { createCards };
