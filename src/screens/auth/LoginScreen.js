// src/screens/auth/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!phone.trim()) {
      Alert.alert('Error', 'Please enter a phone number');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      Alert.alert('Error', 'Please enter a valid 10-digit Indian phone number (e.g., 9876543210)');
      return;
    }

    // Dummy data logic with direct navigation
    if (phone === '1111111111') {
      // All 1s: Youth user
      navigation.navigate('Youth', { screen: 'YouthHome' });
    } else if (phone === '2222222222') {
      // All 2s: Elderly user
      navigation.navigate('Elderly', { screen: 'ElderlyHome' });
    } else {
      Alert.alert('Error', 'Invalid phone number. Use 1111111111 for Youth or 2222222222 for Elderly');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elder Guard</Text>
      <Text style={styles.subtitle}>Sign in to get started</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number (e.g., 1111111111 or 2222222222)"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        maxLength={10}
        autoCapitalize="none"
      />
      <Button title="Next" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    maxWidth: 300,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;