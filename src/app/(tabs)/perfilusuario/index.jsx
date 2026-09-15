import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import voltarRosa from "../../../../assets/voltar_rosa.svg";

import GradeIcon from "../../../../assets/grade.svg";
import SalvarIcon from "../../../../assets/salvar.svg";
import CanetaIcon from "../../../../assets/caneta.svg"
import { perfilusuarioStyles } from "./perfilusuarioStyles";


export default function PerfilUsuario() {

  const router = useRouter();


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

  ];


  return (

    <View style={perfilusuarioStyles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={perfilusuarioStyles.scroll}
      >


        {/* BOTÃO VOLTAR */}

        <TouchableOpacity
          onPress={() => router.back()}
          style={perfilusuarioStyles.botaoVoltar}
        >

          <Image
            source={voltarRosa}
            style={perfilusuarioStyles.iconeVoltar}
          />

        </TouchableOpacity>


        {/* TÍTULO */}

        <Text style={perfilusuarioStyles.titulo}>
          Perfil
        </Text>


        {/* FOTO DO PERFIL */}

        <View style={perfilusuarioStyles.areaFoto}>

          <Image
            source={require("../../../../assets/fotodeperfil.png")}
            style={perfilusuarioStyles.fotoPerfil}
          />

        </View>


        {/* NOME */}

        <View style={perfilusuarioStyles.areaNome}>

          <Text style={perfilusuarioStyles.nome}>
            Lucas Moura
          </Text>

          <TouchableOpacity onPress={() => router.replace("/editarperfil")}>

            <CanetaIcon
              width={25}
              height={25}
            />

          </TouchableOpacity>

        </View>


        {/* USUÁRIO */}

        <Text style={perfilusuarioStyles.usuario}>
          @lucas.moura
        </Text>


        {/* INFORMAÇÕES */}

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


        {/* BIO */}

        <Text style={perfilusuarioStyles.bio}>
          Jogador do SPFC!
        </Text>


        {/* ÍCONES DA GALERIA */}

        <View style={perfilusuarioStyles.menuGaleria}>


          <TouchableOpacity >

            <GradeIcon
              flexDirection="row"
              // justifyContent= "space-between"
              // alignItems= "center"
              // paddingHorizontal={60}
              marginTop={50}
              height={50}
              width={25}
            />

          </TouchableOpacity>

          <TouchableOpacity>
            <SalvarIcon
              // paddingHorizontal={60}
              marginTop={50}
              height={50}
              width={25}
            />
          </TouchableOpacity>


        </View>


        {/* PUBLICAÇÕES */}

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
