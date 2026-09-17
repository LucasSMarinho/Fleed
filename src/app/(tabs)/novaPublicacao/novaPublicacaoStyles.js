import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    header: {
        width: "100%",
        height: 80,
        marginVertical: 10,
        zIndex: 2,
    },

    scrollView: {
        flex: 1,
        width: "100%",
    },

    scroll: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 34,
        paddingTop: 35,
        paddingBottom: 20,
    },

    tituloCampo: {
        width: "100%",
        fontSize: 17,
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
        zIndex: 3,
    },

    opcao: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 25,
        zIndex: 4,
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
        zIndex: 3,
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
        zIndex: 0,
    },
});

export default styles;