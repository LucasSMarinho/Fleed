import React, { useState, useEffect, useContext } from "react";

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";

import { useRouter } from "expo-router";

import Sino from "../../../../assets/sino.svg";
import ComentarioAzul from "../../../../assets/comentario_azul.svg";
import CoracaoVazio from "../../../../assets/coracao_vazio.svg";
import CoracaoPreenchido from "../../../../assets/coracao-preenchido.svg";
import Salvar from "../../../../assets/salvar.svg";
import SalvarPreenchido from "../../../../assets/salvar_preenchido.svg";
import TresPontos from "../../../../assets/tres_pontos.svg";

import { feedtelaStyles } from "./feedtelaStyles";
import { UsuarioContext } from "../../../context/UsuarioContext";

export default function FeedTela() {
    const router = useRouter();

    const [publicacoes, setPublicacoes] = useState([]);

    const { usuario } = useContext(UsuarioContext)

    const curtirPublicacao = async (id) => {
        const publicacao = publicacoes.find(
            publicacao => publicacao.id === id
        );

        if (!publicacao) return;

        const novoEstadoCurtido = !publicacao.curtido;

        const novasCurtidas = novoEstadoCurtido
            ? (publicacao.curtidas || 0) + 1
            : Math.max((publicacao.curtidas || 0) - 1, 0);

        try {
            // Salva no JSON Server
            await fetch(`http://172.16.2.173:3000/publicacoes/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    curtido: novoEstadoCurtido,
                    curtidas: novasCurtidas,
                }),
            });

            // Atualiza a tela
            setPublicacoes(publicacoesAtuais =>
                publicacoesAtuais.map(publicacao => {
                    if (publicacao.id === id) {
                        return {
                            ...publicacao,
                            curtido: novoEstadoCurtido,
                            curtidas: novasCurtidas,
                        };
                    }

                    return publicacao;
                })
            );

            // Só cria a notificação quando CURTIR
            if (novoEstadoCurtido) {
                await fetch("http://172.16.2.173:3000/notificacoes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nome: usuario.nome,
                        texto: "curtiu sua publicação",
                        icone: "CoracaoP",
                    }),
                });
            }

        } catch (error) {
            console.error("Erro ao curtir:", error);
        }
    };


    const funcGet = async () => {
    try {
        const retornoApi = await fetch(
            "http://172.16.2.173:3000/publicacoes"
        );

        if (!retornoApi.ok) {
            throw new Error("Erro ao buscar publicações");
        }

        const dados = await retornoApi.json();

        console.log("PUBLICAÇÕES DO SERVIDOR:", dados);

        const publicacoesComUsuario = await Promise.all(
            dados.map(async (publicacao) => {

                // Se a publicação não tiver usuário
                if (!publicacao.idUsuario) {
                    return {
                        ...publicacao,
                        usuario: null
                    };
                }

                try {
                    const retornoUsuario = await fetch(
                        `http://172.16.2.173:3000/usuario/${publicacao.idUsuario}`
                    );

                    if (!retornoUsuario.ok) {
                        console.log(
                            "Usuário não encontrado:",
                            publicacao.idUsuario
                        );

                        return {
                            ...publicacao,
                            usuario: null
                        };
                    }

                    const dadosUsuario = await retornoUsuario.json();

                    return {
                        ...publicacao,
                        usuario: dadosUsuario
                    };

                } catch (error) {
                    console.log(
                        "Erro ao buscar usuário:",
                        publicacao.idUsuario,
                        error
                    );

                    return {
                        ...publicacao,
                        usuario: null
                    };
                }
            })
        );

        console.log(
            "PUBLICAÇÕES COM USUÁRIO:",
            publicacoesComUsuario
        );

        setPublicacoes(publicacoesComUsuario);

    } catch (error) {
        console.error(
            "ERRO AO BUSCAR PUBLICAÇÕES:",
            error
        );
    }
};

    useEffect(() => {
        funcGet();

        const intervalo = setInterval(() => {
            funcGet();
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const salvarPublicacao = (id) => {
        setPublicacoes((lista) =>
            lista.map((publicacao) => {
                if (publicacao.id === id) {
                    return {
                        ...publicacao,
                        salvo: !publicacao.salvo,
                    };
                }

                return publicacao;
            })
        );
    };

    const abrirPerfil = () => {
        router.push("/perfil");
    };

    const abrirNotificacoes = () => {
        router.push("/notificacoes");
    };

    return (
        <View style={feedtelaStyles.container}>
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

            <ScrollView
                style={feedtelaStyles.scroll}
                contentContainerStyle={feedtelaStyles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {publicacoes.map((publicacao) => {

                  
 

                    return (
                        <View
                            key={publicacao.id}
                            style={feedtelaStyles.cardPublicacao}
                        >
                            <View style={feedtelaStyles.usuario}>
                                <Image
                                    source={publicacao.usuario.FotoPerfil
                                        ? { uri: publicacao.usuario?.FotoPerfil }
                                        : require("../../../../assets/fotodeperfil.png")
                                    }
                                    style={feedtelaStyles.fotoPerfil}
                                />

                                <View style={feedtelaStyles.infoUsuario}>
                                    <Text style={feedtelaStyles.nomeUsuario}>
                                        {publicacao.nome || "Usuário"}
                                    </Text>

                                    <Text style={feedtelaStyles.horario}>
                                        {publicacao.horario || ""}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={feedtelaStyles.botaoTresPontos}
                                    activeOpacity={0.7}
                                >
                                    <TresPontos
                                        width={14}
                                        height={14}
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text style={feedtelaStyles.textoPublicacao}>
                                {publicacao.texto}
                            </Text>

                            {publicacao.imagem && (
                                <Image
                                    source={{
                                        uri: publicacao.imagem,
                                    }}
                                    style={feedtelaStyles.imagemPublicacao}
                                    resizeMode="cover"
                                />
                            )}

                            {publicacao.localizacao && (
                                <Text
                                    style={
                                        feedtelaStyles.localizacaoPublicacao
                                    }
                                >
                                    📍 {publicacao.localizacao}
                                </Text>
                            )}

                            <View style={feedtelaStyles.acoes}>
                                <TouchableOpacity
                                    style={feedtelaStyles.acao}
                                    onPress={() =>
                                        curtirPublicacao(publicacao.id)
                                    }
                                    activeOpacity={0.7}
                                >
                                    {publicacao.curtido ? (
                                        <CoracaoPreenchido
                                            width={25}
                                            height={25}
                                        />
                                    ) : (
                                        <CoracaoVazio
                                            width={20}
                                            height={20}
                                        />
                                    )}

                                    <Text style={feedtelaStyles.numeroAcao}>
                                        {publicacao.curtidas || 0}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={feedtelaStyles.acao}
                                    onPress={() =>
                                        router.push("/detalhes")
                                    }
                                    activeOpacity={0.7}
                                >
                                    <ComentarioAzul
                                        width={23}
                                        height={23}
                                    />

                                    <Text style={feedtelaStyles.numeroAcao}>
                                        {publicacao.comentarios || 0}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={feedtelaStyles.botaoSalvar}
                                    activeOpacity={0.7}
                                    onPress={() =>
                                        salvarPublicacao(publicacao.id)
                                    }
                                >
                                    {publicacao.salvo ? (
                                        <SalvarPreenchido
                                            width={23}
                                            height={23}
                                        />
                                    ) : (
                                        <Salvar
                                            width={23}
                                            height={23}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}

                <View style={feedtelaStyles.espacoFinal} />
            </ScrollView>

            <TouchableOpacity
                style={feedtelaStyles.botaoAdicionar}
                onPress={() =>
                    router.push("/novaPublicacao")
                }
                activeOpacity={0.8}
            >
                <Text style={feedtelaStyles.textoMais}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
}