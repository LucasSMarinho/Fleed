import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
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
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

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

        const resultado = await ImagePicker.launchCameraAsync({
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

    const pegarLocalizacao = async () => {
        try {
            const permissao =
                await Location.requestForegroundPermissionsAsync();

            if (!permissao.granted) {
                Alert.alert(
                    "Permissão necessária",
                    "Permita o acesso à localização."
                );
                return;
            }

            const local =
                await Location.getCurrentPositionAsync({});

            const endereco =
                await Location.reverseGeocodeAsync({
                    latitude: local.coords.latitude,
                    longitude: local.coords.longitude,
                });

            if (endereco.length > 0) {
                const lugar = endereco[0];

                const enderecoCompleto = [
                    lugar.street,
                    lugar.streetNumber,
                    lugar.district,
                    lugar.city,
                    lugar.region,
                ]
                    .filter(Boolean)
                    .join(", ");

                setLocalizacao(enderecoCompleto);
            } else {
                Alert.alert(
                    "Localização",
                    "Não foi possível encontrar o endereço."
                );
            }
        } catch (error) {
            console.error(
                "ERRO AO PEGAR LOCALIZAÇÃO:",
                error
            );

            Alert.alert(
                "Erro",
                "Não foi possível obter sua localização."
            );
        }
    };

    const publicar = async () => {
        try {
            const novaPublicacao = {
                texto: descricao,
                imagem: imagem,
                localizacao: localizacao,
            };

            console.log("POST:", novaPublicacao);

            const retornoApi = await fetch(
                "http://192.168.137.1:3000/publicacoes",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(novaPublicacao),
                }
            );

            console.log("STATUS:", retornoApi.status);

            if (!retornoApi.ok) {
                throw new Error("Erro ao publicar");
            }

            const dados = await retornoApi.json();

            console.log("DADOS:", dados);

            setDescricao("");
            setImagem("");
            setLocalizacao("");

            router.push("/feedtela");
        } catch (error) {
            console.error("ERRO AO PUBLICAR:", error);

            Alert.alert(
                "Erro",
                "Não foi possível publicar."
            );
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
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
                    style={styles.scrollView}
                    contentContainerStyle={styles.scroll}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="on-drag"
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
                        scrollEnabled={true}
                    />

                    {imagem !== "" && (
                        <Image
                            source={{ uri: imagem }}
                            style={{
                                width: 200,
                                height: 200,
                                borderRadius: 10,
                                marginTop: 15,
                                marginBottom: 5,
                            }}
                        />
                    )}

                    {localizacao !== "" && (
                        <Text
                            style={{
                                width: "100%",
                                marginTop: 10,
                                color: "#588EB2",
                                fontFamily: "Oswald_400Regular",
                                fontSize: 16,
                            }}
                        >
                            📍 {localizacao}
                        </Text>
                    )}

                    <View style={styles.opcoes}>
                        <TouchableOpacity
                            style={styles.opcao}
                            onPress={selecionarImagem}
                            activeOpacity={0.7}
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
                            onPress={pegarLocalizacao}
                            activeOpacity={0.7}
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
                        activeOpacity={0.7}
                    >
                        <Text style={styles.textoPublicar}>
                            Publicar
                        </Text>
                    </TouchableOpacity>

                    <View style={{ height: 140 }} />
                </ScrollView>

                <Fundo
                    width="105%"
                    height={120}
                    style={styles.fundo}
                    pointerEvents="none"
                />
            </View>
        </KeyboardAvoidingView>
    );
}