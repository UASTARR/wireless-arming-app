import { styles, ui_modules, utils } from './src';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.design.container}>
        <Text style={styles.design.text}>Test</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

