import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { PokemonData } from '../utils/types';
import { useNavigation } from '@react-navigation/native';

const PokemonDetail = ({ route }) => {
    const [pokemonStats, setPokemonStats] = useState<PokemonData>();
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const { id, image, apiEvolutions, stats, apiPreEvolution } = route.params.pokemon;

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
                source={{ uri: image }}
            />
            <Text style={styles.text} >Poids: {pokemonStats?.weight || 60} kg</Text>
            <Text style={styles.text}>Taille: {pokemonStats?.height || 100} cm</Text>

            {
                apiPreEvolution ? <TouchableOpacity>
                    <Text style={styles.text}>Pre Evolution : {apiPreEvolution.name}</Text>
                </TouchableOpacity> : null
            }
            {
                apiEvolutions.map((evolution) => {
                    return (
                        <TouchableOpacity>
                            <Text style={styles.text}>Evolution : {evolution.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }

            {stats.HP ? <Text style={styles.text}>HP: {stats.HP}</Text> : null}
            {stats.attack ? <Text style={styles.text}>Attack: {stats.attack}</Text> : null}
            {stats.defense ? <Text style={styles.text}>Defense: {stats.defense}</Text> : null}
            {stats.speed ? <Text style={styles.text}>Speed: {stats.speed}</Text> : null}
            {stats.special_attack ? <Text style={styles.text}>Special Attack: {stats.special_attack}</Text> : null}
            {stats.special_defense ? <Text style={styles.text}>Special Defense: {stats.special_defense}</Text> : null}
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
        resizeMode: 'contain',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
});

export default PokemonDetail;
