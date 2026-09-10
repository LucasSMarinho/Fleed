import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { useState } from "react";
import styles from "./novaPublicacaoStyles";
import { useRouter } from "expo-router";

export default function NovaPublicacao() {
    const router = useRouter();

    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");
    const [localizacao, setLocalizacao] = useState("");

    const publicar = () => {
        console.log("Publicação postada!");

        console.log({
            descricao,
            imagem,
            localizacao,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <ScrollView
                contentContainerStyle={styles.scroll}
            >

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.botaoVoltar}
                        onPress={() => router.back()}
                    >
                        <Image
                            source={require("../../../../assets/backIcon.png")}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.tituloPagina}>
                        Nova Publicação
                    </Text>

                </View>

                <Text style={styles.tituloCampo}>
                    O que você está pensando?
                </Text>

                <TextInput
                style={styles.campoDescricao}
                value={descricao}
                onChangeText={setDescricao}
                placeholder="Em nada!!"
                multiline
                textAlignVertical="top"
               />

            </ScrollView>
        </View>
    );
}