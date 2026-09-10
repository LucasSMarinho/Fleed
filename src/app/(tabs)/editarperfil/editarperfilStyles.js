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

    iconeVoltar: {
        width: 22,
        height: 22,
        marginRight: 30,
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
        width: 85,
        height: 85,
        borderRadius: 50,
    },

    camera: {
        width: 15,
        height: 15,
        marginTop: -7,
        marginLeft: +65,
    },

    textoInicial: {
        color: "#C3345B",
        fontSize: 13,
        marginBottom: 5,
        marginTop: 8,
    },

    containerUsuario: {
        height: 40,
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
        height: 42,
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