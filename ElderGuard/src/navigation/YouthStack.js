import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import YouthHomeScreen from '../screens/youth/YouthHomeScreen';

const Stack = createStackNavigator();

function YouthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="YouthHome" component={YouthHomeScreen} />
    </Stack.Navigator>
  );
}

export default YouthStack;