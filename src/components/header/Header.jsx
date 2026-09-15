import { Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import VoltarBranco from '../../../assets/voltar_branco';
import VoltarRosa from '../../../assets/voltar_rosa';
import headerStyles from './headerStyles';
import { useFonts, Oswald_600SemiBold} from '@expo-google-fonts/oswald';


export default function Header(props) {

    let [fontsLoaded] = useFonts({
        Oswald_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <View style={[headerStyles.container, {backgroundColor: `${props.corHeader}`}]}>
                <TouchableOpacity>
                 {props.corSeta === "rosa" ? (
                     <VoltarRosa width={16} height={16} />
                    ) : (
                     <VoltarBranco width={16} height={16} />
                )}
                </TouchableOpacity>
                <Text style={[headerStyles.text, {color: `${props.corText}`}]} > {props.tituloHeader} </Text>
            </View>
        </>
    );
}