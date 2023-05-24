const Pokemon = ({pokemon}) => {
        // pokemon.flavor_text_entries.flavor_text = Object.defineProperty(pokemon.flavor_text_entries.language.name === "en");
    const pokedexEntries= pokemon.flavor_text_entries.find(flavor_text_entry => flavor_text_entry.language.name === "en");
    const pokedexNumber= pokemon.pokedex_numbers.find(pokedex_number => pokedex_number.pokedex.name === "kanto");
    const eggGroups = pokemon.egg_groups.map(egg_group => egg_group.name);
    console.log(eggGroups);
    return ( 
        <div className="pokemon">
            <h4>Name: {pokemon.name.toUpperCase()}</h4>
            <p>Pokedex Number: {pokedexNumber.entry_number}</p>
            <p>Base Happiness: {pokemon.base_happiness}</p>
            <p>Capture Rate: {pokemon.capture_rate}</p>
            <p>Colour: {pokemon.color.name.toUpperCase()}</p>
            <p>Egg Group: {eggGroups.join(", ")}</p>
            {pokemon.evolves_from_species !== null &&<p>Prior Evolution: {pokemon.evolves_from_species.name}</p>}
            <p>Pokedex Text Entry: {pokedexEntries.flavor_text}</p> 
        </div>
     );
}
 
export default Pokemon;