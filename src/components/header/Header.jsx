import { Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import backIcon from '../../../assets/backIcon.png';
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
                <Image source={backIcon} style={{height: 13, width: 13}}/>
                </TouchableOpacity>
                <Text style={[headerStyles.text, {color: `${props.corText}`}]} > {props.tituloHeader} </Text>
            </View>
        </>
    );
}