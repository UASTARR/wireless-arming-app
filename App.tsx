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
          <Text style={styles.design.status}>STATUS: </Text>
        </View>

        <View style={styles.design.wrapper}>
          <ui_modules.ButtonTemplate PressFunc={() => utils.showAlert("ARMED")} 
                                                      label="ARM ROCKET" 
                                                      color={"#ff0000"} 
                                                      pressColor={"#880000"} />
        </View>

        <View style={styles.design.wrapper}>
          <ui_modules.ButtonTemplate PressFunc={() => utils.showAlert("Refreshing...")} 
                                                      label="REFRESH" 
                                                      color={"#00bbff"} 
                                                      pressColor={"#005e80"} />
        </View>

        <View style={styles.design.wrapper}>
          <Text style={styles.design.current}>CURRENT CONNECTED</Text>
        </View>

        <View style={styles.design.wrapper}>
          <Text style={styles.design.select}>SELECT MENU</Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

