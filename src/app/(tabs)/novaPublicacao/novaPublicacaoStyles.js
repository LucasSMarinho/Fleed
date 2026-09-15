import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    header: {
        width: "100%",
        height: 80,
        paddingTop: 20,
    },

    scroll: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 34,
        paddingTop: 35,
        paddingBottom: 20,
    },

    tituloCampo: {
        width: "100%",
        fontSize: 14,
        color: "#B83556",
        textAlign: "left",
        marginBottom: 12,
        fontFamily: "Oswald_600SemiBold",
    },

    campoDescricao: {
        width: "100%",
        height: 154,
        backgroundColor: "#F4F3F2",
        borderRadius: 9,
        paddingHorizontal: 9,
        paddingTop: 10,
        paddingBottom: 10,
        color: "#868686",
        textAlignVertical: "top",
        fontFamily: "Oswald_400Regular",
    },

    opcoes: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        marginBottom: 30,
    },

    opcao: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 25,
    },

    textoOpcao: {
        fontSize: 16,
        color: "#588EB2",
        marginLeft: 5,
        fontFamily: "Oswald_400Regular",
    },

    publicar: {
        width: "100%",
        height: 54,
        backgroundColor: "#C3375B",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    textoPublicar: {
        fontSize: 26,
        color: "#fff",
        fontFamily: "Oswald_600SemiBold",
    },

    fundo: {
        position: "absolute",
        bottom: -30,
        left: 0,
        width: "100%",
        height: 100,
    },
});

export default styles;