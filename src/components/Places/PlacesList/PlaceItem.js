import { View, Image, Text, Pressable } from 'react-native';
import { styles } from './styles';

const PlaceItem = ({ place, onSelect }) => {
    return(
        <Pressable onPress={onSelect}>
            <View>
                <Image source={{ uri: place.imageUri }}/>
                <View>
                    <Text>{place.title}</Text>
                    <Text>{place.address}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default PlaceItem;