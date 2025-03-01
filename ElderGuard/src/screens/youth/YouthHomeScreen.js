// src/screens/youth/YouthHomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AlertCard from '../../components/AlertCard';
import Button from '../../components/Button';

function YouthHomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      // Fake data for nearby tasks
      const jobs = ['Assist', 'Check on', 'Help', 'Support', 'Visit'];
      const elderlyData = ['Mr. Sharma', 'Mrs. Gupta', 'Mr. Patel', 'Mrs. Singh', 'Mr. Rao'];
      
      // Shuffle elderlyData to avoid repetition
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      
      const shuffledElderly = shuffleArray([...elderlyData]);
      
      const generateFakeTasks = () => [
        { id: '1', title: `${jobs[Math.floor(Math.random() * jobs.length)]} ${shuffledElderly[0]}`, distance: `${(Math.random() * 5).toFixed(1)} km` },
        { id: '2', title: `${jobs[Math.floor(Math.random() * jobs.length)]} ${shuffledElderly[1]}`, distance: `${(Math.random() * 5).toFixed(1)} km` },
        { id: '3', title: `${jobs[Math.floor(Math.random() * jobs.length)]} ${shuffledElderly[2]}`, distance: `${(Math.random() * 5).toFixed(1)} km` },
        { id: '4', title: `${jobs[Math.floor(Math.random() * jobs.length)]} ${shuffledElderly[3]}`, distance: `${(Math.random() * 5).toFixed(1)} km` },
        { id: '5', title: `${jobs[Math.floor(Math.random() * jobs.length)]} ${shuffledElderly[4]}`, distance: `${(Math.random() * 5).toFixed(1)} km` },
      ];
      
      setTasks(generateFakeTasks());
    };
    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elderly Guard : Youth</Text>
      <Text style={styles.subtitle}>Help Nearby Seniors</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <AlertCard title={item.title} distance={item.distance} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Logout" onPress={() => navigation.navigate('Auth')} color="#888" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 10 },
});

export default YouthHomeScreen;