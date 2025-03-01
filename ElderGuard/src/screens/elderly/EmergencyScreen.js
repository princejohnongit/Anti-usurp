import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function EmergencyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Alert Sent</Text>
      <Text style={styles.subtitle}>Help is on the way!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#ff4444' },
  subtitle: { fontSize: 18, marginTop: 10 },
});

export default EmergencyScreen;