
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import CoracaoP from '../../../../assets/coracao-preenchido.svg';
import Comentario from '../../../../assets/comentario.svg';
import Perfil from '../../../../assets/perfil.svg';
import Header from '../../../components/header/Header'
import {NotificacoesStyles} from './notificacoes'

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
    <View style={NotificacoesStyles.container}>
      <View style={{width: "100%"}}>
      <Header corSeta="rosa" tituloHeader="Notificações" corText="#588EB2"/>
      </View>


      <ScrollView
        style={NotificacoesStyles.lista}
        contentContainerStyle={NotificacoesStyles.listaConteudo}
        showsVerticalScrollIndicator={false}
      >
        {notificacoes.map((notificacao, index) => {
          const Icone = notificacao.icone;

          return (
            <View
              style={NotificacoesStyles.notificacao}
              key={index}
            >

              {/* ÍCONE */}
              <Icone
                width={30}
                height={30}
                style={NotificacoesStyles.icone}
              />

              <View style={NotificacoesStyles.textos}>

                <Text style={NotificacoesStyles.texto}>
                  <Text style={NotificacoesStyles.nome}>
                    {notificacao.nome}
                  </Text>{' '}
                  {notificacao.texto}
                </Text>

                <Text style={NotificacoesStyles.horario}>
                  Há 2h
                </Text>

              </View>

            </View>
          );
        })}
      </ScrollView>

      <View style={NotificacoesStyles.navbar}>


      </View>

    </View>
  );
}

