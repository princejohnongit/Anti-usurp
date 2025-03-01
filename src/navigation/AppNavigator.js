import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import ElderlyStack from './ElderlyStack';
import YouthStack from './YouthStack';
import { useAuth } from '../services/authService';

const Stack = createStackNavigator();

function AppNavigator() {
  const { user, isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : user.role === 'elderly' ? (
        <Stack.Screen name="Elderly" component={ElderlyStack} />
      ) : (
        <Stack.Screen name="Youth" component={YouthStack} />
      )}
    </Stack.Navigator>
  );
}

export default AppNavigator;