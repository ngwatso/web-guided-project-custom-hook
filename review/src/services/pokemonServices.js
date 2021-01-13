import data from "./../../data";

const fetchSelectedPoke = (id) => {
  const servicePromise =  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return servicePromise;
};

const fetchAllPoke = () => {
  return data;
};

export default {
  fetchSelectedPoke,
  fetchAllPoke
};
