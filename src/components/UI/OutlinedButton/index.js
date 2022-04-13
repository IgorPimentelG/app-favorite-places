import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/colors';
import { styles } from './styles';

const OutlinedButton = ({ onPress, icon, children }) => {
    return(
        <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
            <Ionicons style={styles.icon} name={icon} size={18} color={Colors.primary500}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default OutlinedButton;