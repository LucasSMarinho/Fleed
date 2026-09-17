  import { StatusBar } from 'expo-status-bar';
  import { Text, View, TouchableOpacity, TextInput } from 'react-native';
  import Header from '../../../components/header/Header';
  import perfilStyles from './perfilStyles';
  import { Oswald_600SemiBold, Oswald_400Regular } from '@expo-google-fonts/oswald';
  import { useFonts } from '@expo-google-fonts/oswald';
  import Button from '../../../components/button/Button';
  import LogoGoogle from '../../../../assets/Google.svg'
  import { Link, useRouter } from 'expo-router';
  import { useContext, useState } from 'react';
  import { UsuarioContext } from '../../../context/UsuarioContext';


  export default function Perfil() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const {setUsuario} = useContext(UsuarioContext)

    let [fontsLoaded] = useFonts({
      Oswald_600SemiBold,
      Oswald_400Regular
    });

    if (!fontsLoaded) {
      return null;
    }

    const router = useRouter();
    
    const funcLogin = async() => {
      const retornoApi = await fetch("http://localhost:3000/usuario")
      const dados = await retornoApi.json()

       const usuarioEncontrado = dados.find(
       (usuario) =>
        usuario.email === email &&
        usuario.senha === senha
       );
       
       if(usuarioEncontrado)
       {
        setUsuario(usuarioEncontrado)
        router.replace("/feedtela")
       }
    }

    return (
      <>
        <Header corSeta="rosa" tituloHeader="Login" corText="#fff" corHeader="#588EB2" mostrarSeta="false"/>
        <View style={perfilStyles.container}>
          <View style={perfilStyles.inputContainer}>
            <View style={perfilStyles.inputDuo}>
              <Text style={perfilStyles.inputText}>E-mail:</Text>
              <TextInput placeholder="Digite seu e-mail" style={perfilStyles.input} onChangeText={setEmail}/>
            </View>
            <View style={perfilStyles.inputDuo}>
              <Text style={perfilStyles.inputText}>Senha:</Text>
              <TextInput placeholder="Digite sua senha" style={perfilStyles.input} onChangeText={setSenha}/>
            </View>
            <View style={perfilStyles.inputDuo}>
              <Text style={perfilStyles.inputText}>Esqueceu sua senha?</Text>

              <Button onPress={() => funcLogin()} text="Entrar" backgroundColor="#B83556" textColor="#fff" />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
              <View style={perfilStyles.linha} />
              <Text style={perfilStyles.textOu}> Ou </Text>
              <View style={perfilStyles.linha} />
            </View>

            <View style={{ width: '100%', alignItems: 'center', gap: 5 }}>
              <TouchableOpacity style={perfilStyles.ButtonGoogle}>
                <LogoGoogle width={25} height={25} />
                <Text style={perfilStyles.ButtonGoogleText}>Entrar com Google</Text>
              </TouchableOpacity>

              <Text style={[perfilStyles.text, {color: "white"}]}>Não tem uma conta <Text onPress={() => router.push("/cadastro")} style={[perfilStyles.text, {color: "#B83556"}]}>Cadastre-se</Text></Text>
            </View>

          </View>
          <StatusBar style="auto" />
        </View>
      </>
    );
  } 