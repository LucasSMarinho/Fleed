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
  const [publicacoes, setPublicacoes] = useState([]);

  const { usuario } = useContext(UsuarioContext);

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
      setBio(dados.bio);
      setFotoPerfil(dados.FotoPerfil);

      console.log("Dados do usuário:", dados);

    } catch (error) {
      console.log("Erro ao buscar usuário:", error);
    }
  };

  const buscarPublicacoes = async () => {
  try {
    const resposta = await fetch(
      "http://192.168.137.1:3000/publicacoes"
    );

    if (!resposta.ok) {
      throw new Error("Erro ao buscar publicações");
    }

    const dados = await resposta.json();

    console.log("PUBLICAÇÕES DO PERFIL:", dados);

    dados.forEach((publicacao) => {
      console.log("ID:", publicacao.id);
      console.log("IMAGEM:", publicacao.imagem);
    });

    setPublicacoes(dados);

  } catch (error) {
    console.log("Erro ao buscar publicações:", error);
  }
};

  useEffect(() => {
  buscarUsuario();
  buscarPublicacoes();

  const intervalo = setInterval(() => {
    buscarPublicacoes();
  }, 1000);

  return () => clearInterval(intervalo);
}, []);
  return (
    <View style={perfilusuarioStyles.container}>

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
              fotoPerfil
                ? { uri: fotoPerfil }
                : require("../../../../assets/fotodeperfil.png")
            }
            style={perfilusuarioStyles.fotoPerfil}
          />

        </View>

        <View style={perfilusuarioStyles.areaNome}>

          <Text style={perfilusuarioStyles.nome}>
            {nome}
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
          {usuario?.usuario}
        </Text>

        <View style={perfilusuarioStyles.informacoes}>

          <View style={perfilusuarioStyles.info}>

            <Text style={perfilusuarioStyles.numero}>
              {publicacoes.length}
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

  {publicacoes.map((publicacao) => {
    if (!publicacao.imagem) {
      return null;
    }

    return (
      <TouchableOpacity
        key={publicacao.id}
        activeOpacity={0.8}
        onPress={() => router.push("/detalhes")}
      >
        <Image
          source={{ uri: publicacao.imagem }}
          style={{
            width: 120,
            height: 130,
          }}
          resizeMode="cover"
          onError={(erro) =>
            console.log("ERRO AO CARREGAR FOTO:", erro.nativeEvent)
          }
        />
      </TouchableOpacity>
    );
  })}

</View>

      </ScrollView>

    </View>
  );
}