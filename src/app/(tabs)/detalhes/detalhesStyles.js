import { StyleSheet } from "react-native";

export const detalhesStyles = StyleSheet.create({

    // =====================================================
    // CONTAINER
    // =====================================================

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },


    // =====================================================
    // SCROLL
    // =====================================================

    scroll: {
        flex: 1,
    },

    scrollContent: {
        paddingBottom: 20,
    },


    // =====================================================
    // HEADER
    // =====================================================

    header: {
        height: 62,

        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: 22,

        backgroundColor: "#FFFFFF",
    },

    botaoVoltar: {
        width: 32,
        height: 40,

        alignItems: "flex-start",
        justifyContent: "center",
    },

    titulo: {
        fontSize: 23,

        fontWeight: "800",

        color: "#5793B5",

        textAlign: "center",

        flex: 1,
    },

    botaoCriar: {
        width: 30,
        height: 30,

        borderWidth: 2,

        borderColor: "#C32F59",

        borderRadius: 4,

        alignItems: "center",
        justifyContent: "center",
    },

    criarMais: {
        color: "#C32F59",

        fontSize: 23,

        fontWeight: "500",

        lineHeight: 23,

        marginTop: -2,
    },


    // =====================================================
    // PUBLICAÇÃO
    // =====================================================

    publicacao: {
        paddingHorizontal: 34,
    },


    // =====================================================
    // USUÁRIO
    // =====================================================

    usuario: {
        flexDirection: "row",

        alignItems: "center",

        marginTop: 10,
    },

    fotoPerfil: {
        width: 42,
        height: 42,

        borderRadius: 21,

        backgroundColor: "#DDDDDD",
    },

    infoUsuario: {
        marginLeft: 9,
    },

    nomeUsuario: {
        fontSize: 15,

        fontWeight: "700",

        color: "#111111",
    },

    horario: {
        fontSize: 11,

        color: "#858585",

        marginTop: 1,
    },


    // =====================================================
    // TEXTO DA PUBLICAÇÃO
    // =====================================================

    textoPublicacao: {
        fontSize: 13,

        color: "#222222",

        lineHeight: 21,

        marginTop: 17,

        marginBottom: 10,
    },


    // =====================================================
    // IMAGEM
    // =====================================================

    imagemPublicacao: {
        width: "100%",

        height: 87,

        borderRadius: 5,

        backgroundColor: "#DDDDDD",
    },


    // =====================================================
    // AÇÕES
    // =====================================================

    acoes: {
        height: 47,

        flexDirection: "row",

        alignItems: "center",
    },

    acao: {
        flexDirection: "row",

        alignItems: "center",

        marginRight: 18,
    },

    numeroAcao: {
        fontSize: 13,

        color: "#333333",

        marginLeft: 6,
    },

    botaoSalvar: {
        marginLeft: "auto",

        width: 30,
        height: 30,

        alignItems: "flex-end",
        justifyContent: "center",
    },


    // =====================================================
    // COMENTÁRIOS
    // =====================================================

    areaComentarios: {
        paddingHorizontal: 42,

        marginTop: 0,
    },

    tituloComentarios: {
        fontSize: 16,

        fontWeight: "800",

        color: "#111111",

        marginBottom: 17,
    },

    comentarioItem: {
        flexDirection: "row",

        alignItems: "flex-start",
    },

    fotoComentario: {
        width: 42,
        height: 42,

        borderRadius: 21,

        backgroundColor: "#DDDDDD",
    },

    comentarioConteudo: {
        flex: 1,

        marginLeft: 10,
    },

    nomeComentario: {
        fontSize: 15,

        fontWeight: "700",

        color: "#111111",
    },

    horarioComentario: {
        fontSize: 11,

        color: "#858585",

        marginTop: 1,
    },

    textoComentario: {
        fontSize: 13,

        color: "#333333",

        marginTop: 4,

        lineHeight: 18,
    },


    // =====================================================
    // CAMPO DE COMENTÁRIO
    // =====================================================

    areaEnviar: {
        height: 40,

        backgroundColor: "#F5F5F5",

        marginHorizontal: 31,

        marginTop: 10,

        borderRadius: 5,

        flexDirection: "row",

        alignItems: "center",
    },

    inputComentario: {
        flex: 1,

        height: 40,

        paddingHorizontal: 12,

        paddingVertical: 5,

        fontSize: 13,

        color: "#333333",

        backgroundColor: "transparent",
    },

    botaoEnviar: {
        width: 42,
        height: 40,

        alignItems: "center",
        justifyContent: "center",
    },


    // =====================================================
    // ESPAÇO FINAL
    // =====================================================

    espacoFinal: {
        height: 70,
    },


    // =====================================================
    // FOOTER
    // =====================================================

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

        height: 42,

        alignItems: "center",
        justifyContent: "center",
    },


    // =====================================================
    // ÍCONE HOME
    // =====================================================

    iconeHome: {
        width: 25,
        height: 27,

        alignItems: "center",

        justifyContent: "flex-end",
    },

    casaTelhado: {
        position: "absolute",

        top: 2,

        width: 15,
        height: 15,

        borderLeftWidth: 2,
        borderTopWidth: 2,

        borderColor: "#FFFFFF",

        transform: [
            {
                rotate: "45deg",
            },
        ],
    },

    casaCorpo: {
        position: "absolute",

        bottom: 3,

        width: 18,
        height: 15,

        borderWidth: 2,

        borderColor: "#FFFFFF",
    },

    casaPorta: {
        position: "absolute",

        bottom: 0,

        left: 6,

        width: 4,

        height: 7,

        backgroundColor: "#C32F59",

        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,

        borderColor: "#FFFFFF",
    },


    // =====================================================
    // ÍCONE CRIAR
    // =====================================================

    iconeCriar: {
        width: 20,
        height: 20,

        borderWidth: 2,

        borderColor: "#FFFFFF",

        borderRadius: 3,

        alignItems: "center",
        justifyContent: "center",
    },

    iconeCriarTexto: {
        color: "#FFFFFF",

        fontSize: 17,

        fontWeight: "600",

        lineHeight: 18,

        marginTop: -1,
    },

});