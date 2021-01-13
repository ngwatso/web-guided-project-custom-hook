import React, { useState, useEffect } from "react";
import "./styles.scss";

import pokemonServices from './services/pokemonServices';

import PokeList from './components/PokeList';
import SelectedPoke from './components/SelectedPoke';
import data from "./../data";

const usePokeState = (initialValues) => {
  const [pokemen, setPokemen] = useState(initialValues.pokemen);
  const [selectedPokemon, setSelectedPokemon] = useState(initialValues.selectedPokemon);

  useEffect(() => {
    setPokemen(pokemonServices.fetchAllPoke());
  }, []);

  const handlePoke = (id) => {
    pokemonServices.fetchSelectedPoke(id).then((data) => {
        setSelectedPokemon(data);
    });
  };

  return([pokemen, selectedPokemon, handlePoke]);
}

const initialValues = {
  pokemen: [],
  selectedPokemon: {}
}

function App() {
  const [pokemen, selectedPokemon, handlePoke] = usePokeState(initialValues);
  
  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;
