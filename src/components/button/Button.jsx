import { Text, TouchableOpacity } from 'react-native';
import { Oswald_600SemiBold } from '@expo-google-fonts/oswald';
import { useFonts } from '@expo-google-fonts/oswald';
import buttonStyles from './buttonStyles';

export default function Button(props) {
   
    let [fontsLoaded] = useFonts({
          Oswald_600SemiBold,
      });
  
      if (!fontsLoaded) {
          return null;
      }

    return (
        <>
                <TouchableOpacity onPress={props.onPress} style={[buttonStyles.button, {backgroundColor: props.backgroundColor}]}>
                 <Text style={{color: props.textColor, fontFamily: 'Oswald_600SemiBold', fontSize: 16}}>{props.text}</Text>
                </TouchableOpacity>
        </>
    );
}