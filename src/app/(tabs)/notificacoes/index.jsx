
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import CoracaoP from '../../../../assets/coracao-preenchido.svg';
import Comentario from '../../../../assets/comentario.svg';
import Perfil from '../../../../assets/perfil.svg';
import Header from '../../../components/header/Header'
import { NotificacoesStyles } from './notificacoes'
import { useEffect, useState } from 'react';

export default function Notificacoes() {
  const [notificacoes, setNotificacoes] = useState([
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

  ]);

  const funcGet = async () => {
    const retornoApi = await fetch("http://localhost:3000/notificacoes")
    const dados = await retornoApi.json()
    console.log(dados)
    setNotificacoes(dados)
  }


  useEffect(() => {
    funcGet()
  }, [])

  return (
    <View style={NotificacoesStyles.container}>
      <ScrollView
        style={NotificacoesStyles.lista}
        contentContainerStyle={NotificacoesStyles.listaConteudo}
        showsVerticalScrollIndicator={false}
      >


        <Header corSeta="rosa" tituloHeader="Notificações" corText="#588EB2" />


        {notificacoes.map((notificacao, index) => {

                    // Pega o componente SVG pelo nome vindo do JSON

                    let Icone = CoracaoP
                    if(notificacao.icone == "Comentario")
                    {Icone = Comentario;}
                    else if(notificacao.icone == "CoracaoP")
                    {Icone = CoracaoP;}
                    else
                    {Icone = Perfil}



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
    </View>

  );
}

