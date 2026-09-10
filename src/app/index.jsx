import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Essa é a tela inicial</Text>
      <TouchableOpacity onPress={() => {router.push('/perfil')}}>
        <Text>Clique aqui</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
