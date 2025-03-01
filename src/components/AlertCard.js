import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AlertCard({ title, distance }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.distance}>{distance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, borderWidth: 1, borderColor: '#ddd', marginVertical: 5, borderRadius: 5 },
  title: { fontSize: 16, fontWeight: 'bold' },
  distance: { fontSize: 14, color: '#666' },
});

export default AlertCard;