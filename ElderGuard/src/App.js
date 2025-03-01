import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ElderlyHomeScreen from './src/screens/elderly/ElderlyHomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ElderlyHome">
        <Stack.Screen name="ElderlyHome" component={ElderlyHomeScreen} options={{ title: 'Elderly Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
