import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { PokemonData } from '../utils/types';
import { useNavigation } from '@react-navigation/native';

const PokemonDetail = ({ route }) => {
    const [pokemonStats, setPokemonStats] = useState<PokemonData>();
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const { id, image, apiEvolutions } = route.params.pokemon;

    useEffect(() => {
        fetch(url + id)
            .then((response) => response.json())
            .then((json) => {
                setPokemonStats(json as PokemonData)
                console.log(JSON.stringify(json, null, 2))
            })
            .catch((error) => console.error(error))
    }, [])

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: image }} // Remplacez "imageUrl" par la clé correcte pour l'URL de l'image du Pokémon
            />
            <Text>Poids: {pokemonStats?.weight || 60} kg</Text>
            <Text>Taille: {pokemonStats?.height || 100} cm</Text>
            {
                apiEvolutions.map((evolution) => {
                    return (
                        <TouchableOpacity>
                            <Text>Evolution : {evolution.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        resizeMode: 'contain', // Ajustez la mise en page de l'image selon vos besoins
    },
    text: {
        fontSize: 16, // Taille de police
        fontWeight: 'bold',
        marginBottom: 10
    },
});

export default PokemonDetail;
