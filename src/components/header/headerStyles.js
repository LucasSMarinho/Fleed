import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#588EB2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,


    gap: 10,
    padding: 20,
  },
  text: {
    position: 'absolute',
    left: 0,
    right: 0,

    fontFamily: 'Oswald_600SemiBold',
    fontSize: 24,
    textAlign: 'center',
  }
});

export default headerStyles;