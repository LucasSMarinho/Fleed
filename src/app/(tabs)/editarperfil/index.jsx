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


export default function EditarPerfil() {

    const [nome, setNome] = useState("Lucas Moura");
    const [usuario, setUsuario] = useState("Lucas.moura");
    const [bio, setBio] = useState("Jogador do São Paulo Futebol Clube.");

    return (
        <View style={editarperfilStySheet.container}>

            <View style={editarperfilStySheet.header}>

                <TouchableOpacity onPress={() => { }}>
                    <Header tituloHeader="Ed" corText="#588EB2" />
                </TouchableOpacity>

                <Text style={editarperfilStySheet.titulo}>
                    Editar Perfil
                </Text>

            </View>

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

            <TouchableOpacity style={editarperfilStySheet.botao}>
                <Text style={editarperfilStySheet.textoBotao}>
                    Salvar alterações
                </Text>
            </TouchableOpacity>

        </View>

    )
}
