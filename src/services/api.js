// src/services/api.js

const BASE_URL = 'https://your-api.com';

// Existing fetch-based request function (unchanged)
const request = async (endpoint, method = 'GET', data = null) => {
  try {
    const options = { method, headers: { 'Content-Type': 'application/json' } };
    if (data) options.body = JSON.stringify(data);

    const response = await fetch(`${BASE_URL}/${endpoint}`, options);
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
  }
};

// New post function for Sightengine API using axios
import axios from 'axios';
import { Alert } from 'react-native';

const apiClient = axios.create({
  timeout: 30000, // Increased timeout for video upload
});

const post = (endpoint, data, config = {}) => {
  Alert.alert(endpoint);
  return apiClient.post(endpoint, data, config);
};

// Export both functions
export default { request, post };