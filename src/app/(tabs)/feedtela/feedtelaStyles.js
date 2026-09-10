import { StyleSheet } from "react-native";

export const feedtelaStyles = StyleSheet.create({

    // =====================================================
    // CONTAINER
    // =====================================================

    container: {
        flex: 1,
        backgroundColor: "#E9E9E9",
    },


    // =====================================================
    // HEADER
    // =====================================================

    header: {
        height: 64,

        backgroundColor: "#FFFFFF",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: 22,

        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },

    logo: {
        fontSize: 24,

        fontWeight: "800",

        color: "#5793B5",

        letterSpacing: 0.2,
    },

    botaoNotificacao: {
        width: 36,
        height: 36,

        alignItems: "center",
        justifyContent: "center",
    },


    // =====================================================
    // SCROLL
    // =====================================================

    scroll: {
        flex: 1,
    },

    scrollContent: {
        paddingTop: 0,
        paddingBottom: 15,
    },

    espacoFinal: {
        height: 90,
    },


    // =====================================================
    // CARD
    // =====================================================

    cardPublicacao: {
        backgroundColor: "#F7F7F7",

        marginHorizontal: 20,
        marginTop: 16,

        borderRadius: 5,

        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 9,
    },


    // =====================================================
    // INFORMAÇÕES DO USUÁRIO
    // =====================================================

    usuario: {
        flexDirection: "row",
        alignItems: "center",
    },

    fotoPerfil: {
        width: 40,
        height: 40,

        borderRadius: 20,

        backgroundColor: "#D5D5D5",
    },

    infoUsuario: {
        flex: 1,

        marginLeft: 10,
    },

    nomeUsuario: {
        fontSize: 14,

        fontWeight: "700",

        color: "#111111",
    },

    horario: {
        fontSize: 10,

        color: "#7D7D7D",

        marginTop: 1,
    },

    botaoTresPontos: {
        width: 30,
        height: 35,

        alignItems: "flex-end",
        justifyContent: "flex-start",

        paddingTop: 0,
    },


    // =====================================================
    // TEXTO DA PUBLICAÇÃO
    // =====================================================

    textoPublicacao: {
        fontSize: 13,

        color: "#242424",

        lineHeight: 20,

        marginTop: 9,
        marginBottom: 7,
    },


    // =====================================================
    // AÇÕES
    // =====================================================

    acoes: {
        flexDirection: "row",

        alignItems: "center",

        height: 32,
    },

    acao: {
        flexDirection: "row",

        alignItems: "center",

        marginRight: 18,
    },

    numeroAcao: {
        fontSize: 13,

        color: "#222222",

        marginLeft: 6,
    },

    botaoSalvar: {
        marginLeft: "auto",

        width: 30,
        height: 30,

        alignItems: "flex-end",
        justifyContent: "center",
    },


    // =====================================================
    // BOTÃO +
    // =====================================================

    botaoAdicionar: {
        position: "absolute",

        right: 10,
        bottom: 57,

        width: 48,
        height: 48,

        borderRadius: 24,

        backgroundColor: "#E294A9",

        alignItems: "center",
        justifyContent: "center",

        elevation: 5,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4,
    },

    textoMais: {
        color: "#FFFFFF",

        fontSize: 38,

        fontWeight: "300",

        lineHeight: 42,

        marginTop: -3,
    },


    // =====================================================
    // FOOTER
    // =====================================================

    footer: {
        height: 42,

        backgroundColor: "#C32F59",

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-around",

        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },

    itemFooter: {
        flex: 1,

        height: 42,

        alignItems: "center",
        justifyContent: "center",
    },


    // =====================================================
    // ÍCONE HOME
    // =====================================================

    iconeHome: {
        width: 25,
        height: 27,

        alignItems: "center",

        justifyContent: "flex-end",
    },

    casaTelhado: {
        position: "absolute",

        top: 2,

        width: 15,
        height: 15,

        borderLeftWidth: 2,
        borderTopWidth: 2,

        borderColor: "#FFFFFF",

        transform: [
            {
                rotate: "45deg",
            },
        ],
    },

    casaCorpo: {
        position: "absolute",

        bottom: 3,

        width: 18,
        height: 15,

        borderWidth: 2,

        borderColor: "#FFFFFF",
    },

    casaPorta: {
        position: "absolute",

        bottom: 0,
        left: 6,

        width: 4,
        height: 7,

        backgroundColor: "#C32F59",

        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,

        borderColor: "#FFFFFF",
    },


    // =====================================================
    // ÍCONE CRIAR
    // =====================================================

    iconeCriar: {
        width: 20,
        height: 20,

        borderWidth: 2,

        borderColor: "#FFFFFF",

        borderRadius: 3,

        alignItems: "center",
        justifyContent: "center",
    },

    iconeCriarTexto: {
        color: "#FFFFFF",

        fontSize: 17,

        fontWeight: "600",

        lineHeight: 18,

        marginTop: -1,
    },

});


// =========================================================
// IMPORTANTE PARA O EXPO ROUTER
// =========================================================

export default function FeedtelaStyles() {
    return null;
}