
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import CoracaoP from '../../../../assets/coracao-preenchido.svg';
import Comentario from '../../../../assets/comentario.svg';
import Perfil from '../../../../assets/perfil.svg';

export default function Notificacoes() {
  const notificacoes = [
    {
      nome: 'Calleri',
      texto: 'curtiu sua publicação',
      icone: CoracaoP,
    },
    {
      nome: 'Luciano',
      texto: 'comentou na sua publicação',
      icone: Comentario,
    },
    {
      nome: 'Militão',
      texto: 'começou a seguir você',
      icone: Perfil,
    },
    {
      nome: 'Léo Pereira',
      texto: 'curtiu sua publicação',
      icone: CoracaoP,
    },
    {
      nome: 'Lucas',
      texto: 'curtiu sua publicação',
      icone: CoracaoP,
    },
    {
      nome: 'Neymar',
      texto: 'comentou na sua publicação',
      icone: Comentario,
    },
   
  ];

  return (
    <View style={styles.container}>

      {/* TÍTULO */}
      <Text style={styles.title}>
        Notificações
      </Text>

      {/* LISTA DE NOTIFICAÇÕES */}
      <ScrollView
        style={styles.lista}
        contentContainerStyle={styles.listaConteudo}
        showsVerticalScrollIndicator={false}
      >
        {notificacoes.map((notificacao, index) => {
          const Icone = notificacao.icone;

          return (
            <View
              style={styles.notificacao}
              key={index}
            >

              {/* ÍCONE */}
              <Icone
                width={30}
                height={30}
                style={styles.icone}
              />

              {/* TEXTOS */}
              <View style={styles.textos}>

                <Text style={styles.texto}>
                  <Text style={styles.nome}>
                    {notificacao.nome}
                  </Text>{' '}
                  {notificacao.texto}
                </Text>

                <Text style={styles.horario}>
                  Há 2h
                </Text>

              </View>

            </View>
          );
        })}
      </ScrollView>

      {/* BARRA INFERIOR */}
      <View style={styles.navbar}>

        {/* Os ícones da navbar entram aqui depois */}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

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

  navbar: {
    position: 'absolute',
    bottom: 0,

    width: '100%',
    height: 55,

    backgroundColor: '#BF3156',

    alignItems: 'center',
    justifyContent: 'center',
  },

});