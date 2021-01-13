import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from "./components/PokeList";
import SelectedPoke from "./components/SelectedPoke";

import {  getPokemen, getPokemon } from './services/pokeService';

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getPokemon()
      .then(data => {
        setSelectedPokemon(data);
      });
  };

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;
