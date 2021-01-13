import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from "./components/PokeList";
import SelectedPoke from "./components/SelectedPoke";

import data from "../data";

const getPokemen = () => {
  return(data);
}

const getPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      
    });
}

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getPokemon()
    setSelectedPokemon(data);
  };

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;
