import { StyleSheet } from "react-native";

export const feedtelaStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#E8E8E8",
    },

    /* SCROLL */

    scroll: {
        flex: 1,
    },

    scrollContent: {
        paddingTop: 4,
        paddingHorizontal: 4,
        paddingBottom: 20,
    },

    /* HEADER */

    header: {
        height: 63,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 22,
        marginBottom: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },

    logo: {
        fontSize: 24,
        fontWeight: "800",
        color: "#5793B5",
        letterSpacing: 0.5,
    },

    botaoNotificacao: {
        padding: 4,
    },

    /* CARD */

    cardPublicacao: {
        backgroundColor: "#F7F7F7",
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.08,
        shadowRadius: 2,

        elevation: 2,
    },

    /* USUÁRIO */

    usuario: {
        flexDirection: "row",
        alignItems: "center",
    },

    fotoPerfil: {
        width: 39,
        height: 39,
        borderRadius: 22,
        backgroundColor: "#CCCCCC",
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
        fontSize: 11,
        color: "#777777",
        marginTop: 2,
    },

    /* TEXTO */

    textoPublicacao: {
        fontSize: 13,
        lineHeight: 20,
        color: "#222222",
        marginTop: 10,
        marginBottom: 8,
    },

    /* AÇÕES */

    acoes: {
        flexDirection: "row",
        alignItems: "center",
        height: 35,
    },

    acao: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
    },

    numeroAcao: {
        marginLeft: 6,
        fontSize: 13,
        color: "#222222",
    },

    salvar: {
        marginLeft: "auto",
    },

    /* BOTÃO + */

    botaoAdicionar: {
        position: "absolute",
        right: 12,
        bottom: 58,

        width: 48,
        height: 48,

        borderRadius: 25,

        backgroundColor: "#E094A8",

        justifyContent: "center",
        alignItems: "center",

        elevation: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    /* FOOTER */

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
        alignItems: "center",
        justifyContent: "center",
    },
});