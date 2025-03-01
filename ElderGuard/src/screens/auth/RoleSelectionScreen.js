// src/screens/auth/RoleSelectionScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RoleSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <Button title="Login as Elderly" onPress={() => navigation.navigate('ElderlyLoginScreen')} />
      <Button title="Login as Youth" onPress={() => navigation.navigate('YouthLoginScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RoleSelectionScreen;
