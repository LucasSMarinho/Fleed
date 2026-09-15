import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({

    container: {
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
    },

    side: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontFamily: 'Oswald_600SemiBold',
        fontSize: 35,
    },

});

export default headerStyles;