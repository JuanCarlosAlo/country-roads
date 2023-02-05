import { fetchData } from "../js/utility";

const ALLCOUNTRIES = await fetchData("https://restcountries.com/v3.1/all");

export { ALLCOUNTRIES };
