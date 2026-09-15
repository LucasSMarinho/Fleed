import { StyleSheet } from "react-native";

export const editarperfilStySheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 25,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },

    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#537A91",
    },

    fotoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },

    foto: {
        width: 140,
        height: 140,
        borderRadius: 100,
    },

    camera: {
        marginTop: -25,
        marginLeft: +95,
    },

    textoInicial: {
        color: "#C3345B",
        fontSize: 15,
        marginBottom: 5,
        marginTop: 8,
        fontFamily: "Oswald_400Regular"
    },

    containerUsuario: {
        height: 50,
        backgroundColor: "#F5F3F2",
        borderRadius: 4,
        paddingHorizontal: 12,
        marginBottom: 5,
    },

    textoBio: {
        height: 65,
        backgroundColor: "#F5F3F2",
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingTop: 10,
        textAlignVertical: "top",
    },

    botao: {
        backgroundColor: "#C3345B",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },

    textoBotao: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default editarperfilStySheet;