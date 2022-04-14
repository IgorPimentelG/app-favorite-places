import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import PlaceItem from './PlaceItem';
import { useNavigation } from '@react-navigation/native';

const PlacesList = ({ places }) =>  {

    const navigation = useNavigation();

    function selectPlaceHandler(id) {
        navigation.navigate('PlaceDetails', { placeId: id });
    }
    
    if( !places || places.length === 0) {
        return(
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>
                    No places added yet - start adding some!
                </Text>
            </View>
        );
    }

    return(
        <FlatList 
            style={styles.list}
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PlaceItem place={item} onSelect={selectPlaceHandler.bind(null, item.id)}/>}
        />
    );
}

export default PlacesList;