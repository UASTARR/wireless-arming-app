import React from 'react';
import { styles } from './';
import { Text, Alert, Pressable } from 'react-native';

export const ButtonTemplate = ({ PressFunc, label, color, pressColor }) => {
  return (
    <Pressable
      onPress={PressFunc}
      style={({ pressed }) => [
        styles.design.buttonShape,
        {
          backgroundColor: pressed ? pressColor : color, // Dynamic background color
        },
      ]}>
      <Text style={styles.design.text}>{label}</Text>
    </Pressable>
  );}

