const gradientDictionary = {
    normal: ['#D7DDE8', '#757F9A'],
    fire: ['#FDDFDF', '#FFBABA'],
    water: ['#DEF3FD', '#B5E4FF'],
    electric: ['#FCF7DE', '#FFF6B7'],
    grass: ['#DEFDE0', '#BBE5B3'],
    ice: ['#DEF3FD', '#B5E4FF'],
    fighting: ['#E6E0D4', '#D8C7BE'],
    poison: ['#E6E0D4', '#D8C7BE'],
    ground: ['#F4E7DA', '#E1D4C0'],
    flying: ['#F5F5F5', '#E0E0E0'],
    psychic: ['#F5F5F5', '#E0E0E0'],
    bug: ['#F5F5F5', '#E0E0E0'],
    rock: ['#F5F5F5', '#E0E0E0'],
    ghost: ['#F5F5F5', '#E0E0E0'],
    dragon: ['#F5F5F5', '#E0E0E0'],
    dark: ['#F5F5F5', '#E0E0E0'],
    steel: ['#F5F5F5', '#E0E0E0'],
    fairy: ['#F5F5F5', '#E0E0E0'],
};

const getGradientColors = (types) => {
    const gradientColors = types.map((type) => {
        return gradientDictionary[type.name];
    });

    return gradientColors;
};

