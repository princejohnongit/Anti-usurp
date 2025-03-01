import React, { useState } from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Dimensions, Alert, Image 
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const { width } = Dimensions.get('window');

const DeepfakeDetectionScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [deepfakePercentage, setDeepfakePercentage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sample image (local file)
//   const sampleImage = require('../../assets/deep_fake_child.jpg');
//   const sampleImage = 'https://sightengine.com/assets/img/examples/example-fac-1000.jpg'
    const sampleImage = 'https://this-person-does-not-exist.com/img/avatar-gena49c78abd32b3f45eb1dcc5536b30a12.jpg'

  // Hardcoded API Credentials for Local Testing
  const API_ENDPOINT = 'https://api.sightengine.com/1.0/check.json';
  const API_USER = '172542601';
  const API_SECRET = 'MsQaEmHmz9gATYdVXcLh3Ft4RfbEQkcE';
  const MODEL = 'deepfake';

  const selectImage = () => {
    const options = { mediaType: 'photo' };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        setDeepfakePercentage(null);
      }
    });
  };

  const useSampleImage = () => {
    setImageUri(sampleImage);
    setDeepfakePercentage(null);
  };

  const analyzeImage = async () => {
    if (!imageUri) {
      Alert.alert('Please select an image first!');
      return;
    }

    setLoading(true);
    try {

      const response = await axios.get(API_ENDPOINT, {
        params: { 
            'url': imageUri,
            'models': MODEL,
            'api_user': API_USER,
            'api_secret': API_SECRET,
        },
      });

      if (response.data.status === 'success') {
        const probability = response.data.type.deepfake;
        setDeepfakePercentage(probability * 100);
      } else {
        Alert.alert('Analysis failed', 'Invalid response from API');
      }
    } catch (error) {
      console.error('Error analyzing image:', error);
      Alert.alert('Error', 'Failed to analyze image', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Deepfake Detector</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSecondary} onPress={useSampleImage}>
          <Text style={styles.buttonText}>Use Sample Image</Text>
        </TouchableOpacity>
      </View>
      {imageUri && (
        <View style={styles.imageContainer}>
          <Image
            source={typeof imageUri === 'string' ? { uri: imageUri } : imageUri}
            style={styles.imagePreview}
          />
        </View>
      )}
      <TouchableOpacity
        style={[styles.buttonPrimary, (!imageUri || loading) && styles.buttonDisabled]}
        onPress={analyzeImage}
        disabled={!imageUri || loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>Check Deepfake</Text>
        )}
      </TouchableOpacity>
      {deepfakePercentage !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Deepfake Probability: {deepfakePercentage.toFixed(2)}%
          </Text>
          <View style={styles.progressContainer}>
            <View
              style={[
                styles.progressBar,
                { width: `${deepfakePercentage}%`, backgroundColor: deepfakePercentage > 50 ? '#FF0000' : '#00FF00' },
              ]}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: '#4F46E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#10B981',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePreview: {
    width: width * 0.8,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressContainer: {
    width: '80%',
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },
});

export default DeepfakeDetectionScreen;
