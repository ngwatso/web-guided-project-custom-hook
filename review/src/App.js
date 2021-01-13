import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from './components/PokeList';
import SelectedPoke from './components/SelectedPoke';
import usePokeState from './hooks/pokemonHooks';

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