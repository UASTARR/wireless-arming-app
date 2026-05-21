import { BleManager } from 'react-native-ble-plx'
import { Platform, PermissionsAndroid } from 'react-native';
import { utils } from './';

// Coppied from https://dotintent.github.io/react-native-ble-plx/#getting-started
let requestBluetoothPermission = async () => {
  if (Platform.OS === 'ios') {
    return true;
  }
  if (Platform.OS === 'android' && PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) {
    const apiLevel = parseInt(Platform.Version.toString(), 10);

    if (apiLevel < 31) {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    if (PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN && PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT) {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ]);

      return (
        result['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
        result['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED &&
        result['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
      );
    }
  }

  utils.showAlert('Permission have not been granted');

  return false;
}

// Immediately call this once module is loaded to get bluetooth permissions on app load
requestBluetoothPermission();

export const manager = new BleManager();

// Coppied from https://dotintent.github.io/react-native-ble-plx/#getting-started
function scanAndConnect(onDeviceFound: (device: Device) => void) {
  manager.startDeviceScan(null, null, (error, device) => {
    if (error) {
      utils.showAlert('There was an error scanning for devices');
      return;
    }

    // These are the names I found the device was advertising in app_ble.c on the Wireless-Arming-Switch repo (line 218)
    // If these are wrong, change these and it will connect hopefully.
    if (device.name === 'STARR WAS' || device.name === 'WAS') { 
      // Stop scanning as it's not necessary if you are scanning for one device.
      manager.stopDeviceScan()

      // Run callback to use the device
      onDeviceFound(device)
    }
  })
    .then(() => { }) // Future and Error Handling
    .catch(console.error);
}
