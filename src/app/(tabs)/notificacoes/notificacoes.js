import { StyleSheet } from "react-native";


export const NotificacoesStyles= StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
    marginTop: 25,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6D95AA',
  },

  lista: {
    width: '90%',
    flex: 1,
    marginTop: 50,
  },

  listaConteudo: {
    paddingBottom: 80,
  },

  notificacao: {
    width: '100%',
    height: 65,
    backgroundColor: '#DC97A5',
    borderRadius: 7,
    marginBottom: 18,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,
  },

  icone: {
    marginRight: 16,
  },

  textos: {
    flex: 1,
  },

  texto: {
    color: '#fff',
    fontSize: 14,
  },

  nome: {
    fontWeight: 'bold',
  },

  horario: {
    color: '#F5DCE1',
    fontSize: 11,
    marginTop: 3,
  },


});

export default NotificacoesStyles;