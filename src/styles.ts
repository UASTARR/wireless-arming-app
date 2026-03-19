import { StyleSheet, View } from 'react-native';

const TextStyle = {
    fontFamily: 'Inter',
    fontWeight: '700' as const,
};

export const design = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#343435',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    padding: 6,
    alignItems: 'stretch',
  },
  title: {
    verticalAlign: 'top',
    textAlign: 'center',
    color: '#eaeaea',
    ...TextStyle,
    fontSize: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    alignSelf: 'center',
    ...TextStyle,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export const buttonDesign = StyleSheet.create({
  buttonText:{
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Inter',
    alignSelf: 'center',
    ...TextStyle,
  },
  buttonShape: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, 
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  refresh: {
    color: '#00bbff',
  },
  arm: {
    color: '#ff0000',
  },
  select: {
    color: '#ff00ff',
  },
});

export const status = StyleSheet.create({
  header: {
    color: '#ffffff',
    ...TextStyle,
  },
  notConnected: {
    color: '#FF0000',
    ...TextStyle,
  },
  connecting: {
    color: '#ffff00',
    ...TextStyle,
  },
  connected: {
    color: '#00be00',
    ...TextStyle,
  }
});


export const info = StyleSheet.create({
  header: {
    color: "#ffffff",
    ...TextStyle,
  },
  current: {
    color: '#0088ff',
    ...TextStyle,
  },
});