import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export const styles = StyleSheet.create({

    list: {
        margin: 24
    },

    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    fallbackText: {
        fontSize: 16,
        color: Colors.primary200
    },

    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 6,
        marginVertical: 12,
        backgroundColor: Colors.primary500,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2
    },

    pressed: {
        opacity: 0.9
    },

    image: {
        flex: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        height: 100
    },

    containerImage: {
        height: '100%',
        width: 100,
        marginRight: 6
    },

    info: {
        flex: 2,
        padding: 12
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.gray700
    },

    address: {
        fontSize: 12,
        color: Colors.gray700
    }

});