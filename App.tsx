import { styles, ui_modules, utils } from './src';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Separator = () => <View style={styles.design.separator} />;

export default function App() {
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
          <ui_modules.ButtonTemplate PressFunc={() => utils.showAlert("ARMED")} 
                                                      label="ARM ROCKET" 
                                                      color={"#ff0000"} 
                                                      pressColor={"#880000"} />
        </View>

        <View style={styles.design.wrapper}>
          <ui_modules.ButtonTemplate PressFunc={() => utils.showAlert("Refreshing...")} 
                                                      label="FORCE REFRESH" 
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

