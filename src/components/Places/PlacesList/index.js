import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places }) =>  {

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
            data={places}
            keyExtractor={(place) => place.id}
            renderItem={({ place }) => <PlaceItem data={place}/>}
        />
    );
}

export default PlacesList;