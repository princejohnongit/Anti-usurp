/*import React from 'react';
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
*/
import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import DeepfakeDetectionScreen from './screens/elderly/DeepfakeDetectionScreen';

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

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <DeepfakeDetectionScreen />
    </NativeBaseProvider>
  );
}

/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
*/