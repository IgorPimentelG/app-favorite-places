import { Pressable, Text } from 'react-native';
import { styles } from './styles';

const Button = ({ onPress, children }) => {
    return(
        <Pressable onPress={onPress} style={[({pressed}) => pressed && styles.pressed, styles.button]}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default Button;