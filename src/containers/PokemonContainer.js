import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import '../containers/PokemonContainer.css';

const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonURLs, setPokemonURLs] = useState([]);
    

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
    };

    useEffect(()=>{
        fetchPokemons();
    }, []);


    return ( 
        <>
            <h1>Pokemon</h1>
            {/* <PokemonForm/> */}
            <hr/>
            <PokemonList pokemons={pokemons}/>
        </>
     );
}
 
export default PokemonContainer;