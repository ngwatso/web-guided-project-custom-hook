import React, { useState, useEffect } from "react";
import "./styles.scss";

import PokeList from "./components/PokeList";
import SelectedPoke from "./components/SelectedPoke";

import data from "../data";

const getPokemen = ()=>{
  return(data);
}

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(data);
  }, []);

  const handlePoke = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
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
