import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { perfilusuarioStyles } from "./perfilusuarioStyles";


const usuario = {
  nome: "Lucas Moura",
  usuario: "@lucas.moura",
  bio: "Jogador do SPFC!",
  foto: null, // URL da foto
  publicacoes: 234,
  seguidores: 1230,
  seguindo: 289,

};


const fotos = [
  { id: "1", uri: null },
  { id: "2", uri: null },
  { id: "3", uri: null },
]



export const Perfil = ({ navigation }) => {
  const [aba, setAba] = useState("salvos"); // publicacoes salvos

  const inicialNome = usuario.nome ? usuario.nome.charAt(0).toUpperCase() : "Usuario";

    return(
        <SafeAreaProvider>
            <SafeAreaView style={PerfilStyle.container} edges={["top", "bottom"]}>


                <View>
                    <TouchableOpacity>
                <Image source={backIcon} style={{height: 13, width: 13}}/>
                </TouchableOpacity>
                <Text style={[headerStyles.text, {color: `${props.corText}`}]} > {props.tituloHeader} </Text>
                </View>




                
                <ScrollView  showsVerticalScrollIndicator={false}
          contentContainerStyle={PerfilStyle.scrollContent}
          >

            <View style={PerfilStyle.avatarWrap}>
            {usuario.foto ? (
              <Image source={{ uri: usuario.foto }} style={PerfilStyle.avatarImage} />
            ) : (
              <View style={PerfilStyle.avatarPlaceholder}>
                <Text style={PerfilStyle.avatarPlaceholderText}>{inicialNome}</Text>
              </View>
            )}
          </View>



          <View style={PerfilStyle.nomeRow}>
            <Text style={PerfilStyle.nome}>{usuario.nome}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditarPerfil")}
              style={PerfilStyle.editButton}
            >
              <Text style={PerfilStyle.editButtonText}></Text>
            </TouchableOpacity>
          </View>




<Text style={PerfilStyle.usuario}>{usuario.usuario}</Text>

          <View style={PerfilStyle.statsRow}>
            <View style={PerfilStyle.statItem}>
              <Text style={PerfilStyle.statNumero}>{usuario.publicacoes}</Text>
              <Text style={PerfilStyle.statLabel}>Publicações</Text>
            </View>

            <View style={PerfilStyle.statItem}>
              <Text style={PerfilStyle.statNumero}>{usuario.seguidores}</Text>
              <Text style={PerfilStyle.statLabel}>Seguidores</Text>
            </View>

            <View style={PerfilStyle.statItem}>
              <Text style={PerfilStyle.statNumero}>{usuario.seguindo}</Text>
              <Text style={PerfilStyle.statLabel}>Seguindo</Text>
            </View>
          </View>

          <Text style={PerfilStyle.bio}>{usuario.bio}</Text>

          <View style={PerfilStyle.tabsRow}>
            <TouchableOpacity
              style={[
                PerfilStyle.tabButton,
                aba === "salvos" && PerfilStyle.tabButtonAtiva,
              ]}
              onPress={() => setAba("salvos")}
            >
              <Text style={PerfilStyle.tabIcon}>▦</Text>
            </TouchableOpacity>

            
            
          </View>
        </ScrollView>
      </SafeAreaView>

      
    </SafeAreaProvider>
  );
};
                
 
