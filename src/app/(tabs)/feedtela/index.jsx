import React, { useState } from "react";

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";

import { useRouter } from "expo-router";

// SVGs do seu assets
import Sino from "../../../../assets/sino.svg";
import ComentarioAzul from "../../../../assets/comentario_azul.svg";
import CoracaoVazio from "../../../../assets/coracao_vazio.svg";
import CoracaoPreenchido from "../../../../assets/coracao-preenchido.svg";
import Salvar from "../../../../assets/salvar.svg";
import TresPontos from "../../../../assets/tres_pontos.svg";
import Perfil from "../../../../assets/perfil.svg";

// Styles
import { feedtelaStyles } from "./feedtelaStyles";

export default function FeedTela() {

    const router = useRouter();

    const [publicacoes, setPublicacoes] = useState([
        {
            id: 1,
            nome: "Lucas Moura",
            horario: "Hoje 16:30",
            texto:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.",
            curtidas: 32,
            comentarios: 4,
            curtido: false,
        },
        {
            id: 2,
            nome: "Lucas Moura",
            horario: "Hoje 16:31",
            texto:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.",
            curtidas: 28,
            comentarios: 2,
            curtido: false,
        },
    ]);

    // CURTIR PUBLICAÇÃO
    const curtirPublicacao = (id) => {

        setPublicacoes((lista) =>
            lista.map((publicacao) => {

                if (publicacao.id === id) {

                    const novoEstadoCurtido = !publicacao.curtido;

                    return {
                        ...publicacao,

                        curtido: novoEstadoCurtido,

                        curtidas: novoEstadoCurtido
                            ? publicacao.curtidas + 1
                            : publicacao.curtidas - 1,
                    };
                }

                return publicacao;
            })
        );
    };

    // ABRIR PERFIL
    const abrirPerfil = () => {
        router.push("/perfil");
    };

    // ABRIR NOTIFICAÇÕES
    const abrirNotificacoes = () => {
        router.push("/notificacoes");
    };

    return (
        <View style={feedtelaStyles.container}>

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <View style={feedtelaStyles.header}>

                <Text style={feedtelaStyles.logo}>
                    FLEED
                </Text>

                <TouchableOpacity
                    style={feedtelaStyles.botaoNotificacao}
                    onPress={abrirNotificacoes}
                    activeOpacity={0.7}
                >
                    <Sino
                        width={28}
                        height={28}
                    />
                </TouchableOpacity>

            </View>


            {/* ================================================= */}
            {/* FEED / SCROLL */}
            {/* ================================================= */}

            <ScrollView
                style={feedtelaStyles.scroll}
                contentContainerStyle={feedtelaStyles.scrollContent}
                showsVerticalScrollIndicator={false}
            >

                {publicacoes.map((publicacao) => (

                    <View
                        key={publicacao.id}
                        style={feedtelaStyles.cardPublicacao}
                    >

                        {/* ===================================== */}
                        {/* CABEÇALHO DA PUBLICAÇÃO */}
                        {/* ===================================== */}

                        <View style={feedtelaStyles.usuario}>

                            <Image
                                source={require("../../../../assets/logo.jpg")}
                                style={feedtelaStyles.fotoPerfil}
                            />

                            <View style={feedtelaStyles.infoUsuario}>

                                <Text style={feedtelaStyles.nomeUsuario}>
                                    {publicacao.nome}
                                </Text>

                                <Text style={feedtelaStyles.horario}>
                                    {publicacao.horario}
                                </Text>

                            </View>

                            <TouchableOpacity
                                style={feedtelaStyles.botaoTresPontos}
                                activeOpacity={0.7}
                            >
                                <TresPontos
                                    width={22}
                                    height={22}
                                />
                            </TouchableOpacity>

                        </View>


                        {/* ===================================== */}
                        {/* TEXTO */}
                        {/* ===================================== */}

                        <Text style={feedtelaStyles.textoPublicacao}>
                            {publicacao.texto}
                        </Text>


                        {/* ===================================== */}
                        {/* AÇÕES */}
                        {/* ===================================== */}

                        <View style={feedtelaStyles.acoes}>

                            {/* CURTIR */}

                            <TouchableOpacity
                                style={feedtelaStyles.acao}
                                onPress={() =>
                                    curtirPublicacao(publicacao.id)
                                }
                                activeOpacity={0.7}
                            >

                                {publicacao.curtido ? (
                                    <CoracaoPreenchido
                                        width={23}
                                        height={23}
                                    />
                                ) : (
                                    <CoracaoVazio
                                        width={23}
                                        height={23}
                                    />
                                )}

                                <Text style={feedtelaStyles.numeroAcao}>
                                    {publicacao.curtidas}
                                </Text>

                            </TouchableOpacity>


                            {/* COMENTÁRIOS */}

                            <TouchableOpacity
                                style={feedtelaStyles.acao}
                                activeOpacity={0.7}
                            >

                                <ComentarioAzul
                                    width={23}
                                    height={23}
                                />

                                <Text style={feedtelaStyles.numeroAcao}>
                                    {publicacao.comentarios}
                                </Text>

                            </TouchableOpacity>


                            {/* SALVAR */}

                            <TouchableOpacity
                                style={feedtelaStyles.botaoSalvar}
                                activeOpacity={0.7}
                            >

                                <Salvar
                                    width={23}
                                    height={23}
                                />

                            </TouchableOpacity>

                        </View>

                    </View>

                ))}


                {/* Espaço no final para o conteúdo não ficar atrás do botão + */}

                <View style={feedtelaStyles.espacoFinal} />

            </ScrollView>


            {/* ================================================= */}
            {/* BOTÃO FLUTUANTE */}
            {/* ================================================= */}

            <TouchableOpacity
                style={feedtelaStyles.botaoAdicionar}
                activeOpacity={0.8}
            >
                <Text style={feedtelaStyles.textoMais}>
                    +
                </Text>
            </TouchableOpacity>

        </View>
    );
}