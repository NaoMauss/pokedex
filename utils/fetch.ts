const url = "https://pokeapi.co/api/v2/pokemon/"
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
import { PokemonData } from "./types";

const getPokemons = async (): Promise<PokemonData[]> => {
    const pokemons = await Promise.all(
        array.map(async (id) => {
            const response = await fetch(`${url}${id}`);
            const pokemon = await response.json();
            return pokemon;
        })
    );
    const sortedPokemons = pokemons.sort((a, b) => a.id - b.id);
    console.log(JSON.stringify(sortedPokemons, null, 2));
    return sortedPokemons;
}

getPokemons();