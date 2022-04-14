import MapView, { Marker } from 'react-native-maps';
import { Alert } from 'react-native';
import { useLayoutEffect, useCallback, useState } from 'react';
import { styles } from './styles';
import IconButton from '../../components/UI/IconButton';

const Map = ({ navigation, route }) => {

    const [selectedLocation, setSelectedLocation] = useState();

    const initialLocation = route.params && {
        lat: route.params.initialLat,
        lng: route.params.initialLng
    }

    const region = { 
        latitude: initialLocation ? initialLocation.lat : 37.78,
        longitude: initialLocation ? initialLocation.lng : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421 
    }

    useLayoutEffect(() => {
        
        if( initialLocation ) {
            return;
        }

        navigation.setOptions({
            headerRight: ({tintColor}) => <IconButton icon={'save'} size={24} color={tintColor} onPress={savePickedLocationHandler}/>
        });
    }, [navigation, savePickedLocationHandler, initialLocation]);

    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({ lat: lat, lng: lng });
    }

    function savePickedLocationHandler() {
        if( !selectedLocation ) {
            Alert.alert('No location picked!', 'You have to pick a location (by tapping on the map) first');
            return;
        }
        navigation.navigate('AddPlace', { pickedLat: selectedLocation.lat, pickedLng: selectedLocation.lng });
    }

    return(
        <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
            {selectedLocation && <Marker 
                title='Picked Location' 
                coordinate={{
                    latitude: selectedLocation.lat, 
                    longitude: selectedLocation.lng
                }}
            />}
        </MapView>
    );
}

export default Map;