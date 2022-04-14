import { ScrollView, View, Text, Image } from 'react-native';
import OutlinedButton from "../../components/UI/OutlinedButton";
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { fetchPlaceDetails } from '../../shared/services/database';

const PlaceDetails = ({ route, navigation }) => {

    const selectedPlaceId = route.params.placeId;
    const [fetchedPlace, setFetchedPlace] = useState();

    useEffect(() => {
        async function loadPlaceData() {
            const place = await fetchPlaceDetails(selectedPlaceId);
            setFetchedPlace(place);
            navigation.setOptions({
                title: place.title
            });
        }

        loadPlaceData();
    }, [selectedPlaceId]);

    function showOnMapHandler() {
        navigation.navigate('Map', {
            initialLat: fetchPlaceDetails.location.lat,
            initialLng: fetchPlaceDetails.location.lng
        });
    }

    if( !fetchedPlace) {
        return (
        <View style={styles.fallback}>
            <Text style={styles.fallbackText}>Loading place data...</Text>
        </View>
        );
    }

    return(
       <ScrollView>
            <Image style={styles.image} source={{ uri: fetchedPlace.imageUri}}/>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{fetchedPlace.address}</Text>
                </View>
                <OutlinedButton icon={'map'} onPress={showOnMapHandler}>View on Map</OutlinedButton>
            </View>
        </ScrollView>
    );
}

export default PlaceDetails;