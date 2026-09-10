import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import Header from '../../../components/header/Header';
import perfilStyles from './perfilStyles';
import { TextInput } from 'react-native-web';
import { Oswald_600SemiBold, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts } from '@expo-google-fonts/oswald';
import Button from '../../../components/button/Button';

export default function Perfil() {

  let [fontsLoaded] = useFonts({
    Oswald_600SemiBold,
    Oswald_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <>
      <Header tituloHeader="Login" corText="#fff" corHeader="#588EB2" />
      <View style={perfilStyles.container}>
        <View style={perfilStyles.inputContainer}>
          <View style={perfilStyles.inputDuo}>
            <Text style={perfilStyles.inputText}>E-mail:</Text>
            <TextInput placeholder="Digite seu e-mail" style={perfilStyles.input} />
          </View>
          <View style={perfilStyles.inputDuo}>
            <Text style={perfilStyles.inputText}>Senha:</Text>
            <TextInput placeholder="Digite sua senha" style={perfilStyles.input} />
          </View>
          <View style={perfilStyles.inputDuo}>
            <Text style={perfilStyles.inputText}>Esqueceu sua senha?</Text>

            <Button onPress={() => { }} text="Entrar" backgroundColor="#B83556" textColor="#fff" />
          </View>

          <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <View style={perfilStyles.linha} />
              <Text style={perfilStyles.textOu}> Ou </Text>
            <View style={perfilStyles.linha} />
          </View>

          <TouchableOpacity style={perfilStyles.ButtonGoogle}>
                 <Text style={perfilStyles.ButtonGoogleText}>Entrar com Google</Text>
          </TouchableOpacity>
     
          <View>
            <Text style={perfilStyles.inputText}>Esqueceu sua senha?</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}