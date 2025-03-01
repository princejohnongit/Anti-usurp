import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, PermissionsAndroid } from 'react-native';
import AlertCard from '../../components/AlertCard';
import { alertService } from '../../services/alertService';
import { locationService } from '../../services/locationService';
import { useAuth } from '../../services/authService';

function YouthHomeScreen() {
  const { logout } = useAuth();
  const [tasks, setTasks] = useState([]);

  const requestLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      { title: 'Location Permission', message: 'Needed to find nearby tasks', buttonPositive: 'OK' }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };

  useEffect(() => {
    const fetchTasks = async () => {
      if (await requestLocationPermission()) {
        const location = await locationService.getLocation();
        const nearbyTasks = await alertService.getNearbyTasks(location);
        setTasks(nearbyTasks);
      }
    };
    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SilverSafety Youth</Text>
      <Text style={styles.subtitle}>Help Nearby Seniors</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <AlertCard title={item.title} distance={item.distance} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Logout" onPress={logout} color="#888" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 10 },
});

export default YouthHomeScreen;