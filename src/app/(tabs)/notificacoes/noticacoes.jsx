import CoracaoP from "../../../../assets/coracao-preenchido.svg";
import Perfil from "../../../../assets/perfil.svg";
import Comentario from "../../../../assets/comentario.svg";
import { StyleSheet, Text, View } from 'react-native';

export default function Notificacoes() {
    const notificacoes = [
        {
            nome: 'Calleri',
            texto: 'curtiu sua publicação',
            icone: CoracaoP,
        },
        {
            nome: 'Militão',
            texto: 'começou a seguir você',
            icone: Perfil,
        },
        {
            nome: 'Rogério Ceni',
            texto: 'comentou: "Parabéns pelo gol!"',
            icone: Comentario,
        }
    ];

    return (
    <View style={styles.container}>

      <Text style={styles.title}>Notificações</Text>

      <View style={styles.lista}>

        {notificacoes.map((notificacao, index) => {

          const Icone = notificacao.icone;

          return (
            <View style={styles.notificacao} key={index}>

              <Icone
                width={23}
                height={23}
                style={styles.icone}
              />

              <View>
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

      </View>

     
      <View style={styles.navbar}>

       

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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6D95AA',
  },

  lista: {
    width: '80%',
    marginTop: 60,
  },

  notificacao: {
    width: '100%',
    height: 39,
    backgroundColor: '#DC97A5',
    borderRadius: 5,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  icone: {
    marginRight: 14,
  },

  texto: {
    color: '#fff',
    fontSize: 10,
  },

  nome: {
    fontWeight: 'bold',
  },

  

});
