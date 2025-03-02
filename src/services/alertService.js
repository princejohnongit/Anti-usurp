import { Alert } from 'react-native';
import { api } from './api';

export const alertService = {
  sendAlert: async () => {
    try {
        Alert.alert('Sending Alert');
    //   await api.post('/send-alert', { userId: 'currentUserId', timestamp: Date.now() });
    //   console.log('Alert sent');
    } catch (error) {
      console.error('Alert failed', error);
    }
  },
  getNearbyTasks: async (location) => {
    try {
        Alert.alert('Updated Tasks');
    //   const response = await api.post('/nearby-tasks', { lat: location.lat, lon: location.lon });
    //   return response.data.tasks; // e.g., [{ id, title, distance }]
    } catch (error) {
      return [];
    }
  },
};