import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const IconButton = ({ icon, size, color, onPress }) => {
    return(
        <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    );
}

export default IconButton;