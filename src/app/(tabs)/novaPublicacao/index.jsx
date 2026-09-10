import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
} from "react-native";
import { useState } from "react";
import styles from "./novaPublicacaoStyles";
import { useRouter } from "expo-router";
import ImagemIcon from "../../../../assets/image.svg";
import LocalizacaoIcon from "../../../../assets/localizacao.svg";
import Fundo from "../../../../assets/fundo.svg";


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
                showsVerticalScrollIndicator={false}
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

            <Fundo style={styles.fundo} />
        </View>
    );
}