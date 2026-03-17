import { Alert, Platform } from 'react-native';


export function showAlert(message) {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}

export function Refresh() {
  console.log("Refresh function to be called")
}