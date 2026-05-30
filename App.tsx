import { styles, ui_modules, utils, bluetooth } from './src';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Device } from 'react-native-ble-plx';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


const Separator = () => <View style={styles.design.separator} />;

export default function App() {

  let device: Device;

  let arm = () => {
    if (device === undefined) {
      utils.showAlert("Not Connected to device")
    } else {
      utils.showAlert(device.name);
    }
  };

  let setDevice = (d: Device) => {
    if (d === undefined) {
      utils.showAlert("Not Connected to device");
    } else {
      device = d
      utils.showAlert("Connected to " + device.name);
    }
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.design.container}>

        <View style={styles.design.wrapper}>
          <Text style={styles.design.title}>UASTARR WIRELESS ARMING INTERFACE</Text>
          <Separator />
        </View>
        
        <View style={styles.design.wrapper}>
          <Text style={styles.status.header}>STATUS: </Text>
        </View>

        <View style={styles.design.wrapper}>
          <ui_modules.ButtonTemplate PressFunc={arm} 
                                                      label="ARM ROCKET" 
                                                      color={"#ff0000"} 
                                                      pressColor={"#880000"} />
        </View>

        <View style={styles.design.wrapper}>
          <ui_modules.ButtonTemplate PressFunc={() => {bluetooth.scanAndConnect(setDevice)}} 
                                                      label="Connect" 
                                                      color={"#0088ff"} 
                                                      pressColor={"#005e80"} />
        </View>

        <View style={styles.design.wrapper}>
          <Text style={styles.info.header}>CURRENT CONNECTED: </Text>
        </View>

        <View style={styles.design.wrapper}>
          <Text style={styles.buttonDesign.select}>SELECT MENU</Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

