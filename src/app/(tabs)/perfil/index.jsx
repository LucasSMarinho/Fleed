import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import perfilStyles from './perfilStyles';

export default function Perfil() {
  return (
    <View style={perfilStyles.container}>
      <Text>Login</Text>
      <StatusBar style="auto" />
    </View>
  );
}