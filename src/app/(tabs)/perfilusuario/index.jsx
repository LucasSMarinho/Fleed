import React, { useContext, useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";

import Header from "../../../components/header/Header";

import GradeIcon from "../../../../assets/grade.svg";
import SalvarIcon from "../../../../assets/salvar.svg";
import CanetaIcon from "../../../../assets/caneta.svg";

import { perfilusuarioStyles } from "./perfilusuarioStyles";
import { UsuarioContext } from "../../../context/UsuarioContext";


export default function PerfilUsuario() {

  const router = useRouter();

  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const { usuario } = useContext(UsuarioContext);
  const [nomeUsuario, setNomeUsuario] = useState("");

  const buscarUsuario = async () => {
    try {
      if (!usuario) {
        console.log("Nenhum usuário logado");
        return;
      }

      const resposta = await fetch(
        `http://192.168.137.1:3000/usuario/${usuario.id}`
      );

      const dados = await resposta.json();

      setNome(dados.nome);
      setNomeUsuario(dados.usuario);
      setBio(dados.bio);
      setFotoPerfil(dados.FotoPerfil);

      console.log("Dados do usuário:", dados);

    } catch (error) {
      console.log("Erro ao buscar usuário:", error);
    }
  };

  useEffect(() => {
    buscarUsuario();
  }, [usuario]);


  const publicacoes = [

    {
      id: 1,
      imagem: require("../../../../assets/imagemperfil.png"),
    },

    {
      id: 2,
      imagem: require("../../../../assets/imagemperfil2.png"),
    },

    {
      id: 3,
      imagem: require("../../../../assets/imagemperfil3.png"),
    },

    {
      id: 4,
      imagem: require("../../../../assets/imagemperfil3.png"),
    },

  ];


  return (

    <View style={perfilusuarioStyles.container} >

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={perfilusuarioStyles.scroll}
      >

        <Header
          corSeta="rosa"
          tituloHeader="Perfil"
          corText="#588eb2"
        />


        <View style={perfilusuarioStyles.areaFoto}>

          <Image
            source={
              usuario.FotoPerfil
                ? { uri: usuario.FotoPerfil }
                : require("../../../../assets/fotodeperfil.png")
            }
            style={perfilusuarioStyles.fotoPerfil}
          />

        </View>


        <View style={perfilusuarioStyles.areaNome}>

          <Text style={perfilusuarioStyles.nome}>
            {usuario.nome}
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/editarperfil")}
          >

            <CanetaIcon
              width={18}
              height={18}
              style={perfilusuarioStyles.iconeCaneta}
            />

          </TouchableOpacity>

        </View>

        <Text style={perfilusuarioStyles.usuario}>
          {usuario.usuario}
        </Text>

        <View style={perfilusuarioStyles.informacoes}>

          <View style={perfilusuarioStyles.info}>

            <Text style={perfilusuarioStyles.numero}>
              234
            </Text>

            <Text style={perfilusuarioStyles.textoInfo}>
              Publicações
            </Text>

          </View>


          <View style={perfilusuarioStyles.info}>

            <Text style={perfilusuarioStyles.numero}>
              1230
            </Text>

            <Text style={perfilusuarioStyles.textoInfo}>
              Seguidores
            </Text>

          </View>


          <View style={perfilusuarioStyles.info}>

            <Text style={perfilusuarioStyles.numero}>
              289
            </Text>

            <Text style={perfilusuarioStyles.textoInfo}>
              Seguindo
            </Text>

          </View>

        </View>

        <Text style={perfilusuarioStyles.bio}>
          {bio}
        </Text>


        <View style={perfilusuarioStyles.menuGaleria}>

          <TouchableOpacity>

            <GradeIcon
              marginTop={50}
              height={50}
              width={25}
            />

          </TouchableOpacity>


          <TouchableOpacity>

            <SalvarIcon
              marginTop={50}
              height={50}
              width={25}
            />

          </TouchableOpacity>

        </View>

        <View style={perfilusuarioStyles.galeria}>

          {publicacoes.map((publicacao) => (

            <Image
              key={publicacao.id}
              source={publicacao.imagem}
              style={perfilusuarioStyles.fotoGaleria}
            />

          ))}

        </View>

      </ScrollView>

    </View>

  );

}