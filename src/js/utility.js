const fetchDataNameCountry = async url => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

const fetchDataNameRegion = async url => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

export { fetchDataNameCountry, fetchDataNameRegion };
