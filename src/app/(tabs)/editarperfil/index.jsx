
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";

import { editarperfilStySheet } from "./editarperfilStyles";
import Header from "../../../components/header/Header";

import Camera from "../../../../assets/camera.svg";
import Logo from "../../../../assets/imagemperfil2.png";
import { useRouter } from "expo-router";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";


export default function EditarPerfil() {

    const router = useRouter();

    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [bio, setBio] = useState("");

    const [imagem, setImagem] = useState(null);

    const [fontsLoaded] = useFonts({
        Oswald_400Regular,
    });

    useEffect(() => {
        const buscarUsuario = async () => {
            try {
                const resposta = await fetch(
                    "http://192.168.137.1:3000/usuario/1"
                );

                const dados = await resposta.json();

                setNome(dados.nome);
                setUsuario(dados.usuario);
                setBio(dados.bio);
                setImagem(dados.FotoPerfil);
            } catch (error) {
                console.log("Erro ao buscar usuário:", error);
            }
        };

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

        await fetch("http://192.168.137.1:3000/usuario/1", {
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
        const resposta = await fetch(
            "http://192.168.137.1:3000/usuario/1",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: nome,
                    usuario: usuario,
                    bio: bio,
                    FotoPerfil: imagem,
                }),
            }
        );

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
        <View style={editarperfilStySheet.container}>

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
                value={usuario}
                onChangeText={setUsuario}
            />

            <Text style={editarperfilStySheet.textoInicial}>
                Bio
            </Text>

            <TextInput
                style={editarperfilStySheet.textoBio}
                value={bio}
                onChangeText={setBio}
                multiline
            />

            <TouchableOpacity
                style={editarperfilStySheet.botao}
                onPress={() => salvarAlteracoes}
            >
                <Text style={editarperfilStySheet.textoBotao}>
                    Salvar alterações
                </Text>
            </TouchableOpacity>

        </View>

    )
}
