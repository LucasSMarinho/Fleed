import { StyleSheet } from "react-native";

export const feedtelaStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    header: {
        width: "100%",
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 25,
    },

    logo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#588EB2",
    },

    botaoNotificacao: {
        padding: 5,
    },

    scroll: {
        flex: 1,
        width: "100%",
    },

    scrollContent: {
        width: "100%",
        alignItems: "center",
        paddingBottom: 120,
    },

    cardPublicacao: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },

    usuario: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },

    fotoPerfil: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },

    infoUsuario: {
        flex: 1,
        marginLeft: 10,
    },

    nomeUsuario: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333333",
    },

    horario: {
        fontSize: 12,
        color: "#868686",
        marginTop: 2,
    },

    botaoTresPontos: {
        padding: 5,
    },

    textoPublicacao: {
        width: "100%",
        fontSize: 16,
        color: "#333333",
        marginBottom: 5,
    },

    imagemPublicacao: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginTop: 10,
    },

    localizacaoPublicacao: {
        width: "100%",
        fontSize: 14,
        color: "#588EB2",
        marginTop: 10,
    },

    acoes: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
    },

    acao: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
    },

    numeroAcao: {
        fontSize: 14,
        color: "#588EB2",
        marginLeft: 5,
    },

    botaoSalvar: {
        marginLeft: "auto",
        padding: 5,
    },

    botaoAdicionar: {
        position: "absolute",
        right: 25,
        bottom: 25,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#C3375B",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    textoMais: {
        fontSize: 36,
        color: "#FFFFFF",
        fontWeight: "300",
        lineHeight: 40,
    },

    espacoFinal: {
        height: 30,
    },
});