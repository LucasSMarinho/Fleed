import { StyleSheet } from 'react-native';
import Perfil from '.';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';

const perfilStyles   = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#588EB2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60  
  },
  inputContainer: {
    width: '80%',
    alignItems: 'start',
    gap: 35,
  },
  input: {
    backgroundColor: '#fff',
    color: '#9FAEB8',
    width: '100%',

    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 5,

    padding: 10,
  },
  inputText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Oswald_600SemiBold',
  },
  inputDuo: {
   display: 'flex',
   flexDirection: 'column',
   width: '100%', 
   gap: 6,
  },
  linha: {
    height: 3,
    width: '45%',
    backgroundColor: '#E0E0E0', // Light gray color
    marginVertical: 5
  },
  textOu: {
    fontFamily: 'Oswald_600SemiBold',
    color: '#fff',
    fontSize: 10,
    width: "10%",
    textAlign: 'center'
  },
  ButtonGoogle: {
    backgroundColor: '#fff',
    color: '#9FAEB8',
    width: '100%',

    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 5,

    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonGoogleText: {
    fontSize: 14,
    fontFamily: 'Oswald_400Regular',
    color: '#55768C'
  }
});

export default perfilStyles;