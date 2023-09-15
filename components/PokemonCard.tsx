import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Pokemon } from '../utils/types';

const PokemonCard = ({ pokemon, navigation }) => {

  const navigateToPokemonDetail = (pokemon) => {
    navigation.navigate('PokemonDetail', { pokemon });
  };

  const pokemonImage = {
    id: pokemon.id,
    image: pokemon.image,
    apiEvolutions: pokemon.apiEvolutions,
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigateToPokemonDetail(pokemonImage)}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.type}>Type: {pokemon.apiTypes[0].name}</Text>
      <Text style={styles.number}># {pokemon.pokedexId}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '46%', // Pour afficher 2 cartes par ligne, ajustez ceci selon vos besoins
    margin: '2%', // Espace entre les cartes
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  type: {
    fontSize: 14,
    marginTop: 2,
  },
  number: {
    fontSize: 12,
    marginTop: 2,
  },
  back: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  face: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default PokemonCard;