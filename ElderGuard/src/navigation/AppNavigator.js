// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import ElderlyStack from './ElderlyStack';
import YouthStack from './YouthStack';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Elderly" component={ElderlyStack} />
      <Stack.Screen name="Youth" component={YouthStack} />
    </Stack.Navigator>
  );
}

export default AppNavigator;