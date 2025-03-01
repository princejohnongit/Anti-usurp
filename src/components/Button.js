import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function Button({ title, onPress, color = '#007AFF' }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 10, borderRadius: 5, marginVertical: 5, width: 200, alignItems: 'center' },
  text: { color: '#fff', fontSize: 16 },
});

export default Button;