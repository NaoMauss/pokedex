import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, FlatList, ScrollView, TextInput, Button } from 'react-native';
import PokemonCard from './PokemonCard';
import React from 'react';
import { useEffect, useState } from 'react';

const Home = () => {

  const [data, setData] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [orderByValue, setOrderBy] = useState('id');

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

  const handleSortCroissant = (orderBy) => {
    const sortedData = [...filteredPokemons];
    if (orderBy === 'id') {
      sortedData.sort((a, b) => a.pokedexId - b.pokedexId);
      setOrderBy('id');
    }
    sortedData.sort((a, b) => {
      if (a.stats[orderBy] < b.stats[orderBy]) {
        return -1;
      }
      if (a.stats[orderBy] > b.stats[orderBy]) {
        return 1;
      }
      return 0;
    })
    setOrderBy(orderBy);
    setFilteredPokemons(sortedData);
  }

  const handleSortDecroissant = (orderBy) => {
    const sortedData = [...filteredPokemons];
    if (orderBy === 'id') {
      sortedData.sort((a, b) => b.pokedexId - a.pokedexId);
      setOrderBy('id');
    }
    sortedData.sort((a, b) => {
      if (a.stats[orderBy] > b.stats[orderBy]) {
        return -1;
      }
      if (a.stats[orderBy] < b.stats[orderBy]) {
        return 1;
      }
      return 0;
    })
    setOrderBy(orderBy);
    setFilteredPokemons(sortedData);
  }

  const handleSort = (orderBy) => {
    if (orderBy === orderByValue) {
      handleSortDecroissant(orderBy);
      return
    }
    handleSortCroissant(orderBy);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Search' onChangeText={(text) => handleSearch(text)} style={styles.searchBar} clearButtonMode='always' />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => handleSort('id')}
          title="ID"
          color="#000"
          accessibilityLabel="Sort by ID"
        />
        <Button
          onPress={() => handleSort('HP')}
          title="HP"
          color="#000"
          accessibilityLabel="Sort by HP"
        />
        <Button
          onPress={() => handleSort('speed')}
          title="Speed"
          color="#000"
          accessibilityLabel="Sort by Speed"
        />
      </View>
      <FlatList
        data={filteredPokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} key={item.id} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

    </View >
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  buttonSort: {
    margin: 20,
  }
});

export default Home;