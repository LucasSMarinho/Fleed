import { Text, View, TouchableOpacity } from 'react-native';
import VoltarBranco from '../../../assets/voltar_branco';
import VoltarRosa from '../../../assets/voltar_rosa';
import headerStyles from './headerStyles';
import { useFonts, Oswald_600SemiBold } from '@expo-google-fonts/oswald';
import { useRouter } from 'expo-router';

export default function Header(props) {

    const router = useRouter();
    const [fontsLoaded] = useFonts({
        Oswald_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View
            style={[
                headerStyles.container,
                { backgroundColor: props.corHeader }
            ]}
        >

            <View style={headerStyles.side}>
                <TouchableOpacity
                    onPress={() => {
                        router.push(`/${props.rota}`);
                    }}
                    style={headerStyles.button}
                >
                    {props.mostrarSeta === "true" &&
                        (<VoltarRosa width={16} height={16} />)}

                </TouchableOpacity>
            </View>

            {/* Título */}
            <View style={headerStyles.titleContainer}>
                <Text
                    style={[
                        headerStyles.text,
                        { color: props.corText }
                    ]}
                >
                    {props.tituloHeader}
                </Text>
            </View>

            {/* Espaço da direita */}
            <View style={headerStyles.side} />

        </View>
    );
}