import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Importamos la pantalla de inicio
import RankingScreen  from './screens/RankingScreen'; // Importamos la pantalla de ranking

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Screen
          name="Ranking"
          component={RankingScreen}
          options={{ title: 'Ranking en Tiempo Real' }}
        />
    </NavigationContainer>
  );
};

export default App;
