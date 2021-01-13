import { useState, useEffect } from 'react';
import pokemonServices from './../services/pokemonServices';

const usePokeState = (initialValues) => {
    const [pokemen, setPokemen] = useState(initialValues.pokemen);
    const [selectedPokemon, setSelectedPokemon] = useState(initialValues.selectedPokemon);

    useEffect(() => {
        setPokemen(pokemonServices.fetchAllPoke());
    }, []);

    const handlePoke = (id) => {
        pokemonServices.fetchSelectedPoke(id)
            .then((data) => {
                setSelectedPokemon(data);
            });
    };

    return([pokemen, selectedPokemon, handlePoke]);
}

export default usePokeState;