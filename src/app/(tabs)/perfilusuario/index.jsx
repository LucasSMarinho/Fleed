import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import voltarRosa from "../../../../assets/voltar_rosa.svg";
import { perfilusuarioStyles } from "./perfilusuarioStyles";
import caneta from "../../../../assets/caneta.svg";
import GradeIcon from "../../../../assets/grade.svg";


export default function PerfilUsuario() {
  const router = useRouter();

  return (
    <View style={perfilusuarioStyles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={perfilusuarioStyles.scroll}
      >

        <TouchableOpacity
          onPress={() => router.back()}
          style={perfilusuarioStyles.botaoVoltar}
        >
          <Image
            source={voltarRosa}
            style={perfilusuarioStyles.iconeVoltar}
          />
        </TouchableOpacity>



        {/* FOTO DO PERFIL */}
        <View style={perfilusuarioStyles.areaFoto}>

          <Image
            source={require("../../../../assets/logo.jpg")}
            style={perfilusuarioStyles.fotoPerfil}
          />

        </View>



        {/* NOME */}
        <View style={perfilusuarioStyles.areaNome}>

          <Text style={perfilusuarioStyles.nome}>
            Lucas Moura
          </Text>

          <Image
            source={caneta}
            style={perfilusuarioStyles.iconeCaneta}
          />

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
              flexDirection= "row"
        // justifyContent= "space-between"
        // alignItems= "center"
        paddingHorizontal={60}
        marginTop={50}
        height={50}
            />

          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../../../assets/salvar.svg")}
              style={perfilusuarioStyles.iconeSalvar}
            />
          </TouchableOpacity>

        </View>


        {/* FOTOS */}
        {/* <View style={perfilusuarioStyles.galeria}>

                    <Image
                        source={require("../../../../assets/images/foto1.jpg")}
                        style={perfilusuarioStyles.fotoGaleria}
                    />

                    <Image
                        source={require("../../../../assets/images/foto2.jpg")}
                        style={perfilusuarioStyles.fotoGaleria}
                    />

                    <Image
                        source={require("../../../../assets/images/foto3.jpg")}
                        style={perfilusuarioStyles.fotoGaleria}
                    />

                </View> */}

      </ScrollView>

    </View>
  );
}