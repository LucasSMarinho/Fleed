import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { useState } from "react";
import styles from "./novaPublicacaoStyles";
import { useRouter } from "expo-router";
import {
    Oswald_600SemiBold,
    Oswald_400Regular,
    useFonts,
} from "@expo-google-fonts/oswald";
import ImagemIcon from "../../../../assets/image.svg";
import LocalizacaoIcon from "../../../../assets/localizacao.svg";
import Fundo from "../../../../assets/fundo.svg";
import Header from "../../../components/header/Header";

export default function NovaPublicacao() {
    const router = useRouter();

    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");
    const [localizacao, setLocalizacao] = useState("");

    const [fontsLoaded] = useFonts({
        Oswald_600SemiBold,
        Oswald_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const publicar = async () => {
        if (!descricao.trim()) {
            return;
        }

        try {
            const novaPublicacao = {
                texto: descricao,
                imagem: imagem,
                localizacao: localizacao
            };

            const response = await fetch(
                "http://localhost:3000/publicacoes",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(novaPublicacao)
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao publicar");
            }

            setDescricao("");
            setImagem("");
            setLocalizacao("");

            router.push("/feedtela");

        } catch (error) {
            console.error("Erro ao publicar:", error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.header}>
                <Header
                    mostrarSeta="true"
                    tituloHeader="Nova Publicação"
                    corText="#588EB2"
                    rota="feedtela"
                />
            </View>

            <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.tituloCampo}>
                    O que você está pensando?
                </Text>

                <TextInput
                    style={styles.campoDescricao}
                    value={descricao}
                    onChangeText={setDescricao}
                    placeholder="Em nada!!"
                    placeholderTextColor="#868686"
                    multiline
                    textAlignVertical="top"
                />

                <View style={styles.opcoes}>
                    <TouchableOpacity
                        style={styles.opcao}
                        onPress={() => console.log("Selecionar imagem")}
                    >
                        <ImagemIcon
                            width={20}
                            height={20}
                        />

                        <Text style={styles.textoOpcao}>
                            Imagem
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.opcao}
                        onPress={() => console.log("Selecionar localização")}
                    >
                        <LocalizacaoIcon
                            width={20}
                            height={20}
                        />

                        <Text style={styles.textoOpcao}>
                            Localização
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.publicar}
                    onPress={publicar}
                >
                    <Text style={styles.textoPublicar}>
                        Publicar
                    </Text>
                </TouchableOpacity>
            </ScrollView>

            <Fundo
                width="105%"
                height={120}
                style={styles.fundo}
            />
        </View>
    );
}