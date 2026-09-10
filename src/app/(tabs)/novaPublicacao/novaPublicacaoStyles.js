
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

    tituloPagina: {
        fontSize: 20,
        fontWeight: "700",
        color: "#588EB2",
        textAlign: "center",
        marginBottom: 18,
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
        paddingBottom: 10,
        color: "#868686",
        textAlignVertical: "top",
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
        fontWeight: "600",
        
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
        fontWeight: "700",
        color: "#fff",
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