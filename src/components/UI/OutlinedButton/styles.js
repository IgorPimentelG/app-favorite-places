import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        paddingHorizontal: 1,
        paddingVertical: 6,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500
    },

    pressed: {
        opacity: 0.7
    },

    icon: {
        marginRight: 6,
        marginLeft: 10
    },

    text: {
        color: Colors.primary500,
        marginRight: 10
    }
});