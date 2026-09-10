import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

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

    const curtirPublicacao = (id) => {
        setPublicacoes((lista) =>
            lista.map((publicacao) => {
                if (publicacao.id === id) {

                    return {
                        ...publicacao,
                        curtido: !publicacao.curtido,
                        curtidas: publicacao.curtido
                            ? publicacao.curtidas - 1
                            : publicacao.curtidas + 1,
                    };
                }

                return publicacao;
            })
        );
    };

    return (
        <View style={feedtelaStyles.container}>

            {/* CONTEÚDO DO FEED */}
            <ScrollView
                style={feedtelaStyles.scroll}
                contentContainerStyle={feedtelaStyles.scrollContent}
                showsVerticalScrollIndicator={false}
            >

                {/* HEADER */}
                <View style={feedtelaStyles.header}>

                    <Text style={feedtelaStyles.logo}>
                        FLEED
                    </Text>

                    <TouchableOpacity
                        style={feedtelaStyles.botaoNotificacao}
                        onPress={() => router.push("/notificacoes")}
                    >
                        <Ionicons
                            name="notifications-outline"
                            size={29}
                            color="#000"
                        />
                    </TouchableOpacity>

                </View>

                {/* PUBLICAÇÕES */}
                {publicacoes.map((publicacao) => (

                    <View
                        style={feedtelaStyles.cardPublicacao}
                        key={publicacao.id}
                    >

                        {/* USUÁRIO */}
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

                            <TouchableOpacity>
                                <Ionicons
                                    name="ellipsis-vertical"
                                    size={23}
                                    color="#000"
                                />
                            </TouchableOpacity>

                        </View>

                        {/* TEXTO */}
                        <Text style={feedtelaStyles.textoPublicacao}>
                            {publicacao.texto}
                        </Text>

                        {/* AÇÕES */}
                        <View style={feedtelaStyles.acoes}>

                            <TouchableOpacity
                                style={feedtelaStyles.acao}
                                onPress={() =>
                                    curtirPublicacao(publicacao.id)
                                }
                            >

                                <Ionicons
                                    name={
                                        publicacao.curtido
                                            ? "heart"
                                            : "heart-outline"
                                    }
                                    size={25}
                                    color={
                                        publicacao.curtido
                                            ? "#C32F59"
                                            : "#C32F59"
                                    }
                                />

                                <Text style={feedtelaStyles.numeroAcao}>
                                    {publicacao.curtidas}
                                </Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={feedtelaStyles.acao}
                            >

                                <Ionicons
                                    name="chatbubble-outline"
                                    size={24}
                                    color="#4A9ACB"
                                />

                                <Text style={feedtelaStyles.numeroAcao}>
                                    {publicacao.comentarios}
                                </Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={feedtelaStyles.salvar}
                            >
                                <Ionicons
                                    name="bookmark-outline"
                                    size={25}
                                    color="#C32F59"
                                />
                            </TouchableOpacity>

                        </View>

                    </View>

                ))}

                {/* ESPAÇO PARA O BOTÃO FLUTUANTE */}
                <View style={{ height: 100 }} />

            </ScrollView>

            {/* BOTÃO + */}
            <TouchableOpacity
                style={feedtelaStyles.botaoAdicionar}
                onPress={() => router.push("/criar")}
            >
                <Ionicons
                    name="add"
                    size={40}
                    color="#FFFFFF"
                />
            </TouchableOpacity>

            {/* MENU INFERIOR */}
            <View style={feedtelaStyles.footer}>

                {/* HOME */}
                <TouchableOpacity
                    style={feedtelaStyles.itemFooter}
                    onPress={() => router.push("/feedtela")}
                >
                    <Ionicons
                        name="home-outline"
                        size={27}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>

                {/* CRIAR */}
                <TouchableOpacity
                    style={feedtelaStyles.itemFooter}
                    onPress={() => router.push("/criar")}
                >
                    <Ionicons
                        name="add-square-outline"
                        size={29}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>

                {/* NOTIFICAÇÕES */}
                <TouchableOpacity
                    style={feedtelaStyles.itemFooter}
                    onPress={() => router.push("/notificacoes")}
                >
                    <Ionicons
                        name="notifications-outline"
                        size={28}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>

                {/* PERFIL */}
                <TouchableOpacity
                    style={feedtelaStyles.itemFooter}
                    onPress={() => router.push("/perfil")}
                >
                    <Ionicons
                        name="person-circle-outline"
                        size={30}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>

            </View>

        </View>
    );
}