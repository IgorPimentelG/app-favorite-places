import { View, Image, Text, Pressable } from 'react-native';
import { styles } from './styles';

const PlaceItem = ({ place, onSelect }) => {
    return(
        <Pressable onPress={onSelect} style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: place.imageUri }}/>
            </View>
            <View styles={styles.info}>
                <Text style={styles.title}>{place.title}</Text>
                <Text style={styles.address}>{place.address}</Text>
            </View>
        </Pressable>
    );
}

export default PlaceItem;