import { useState } from "react";

const PokemonForm = ({filterN, nonFilter}) => {

    const [searchPokemon, setSearchPokemon] = useState("");
    const HandleSubmit = (event) => {
        event.preventDefault();
        filterN(searchPokemon)
    }
    const HandleInputChange = (event) => {
        setSearchPokemon(event.target.value);
    }
    const HandleReturn = (event) => {
        event.preventDefault();
        nonFilter(searchPokemon);
    }

    return (
        <>
        <form onSubmit={HandleSubmit}>
            <div className="joke">
            <h2>Search Pokémon:</h2>
            </div>
            <input
            type="text"
            name="pokemonName"
            placeholder="Pokemon Name"
            value={searchPokemon}
            onChange={HandleInputChange}
            />
            <input type="submit" value="Enter"/>
        </form>
        <button onClick={HandleReturn}>Back To List</button>
        </>
    );
}
 
export default PokemonForm;