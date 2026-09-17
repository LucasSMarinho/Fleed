
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";

import { editarperfilStySheet } from "./editarperfilStyles";
import Header from "../../../components/header/Header";

import Camera from "../../../../assets/camera.svg";
import Logo from "../../../../assets/imagemperfil2.png";
import { useRouter } from "expo-router";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect, useContext } from "react";
import { UsuarioContext } from "../../../context/UsuarioContext";


export default function EditarPerfil() {

    const router = useRouter();

    const [nome, setNome] = useState("");
    const [bio, setBio] = useState("");

    const [usuarioNome, setUsuarioNome] = useState("");
    const [imagem, setImagem] = useState(null);
    const { usuario, setUsuario } = useContext(UsuarioContext)

    const [fontsLoaded] = useFonts({
        Oswald_400Regular,
    });



    const buscarUsuario = async () => {
        try {
            const resposta = await fetch(
                `http://192.168.137.1:3000/usuario/${usuario.id}`
            );

            const dados = await resposta.json();

            setNome(dados.nome);
            setUsuarioNome(dados.usuario);
            setBio(dados.bio);
            setImagem(dados.FotoPerfil);
        } catch (error) {
            console.log("Erro ao buscar usuário:", error);
        }
    };

    useEffect(() => {

        buscarUsuario();
    }, []);

    const abrirCamera = async () => {
        const permissao =
            await ImagePicker.requestCameraPermissionsAsync();

        if (!permissao.granted) {

            Alert.alert(
                "Permissão necessária",
                "É necessário permitir o acesso à câmera para tirar uma foto."
            );

            return;
        }

        const resultado =
            await ImagePicker.launchCameraAsync({
                mediaTypes: ["images"],
                allowsEditing: true,
                quality: 1,
            });

        if (!resultado.canceled) {

            setImagem(resultado.assets[0].uri);

        }
    };

    const abrirGaleria = async () => {

        const permissao =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissao.granted) {

            Alert.alert(
                "Permissão necessária",
                "É necessário permitir o acesso à galeria."
            );

            return;
        }

        const resultado =
            await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ["images"],
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

        if (!resultado.canceled) {

            setImagem(resultado.assets[0].uri);
        }

        await fetch(`http://192.168.137.1:3000/usuario/${usuario.id}`, {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                nome: nome
            }),
        });
    };

    const selecionarImagem = () => {

        Alert.alert(
            "Adicionar imagem",
            "Escolha uma opção",
            [
                {
                    text: "Câmera",
                    onPress: abrirCamera,
                },
                {
                    text: "Galeria",
                    onPress: abrirGaleria,
                },
                {
                    text: "Cancelar",
                    style: "cancel",
                },
            ]
        );
    };

    const salvarAlteracoes = async () => {
        try {
            const usuarioAlterado = {
                nome: nome,
                usuario: usuarioNome,
                bio: bio,
                FotoPerfil: imagem,
                email: usuario.email,
                senha: usuario.senha,
                id: usuario.id
            }

            const resposta = await fetch(
                `http://192.168.137.1:3000/usuario/${usuario.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nome: nome,
                        usuario: usuarioNome,
                        bio: bio,
                        FotoPerfil: imagem,
                    }),
                }                
            );

            setUsuario(usuarioAlterado)
            console.log("Resposta:", resposta)


            if (!resposta.ok) {
                throw new Error("Erro ao atualizar perfil");
            }

            const dadosAtualizados = await resposta.json();

            console.log("Usuário atualizado:", dadosAtualizados);

            Alert.alert(
                "Sucesso",
                "Alterações salvas com sucesso!"
            );

            router.replace("/(tabs)/perfilusuario");

        } catch (error) {
            console.log("Erro ao salvar:", error);

            Alert.alert(
                "Erro",
                "Não foi possível salvar as alterações."
            );
        }
    };




    return (

        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >

            <ScrollView style={editarperfilStySheet.container}>

                <Header mostrarSeta="true" tituloHeader="Editar Perfil" corText="#588EB2" rota="perfilusuario" />


                <View style={editarperfilStySheet.fotoContainer}>

                    <Image
                        source={imagem ? { uri: imagem } : Logo}
                        style={editarperfilStySheet.foto}
                    />

                    <TouchableOpacity
                        onPress={selecionarImagem}
                        style={editarperfilStySheet.camera}
                    >
                        <Camera
                            width={25}
                            height={25}
                        />
                    </TouchableOpacity>

                </View>


                <Text style={editarperfilStySheet.textoInicial}>
                    Nome
                </Text>

                <TextInput
                    style={editarperfilStySheet.containerUsuario}
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={editarperfilStySheet.textoInicial}>
                    Usuário
                </Text>

                <TextInput
                    style={editarperfilStySheet.containerUsuario}
                    value={usuarioNome}
                    onChangeText={setUsuarioNome}
                />

                <Text style={editarperfilStySheet.textoInicial}>
                    Bio
                </Text>

                <TextInput
                    style={editarperfilStySheet.textoBio}
                    value={bio}
                    onChangeText={setBio}

                />

                <TouchableOpacity
                    style={editarperfilStySheet.botao}
                    onPress={salvarAlteracoes}
                >
                    <Text style={editarperfilStySheet.textoBotao}>
                        Salvar alterações
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
