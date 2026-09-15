import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";

import { editarperfilStySheet } from "./editarperfilStyles";
import Header from "../../../components/header/Header";

import Camera from "../../../../assets/camera.svg";
import Logo from "../../../../assets/logo.jpg";
import { useRouter } from "expo-router";


export default function EditarPerfil() {

    const router = useRouter();

    const [nome, setNome] = useState("Lucas Moura");
    const [usuario, setUsuario] = useState("Lucas.moura");
    const [bio, setBio] = useState("Jogador do São Paulo Futebol Clube.");

    return (
        <View style={editarperfilStySheet.container}>


            <TouchableOpacity onPress={() => { }}>
                <Header tituloHeader="Editar Perfil" corText="#588EB2" />
            </TouchableOpacity>

            <View style={editarperfilStySheet.fotoContainer}>

                <Image
                    source={Logo}
                    style={editarperfilStySheet.foto}
                />

                <TouchableOpacity onPress={() => { }}>
                    <Camera style={editarperfilStySheet.camera} />
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
                onPress={() => router.replace("/perfilusuario")}
            >
                <Text style={editarperfilStySheet.textoBotao}>
                    Salvar alterações
                </Text>
            </TouchableOpacity>

        </View>

    )
}
