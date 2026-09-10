import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/logo.jpg')}
        style={styles.logo}
      />

      <Text style={styles.title}>Fleed</Text>

      <Text style={styles.subtitle}>
        Conecte-se com Pessoas e
        compartilhe momentos.
      </Text>

      <TouchableOpacity
        style={styles.entrar}
        onPress={() => router.push('/perfil')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.criar}
        onPress={() => router.push('/perfil')}
      >
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/fundo.png')}
        style={styles.fundo}
      />

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

  logo: {
    width: 100,
    height: 100,
    // marginBottom: 15,
    borderRadius: 4,
    
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#BC3154',
  },

  subtitle: {
    fontSize: 16,
    color: '#6D95AA',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 5,
    marginBottom: 55,
  },

  entrar: {
    width: '85%',
    height: 50,
    backgroundColor: '#BF3156',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  criar: {
    width: '85%',
    height: 50,
    backgroundColor: '#DC97A5',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  fundo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 65,
    
  },
});