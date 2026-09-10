import React, { useState } from "react";

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
} from "react-native";

import { useRouter } from "expo-router";

// Ícones
import VoltarRosa from "../../../../assets/voltar_rosa.svg";
import Salvar from "../../../../assets/salvar.svg";
import CoracaoVazio from "../../../../assets/coracao_vazio.svg";
import CoracaoPreenchido from "../../../../assets/coracao-preenchido.svg";
import ComentarioAzul from "../../../../assets/comentario_azul.svg";
import Perfil from "../../../../assets/perfil.svg";
import Enviar from "../../../../assets/enviar.svg";
import Sino from "../../../../assets/sino.svg";

// Styles
import { detalhesStyles } from "./detalhesStyles";

export default function Detalhes() {

    const router = useRouter();

    const [curtido, setCurtido] = useState(false);
    const [curtidas, setCurtidas] = useState(28);
    const [comentario, setComentario] = useState("");

    // Curtir publicação
    const curtir = () => {

        if (curtido) {
            setCurtidas(curtidas - 1);
        } else {
            setCurtidas(curtidas + 1);
        }

        setCurtido(!curtido);
    };

    // Enviar comentário
    const enviarComentario = () => {

        if (comentario.trim() === "") {
            return;
        }

        setComentario("");
    };

    return (

        <View style={detalhesStyles.container}>

            {/* ================================================= */}
            {/* CONTEÚDO */}
            {/* ================================================= */}

            <ScrollView
                style={detalhesStyles.scroll}
                contentContainerStyle={detalhesStyles.scrollContent}
                showsVerticalScrollIndicator={false}
            >

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <View style={detalhesStyles.header}>

                    {/* VOLTAR */}

                    <TouchableOpacity
                        style={detalhesStyles.botaoVoltar}
                        onPress={() => router.back()}
                        activeOpacity={0.7}
                    >
                        <VoltarRosa
                            width={25}
                            height={25}
                        />
                    </TouchableOpacity>


                    {/* TÍTULO */}

                    <Text style={detalhesStyles.titulo}>
                        Publicação
                    </Text>


                    {/* BOTÃO CRIAR */}

                    <TouchableOpacity
                        style={detalhesStyles.botaoCriar}
                        activeOpacity={0.7}
                    >

                        <Text style={detalhesStyles.criarMais}>
                            +
                        </Text>

                    </TouchableOpacity>

                </View>


                {/* ================================================= */}
                {/* PUBLICAÇÃO */}
                {/* ================================================= */}

                <View style={detalhesStyles.publicacao}>

                    {/* USUÁRIO */}

                    <View style={detalhesStyles.usuario}>

                        <Image
                            source={require("../../../../assets/logo.jpg")}
                            style={detalhesStyles.fotoPerfil}
                        />

                        <View style={detalhesStyles.infoUsuario}>

                            <Text style={detalhesStyles.nomeUsuario}>
                                Lucas Moura
                            </Text>

                            <Text style={detalhesStyles.horario}>
                                Hoje 16:31
                            </Text>

                        </View>

                    </View>


                    {/* TEXTO DA PUBLICAÇÃO */}

                    <Text style={detalhesStyles.textoPublicacao}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        dolore magna aliqua.
                    </Text>


                    {/* ================================================= */}
                    {/* IMAGEM DA PUBLICAÇÃO */}
                    {/* ================================================= */}

                    <Image
                        source={require("../../../../assets/fundo.svg")}
                        style={detalhesStyles.imagemPublicacao}
                        resizeMode="cover"
                    />


                    {/* ================================================= */}
                    {/* AÇÕES */}
                    {/* ================================================= */}

                    <View style={detalhesStyles.acoes}>

                        {/* CURTIR */}

                        <TouchableOpacity
                            style={detalhesStyles.acao}
                            onPress={curtir}
                            activeOpacity={0.7}
                        >

                            {curtido ? (

                                <CoracaoPreenchido
                                    width={24}
                                    height={24}
                                />

                            ) : (

                                <CoracaoVazio
                                    width={24}
                                    height={24}
                                />

                            )}

                            <Text style={detalhesStyles.numeroAcao}>
                                {curtidas}
                            </Text>

                        </TouchableOpacity>


                        {/* COMENTÁRIO */}

                        <TouchableOpacity
                            style={detalhesStyles.acao}
                            activeOpacity={0.7}
                        >

                            <ComentarioAzul
                                width={24}
                                height={24}
                            />

                        </TouchableOpacity>


                        {/* SALVAR */}

                        <TouchableOpacity
                            style={detalhesStyles.botaoSalvar}
                            activeOpacity={0.7}
                        >

                            <Salvar
                                width={24}
                                height={24}
                            />

                        </TouchableOpacity>

                    </View>

                </View>


                {/* ================================================= */}
                {/* COMENTÁRIOS */}
                {/* ================================================= */}

                <View style={detalhesStyles.areaComentarios}>

                    <Text style={detalhesStyles.tituloComentarios}>
                        Comentários
                    </Text>


                    {/* ================================================= */}
                    {/* PRIMEIRO COMENTÁRIO */}
                    {/* ================================================= */}

                    <View style={detalhesStyles.comentarioItem}>

                        <Image
                            source={require("../../../../assets/logo.jpg")}
                            style={detalhesStyles.fotoComentario}
                        />

                        <View style={detalhesStyles.comentarioConteudo}>

                            <Text style={detalhesStyles.nomeComentario}>
                                perfil
                            </Text>

                            <Text style={detalhesStyles.horarioComentario}>
                                Hoje 16:32
                            </Text>

                            <Text style={detalhesStyles.textoComentario}>
                                Lorem ipsum dolor sit amet.
                            </Text>

                        </View>

                    </View>

                </View>


                {/* ================================================= */}
                {/* CAMPO DE COMENTÁRIO */}
                {/* ================================================= */}

                <View style={detalhesStyles.areaEnviar}>

                    <TextInput
                        value={comentario}
                        onChangeText={setComentario}
                        placeholder=""
                        style={detalhesStyles.inputComentario}
                        multiline={false}
                    />

                    <TouchableOpacity
                        style={detalhesStyles.botaoEnviar}
                        onPress={enviarComentario}
                        activeOpacity={0.7}
                    >

                        <Enviar
                            width={25}
                            height={25}
                        />

                    </TouchableOpacity>

                </View>


                {/* Espaço para não ficar escondido pelo footer */}

                <View style={detalhesStyles.espacoFinal} />

            </ScrollView>

        </View>
    );
}