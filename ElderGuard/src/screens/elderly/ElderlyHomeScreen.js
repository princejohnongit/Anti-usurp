import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ElderlyHomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Elderly Assistance App</Text>
      
      {/* Section 1: Home & Tutorial Hub */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TutorialHubScreen')}>
          <Text style={styles.buttonText}>Tutorial Hub</Text>
        </TouchableOpacity>
      </View>
      
      {/* Section 2: Services & Virtual Walking Companion */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GeneralServicesScreen')}>
          <Text style={styles.buttonText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VirtualWalkingCompanionScreen')}>
          <Text style={styles.buttonText}>Virtual Walking Companion</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ElderlyHomeScreen;
