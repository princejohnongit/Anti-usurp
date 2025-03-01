import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ElderlyHomeScreen from '../screens/elderly/ElderlyHomeScreen';
import EmergencyScreen from '../screens/elderly/EmergencyScreen';

const Stack = createStackNavigator();

function ElderlyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ElderlyHome" component={ElderlyHomeScreen} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />
    </Stack.Navigator>
  );
}

export default ElderlyStack;