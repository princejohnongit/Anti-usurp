import React, { useState } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { callService } from '../../services/callService';
import { alertService } from '../../services/alertService';
import { useAuth } from '../../services/authService';

function ElderlyHomeScreen() {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const [callStatus, setCallStatus] = useState('No active call');

  const requestCallPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
      { title: 'Call Log Permission', message: 'Needed for scam detection', buttonPositive: 'OK' }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };

  const checkCall = async () => {
    if (await requestCallPermission()) {
      const status = await callService.checkCall();
      setCallStatus(status);
    } else {
      setCallStatus('Permission denied');
    }
  };

  const sendAlert = async () => {
    await alertService.sendAlert();
    navigation.navigate('Emergency');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SilverSafety</Text>
      <Text style={styles.subtitle}>Your Safety Hub</Text>
      <Text style={styles.status}>Call Status: {callStatus}</Text>
      <Button title="Check Incoming Call" onPress={checkCall} />
      <Button title="Send Emergency Alert" color="#ff4444" onPress={sendAlert} />
      <Button title="Logout" onPress={logout} color="#888" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
  status: { fontSize: 16, marginBottom: 20 },
});

export default ElderlyHomeScreen;