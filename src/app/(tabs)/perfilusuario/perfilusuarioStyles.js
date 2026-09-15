import { StyleSheet } from "react-native";


export const perfilusuarioStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },


    scroll: {
        paddingBottom: 80,
    },


    /* TÍTULO */

    titulo: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold",
        color: "#537A91",
        marginTop: 25,
    },


    /* BOTÃO VOLTAR */

    botaoVoltar: {
        position: "absolute",
        left: 20,
        top: 32,
        zIndex: 10,
    },


    iconeVoltar: {
        width: 27,
        height: 27,
    },


    /* FOTO DO PERFIL */

    areaFoto: {
        alignItems: "center",
        marginTop: 15,
    },


    fotoPerfil: {
       width: 110,
        height: 110,
        borderRadius: 100,
    },


    /* NOME */

    areaNome: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingLeft: 30,
    },


    nome: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#171717",
    },


    iconeCaneta: {
        width: 18,
        height: 18,
        marginLeft: 6,
    },


    /* USUÁRIO */

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
        marginTop: 40,
        paddingHorizontal: 10,
    },


    info: {
        flex: 1,
        alignItems: "center",
    },


    numero: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#171717",
    },


    textoInfo: {
        fontSize: 15,
        color: "#222222",
        marginTop: 3,
    },


    /* BIO */

    bio: {
        textAlign: "center",
        fontSize: 17,
        color: "#222222",
        marginTop: 22,
    },


    /* MENU GALERIA */

    menuGaleria: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 60,
        marginTop: 55,
        height: 45,
        paddingBottom: 70,
    },


    iconeSalvar: {
        width: 30,
        height: 30,
    },


    /* GALERIA */

        /* GALERIA */

    galeria: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 5,
    },


    fotoGaleria: {
        width: "31.5%",
        height: 130,
        marginBottom: 6,
        resizeMode: "cover",
    },


});

export default perfilusuarioStyles;