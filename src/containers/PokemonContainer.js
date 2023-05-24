import { useEffect, useState } from "react";
import PokemonForm from "../components/PokemonForm";
import PokemonList from "../components/PokemonList";


const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonToDisplay, setPokemonToDisplay] = useState([]);
    
    const fetchPokemons = async () => {

            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
            const jsonData = await response.json();
            const urls = jsonData.results.map((result) => `https://pokeapi.co/api/v2/pokemon-species/${result.name}`);
            
            const allPromises = [];
            urls.forEach((url)=>{
                allPromises.push(
                    fetch(url)
                    .then(response => response.json())
                )
            })

            const allResults = await Promise.all(allPromises);

            setPokemons(allResults.flat());
            setPokemonToDisplay(allResults.flat());
    };

    useEffect(()=>{
        fetchPokemons();
    }, []);

    const filterPokemonByName = (name) => {
        const foundPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
        setPokemonToDisplay(foundPokemon);
    }


// 1. filter pokemon by name
// 2. pass function as prop to pokemon form
// 3. in the form call the function when the form is submitted




    return ( 
        <>
        <div className="Top">
        <h1>Kanto Pokémon Encyclopedia</h1>
        </div>
            <div className="T">
            <PokemonForm filterN={filterPokemonByName} nonFilter={fetchPokemons}/>
            </div>
            <div className="pikachu">
            <PokemonList pokemons={pokemonToDisplay}/>
            </div>

        </>
     );
}
 
export default PokemonContainer;