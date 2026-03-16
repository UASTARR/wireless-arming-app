import {StyleSheet, Text, PixelRatio} from 'react-native';

// const fontScale = PixelRatio.getFontScale();

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
    alignItems: 'flex-start',
  },
  title: {
    verticalAlign: 'top',
    textAlign: 'center',
    color: '#eaeaea',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 20,
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
  status: {
    color: '#00ff00',
  },
  current: {
    color: '#f6ff00',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});