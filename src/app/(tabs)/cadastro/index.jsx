import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../../components/header/Header';
import cadastroStyles from './cadastroStyles';
import { Oswald_600SemiBold, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts } from '@expo-google-fonts/oswald';
import Button from '../../../components/button/Button';
import LogoGoogle from '../../../../assets/Google.svg'
import { Link, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { UsuarioContext } from '../../../context/UsuarioContext';

export default function Cadastro() {

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

  const funcLogin = async () => {
    try {

      const usuarioNovo = {
        nome: nome,
        email: email,
        senha: senha,
        usuario: `@${nome}`,
        bio: `Criar bios`,
        FotoPerfil: "",
      };

      console.log("Enviando:", usuarioNovo);


       await fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuarioNovo)})

        setUsuario(usuarioNovo)
        router.push("/feedtela")

    } catch (error) {
        console.log(error)
      }
    }
  

  return (
    <>
      <Header corSeta="branca" tituloHeader="Criar Conta" corText="#fff" corHeader="#588EB2" />
      <View style={cadastroStyles.container}>
        <View style={cadastroStyles.inputContainer}>
          <View style={cadastroStyles.inputDuo}>
            <Text style={cadastroStyles.inputText}>Nome Completo:</Text>
            <TextInput placeholder="Digite seu nome" style={cadastroStyles.input} onChangeText={setNome} />
          </View>
          <View style={cadastroStyles.inputDuo}>
            <Text style={cadastroStyles.inputText}>E-mail:</Text>
            <TextInput placeholder="Digite seu e-mail" style={cadastroStyles.input} onChangeText={setEmail} />
          </View>
          <View style={[cadastroStyles.inputDuo, { marginBottom: 50 }]}>
            <Text style={cadastroStyles.inputText}>Senha:</Text>
            <TextInput placeholder="Digite sua senha" style={cadastroStyles.input} onChangeText={setSenha} />
          </View>
          <View style={cadastroStyles.inputDuo}>

            <Button onPressButton={() => funcLogin()} text="Criar Conta" backgroundColor="#B83556" textColor="#fff" />
          </View>

          <View style={{ width: '100%', alignItems: 'center', gap: 5 }}>
            <Text style={[cadastroStyles.text, { color: "white" }]}>Já tem uma conta? <Link href="/login" style={[cadastroStyles.text, { color: "#B83556" }]}>Entrar</Link></Text>
          </View>

        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}