

export getPokemen = () => {
    return(data);
  }
  
export getPokemon =() => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            return(data);
        });
}