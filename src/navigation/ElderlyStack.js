import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ElderlyHomeScreen from '../screens/elderly/ElderlyHomeScreen';
import EmergencyScreen from '../screens/elderly/EmergencyScreen';
import DeepfakeDetectionScreen from '../screens/elderly/DeepfakeDetectionScreen';
import { NativeBaseProvider, extendTheme } from 'native-base';

const Stack = createStackNavigator();

// Custom theme for attractive UI
const theme = extendTheme({
  colors: {
    primary: {
      500: '#4F46E5',
    },
    secondary: {
      500: '#10B981',
    },
  },
});

function ElderlyStack() {
  return (
    <NativeBaseProvider theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ElderlyHome" component={ElderlyHomeScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen name="DeepFake" component={DeepfakeDetectionScreen} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
}

export default ElderlyStack;