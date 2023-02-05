const cardsContainer = document.getElementById("cards-container");

const filterCountry = (arr, searchKey) => {
  return arr.filter((obj) =>
    Object.keys(obj.name).some((key) =>
      obj.name.common.toLowerCase().includes(searchKey)
    )
  );
};
const filterRegion = (arr, searchKey) => {
  return arr.filter((obj) =>
    Object.keys(obj.name).some((key) =>
      obj.region.toLowerCase().includes(searchKey)
    )
  );
};

const createCardElement = (element) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.dataset.country = element.name.common.toLowerCase();

  return card;
};

const createCardImg = (element) => {
  const cardImg = document.createElement("img");
  cardImg.classList.add("card__flag");
  cardImg.src = element.flags.svg;
  return cardImg;
};

const createCardInfo = () => {
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__info");
  return cardInfo;
};

const createCardTitle = (element) => {
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card__info--title");
  cardTitle.textContent = element.name.common;
  return cardTitle;
};

const formatNumber = (number) => {
  let numberToString = String(number);
  let numberWithFormat = "";
  for (let index = numberToString.length - 1; index >= 0; index--) {
    const checkPosition = numberToString.length - index;
    if (checkPosition % 3 === 0 && checkPosition !== 1) numberWithFormat += ".";
    numberWithFormat += numberToString[index];
  }

  return numberWithFormat;
};

const createCardPopulation = (element) => {
  const cardPopulation = document.createElement("div");
  cardPopulation.classList.add("text");
  cardPopulation.textContent = "Population: ";
  const subCardPopulation = document.createElement("span");
  subCardPopulation.classList.add("sub-text");
  subCardPopulation.textContent = formatNumber(element.population);
  cardPopulation.append(subCardPopulation);
  return cardPopulation;
};

const createCardRegion = (element) => {
  const cardRegion = document.createElement("div");
  cardRegion.classList.add("text");
  cardRegion.textContent = "Region: ";
  const subcardRegion = document.createElement("span");
  subcardRegion.classList.add("sub-text");
  subcardRegion.textContent = element.region;
  cardRegion.append(subcardRegion);
  return cardRegion;
};

const createCardCapital = (element) => {
  const cardCapital = document.createElement("div");
  cardCapital.classList.add("text");
  cardCapital.textContent = "Capital: ";
  const subcardCapital = document.createElement("span");
  subcardCapital.classList.add("sub-text");
  if (element.capital) {
    subcardCapital.textContent = element.capital[0];
  } else {
    subcardCapital.textContent = "None";
  }
  cardCapital.append(subcardCapital);
  return cardCapital;
};

const createCardsByRegion = (region, allCountries) => {
  cardsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const filteredRegions = filterRegion(allCountries, region.toLowerCase());

  filteredRegions.forEach((element) => {
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

const createCardsByCountry = (country, allCountries) => {
  cardsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const filteredCountries = filterCountry(allCountries, country.toLowerCase());

  filteredCountries.forEach((element) => {
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

const printAllCountries = (countriesArray) => {
  cardsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  countriesArray.forEach((element) => {
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

export {
  createCardsByRegion,
  createCardsByCountry,
  cardsContainer,
  printAllCountries,
  filterCountry,
  formatNumber,
};
