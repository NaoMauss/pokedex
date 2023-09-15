import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Pokedex' }}
        />
        <Stack.Screen
          name="PokemonDetail"
          component={PokemonDetail}
          options={{ title: 'Statistiques' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;