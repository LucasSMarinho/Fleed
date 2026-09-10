import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";

import { editarperfilStySheet } from "./editarperfilStyles";


const [nome, setNome] = useState("Lucas Moura");
const [usuario, setUsuario] = useState("Lucas.moura");
const [bio, setBio] = useState("Jogador do São Paulo Futebol Clube.");

export default function EditarPerfil() {
    return (
        <View style={editarperfilStySheet.container}>

            <View style={editarperfilStySheet.header}>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={require("../../../../assets/backIcon.png")}
                        style={editarperfilStySheet.iconeVoltar}
                    />
                </TouchableOpacity>
                <Text style={editarperfilStySheet.titulo}>
                    Editar Perfil
                </Text>
            </View>

        </View>

    )
}
