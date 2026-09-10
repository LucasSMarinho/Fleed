import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { editarperfilStySheet } from "./editarperfilStyles";

import { useFonts, Oswald_600SemiBold } from "@expo-google-fonts/oswald";
import { Image } from "../../../../assets/backIcon.png";
import Header from "../../../components/header/Header";

export default function EditarPerfil() {

    const [nome, setNome] = useState("Lucas Moura");
    const [usuario, setUsuario] = useState("Lucas.moura");
    const [bio, setBio] = useState("Jogador do São Paulo Futebol Clube.");

    let [fontsLoaded] = useFonts({
        Oswald_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={editarperfilStySheet.container}>
            <Header tituloHeader="Editar Perfil" corText="#588EB2"  />
        </View>
    )
}
