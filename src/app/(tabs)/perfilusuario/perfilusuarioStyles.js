import { StyleSheet } from "react-native";

export const perfilusuarioStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    scroll: {
        paddingBottom: 90,
    },

    /* CABEÇALHO */

    header: {
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },

    titulo: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#6485a6",
    },

    botaoVoltar: {
        position: "absolute",
        left: 20,
        top: 30,
    },


    /* FOTO */

    areaFoto: {
        alignItems: "center",
        marginTop: 0,
    },

    fotoPerfil: {
        width: 155,
        height: 155,
        borderRadius: 100,
    },


    /* NOME */

    areaNome: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        gap: 6,
    },

    nome: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#171717",
    },

    usuario: {
        textAlign: "center",
        fontSize: 17,
        color: "#555555",
        marginTop: 2,
    },


    /* INFORMAÇÕES */

    informacoes: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 35,
        paddingHorizontal: 15,
    },

    info: {
        alignItems: "center",
        flex: 1,
    },

    numero: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#171717",
    },

    textoInfo: {
        fontSize: 17,
        color: "#222222",
        marginTop: 4,
    },


    /* BIO */

    bio: {
        textAlign: "center",
        fontSize: 17,
        color: "#222222",
        marginTop: 20,
    },


    /* MENU DA GALERIA */

    menuGaleria: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 60,
        marginTop: 50,
        height: 50,
    },


    /* GALERIA */

    galeria: {
        flexDirection: "row",
        width: "100%",
        gap: 5,
        marginTop: 5,
    },

    fotoGaleria: {
        width: "32.8%",
        height: 125,
        borderRadius: 6,
    },


    
});