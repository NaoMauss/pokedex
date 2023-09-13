import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card'
import { Pokemon } from '../utils/types';

const PokemonCard = ({ pokemon }) => {
  return (
    <FlipCard style={styles.cardContainer}>
      <View style={styles.face}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.type}>Type: {pokemon.apiTypes[0].name}</Text>
        <Text style={styles.number}># {pokemon.pokedexId}</Text>
      </View>
      <View style={styles.back}>
        <Text style={styles.name}>HP: {pokemon.stats.HP}</Text>
        <Text style={styles.number}>Attack: {pokemon.stats.attack}</Text>
        <Text style={styles.number}>Defense: {pokemon.stats.defense}</Text>
        <Text style={styles.number}>Speed: {pokemon.stats.speed}</Text>
      </View>
    </FlipCard>

  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '94%', // Pour afficher 2 cartes par ligne, ajustez ceci selon vos besoins
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