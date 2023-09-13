import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, FlatList, ScrollView, TextInput } from 'react-native';
import PokemonCard from './PokemonCard';
import React from 'react';
import { useEffect, useState } from 'react';

const Home = () => {

  const [data, setData] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  // same useEffect but add a console log 
  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/1000')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setFilteredPokemons(json)
      })
      .catch((error) => console.error(error))
  }, []);

  const handleSearch = (query) => {
    const currentSearch = query.toLowerCase();
    const filteredData = data.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(currentSearch);
    })
    setFilteredPokemons(filteredData);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Search' onChangeText={(text) => handleSearch(text)} style={styles.searchBar} clearButtonMode='always' />
      <FlatList
        data={filteredPokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} key={item.id} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    elevation: 5,
    margin: 20,
    borderRadius: 10,
  }
});

export default Home;