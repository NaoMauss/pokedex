interface Pokemon {
    id: number;
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: {
        HP: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    };
    apiTypes: {
        name: string;
        image: string;
    }[];
    apiGeneration: number;
    apiResistances: {
        name: string;
        damage_multiplier: number;
        damage_relation: string;
    }[];
    resistanceModifyingAbilitiesForApi: any[]; // You can replace this with a specific type if needed
    apiEvolutions: {
        name: string;
        pokedexId: number;
    }[];
    apiPreEvolution: string; // Replace with a specific type if needed
    apiResistancesWithAbilities: any[]; // Replace with a specific type if needed
}

interface PokemonApi {
    name: string;
    url: string;
}

interface PokemonData {
    abilities: any[]; // Vous pouvez remplacer "any[]" par un type spécifique si nécessaire
    base_experience: number;
    forms: any[]; // Vous pouvez remplacer "any[]" par un type spécifique si nécessaire
    game_indices: any[]; // Vous pouvez remplacer "any[]" par un type spécifique si nécessaire
    height: number;
    held_items: any[]; // Vous pouvez remplacer "any[]" par un type spécifique si nécessaire
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[]; // Vous pouvez remplacer "any[]" par un type spécifique si nécessaire
    name: string;
    order: number;
    past_types: any[]; // Vous pouvez remplacer "any[]" par un type spécifique si nécessaire
    species: any; // Vous pouvez remplacer "any" par un type spécifique si nécessaire
    sprites: any; // Vous pouvez remplacer "any" par un type spécifique si nécessaire
    stats: any[]; // Vous pouvez remplacer "any[]" par un type spécifique si nécessaire
    types: any[]; // Vous pouvez remplacer "any[]" par un type spécifique si nécessaire
    weight: number;
}

export type { Pokemon, PokemonApi, PokemonData };