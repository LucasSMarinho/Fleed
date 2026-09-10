import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    scroll: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 34,
        paddingTop: 20,
        paddingBottom: 20,
    },

    tituloPagina: {
        fontSize: 20,
        fontWeight: "700",
        color: "#588EB2",
        textAlign: "center",
        marginBottom: 18,
    },

    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginBottom: 45,
    },

    botaoVoltar: {
        position: "absolute",
        left: 0,
        padding: 5,
    },

    backIcon: {
        width: 28,
        height: 28,
        resizeMode: "contain",
    },

    tituloCampo: {
        width: "100%",
        fontSize: 14,
        fontWeight: "700",
        color: "#B83556",
        textAlign: "left",
        marginBottom: 12,
    },

    campoDescricao: {
        width: "100%",
        height: 154,
        backgroundColor: "#D5E3ED",
        borderRadius: 9,
        paddingHorizontal: 9,
        paddingTop: 10,
        color: "#868686",
        textAlignVertical: "top",
        paddingVertical: 5,
    },
});

export default styles;