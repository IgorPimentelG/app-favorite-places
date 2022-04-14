import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
    },

    container: {
        marginBottom: 50
    },

    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500
    },

    input:{
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderRadius: 6,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary500
    }
});