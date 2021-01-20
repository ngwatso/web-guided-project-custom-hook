import data from "./../../data";

const getPokemen = () => {
	return data;
};

const getPokemon = (id) => {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
};

export default {
	getPokemon,
	getPokemen,
};
