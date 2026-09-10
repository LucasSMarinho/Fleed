import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from '../../../components/header/Header';
import perfilStyles from './perfilStyles';

export default function Perfil() {
  return (
    <>
    <Header tituloHeader="Login" corText="#fff"/>
    <View style={perfilStyles.container}>
      <Text>Login</Text>
      <StatusBar style="auto" />
    </View>
    </>
  );
}