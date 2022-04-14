import { View, Alert, Image, Text } from 'react-native';
import OutlinedButton from '../../UI/OutlinedButton';
import { styles } from './styles';
import { useState, useEffect } from 'react';
import { getAddress, getMapPreview } from '../../../util/location';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';

const LocationPicker = ({ onPickLocation }) => {

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [pickedLocation, setPickedLocation] = useState();

    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused();

    useEffect(() => {
        if( isFocused && route.params ) {
            const mapPickedLocation = route.params && { 
                lat: route.params.pickedLat,
                lng: route.params.pickedLng
            };

            setPickedLocation(mapPickedLocation);
        }
    }, [route, isFocused]);

    useEffect(() => {
        async function handlerLocation() {
            if(  pickedLocation ) {
                const address = await getAddress(pickedLocation.lat, pickedLocation.lng);
                onPickLocation({...pickedLocation, address: address});
            }
        }

        handlerLocation();
    }, [pickedLocation]);

    async function verifyPermissions() {
        switch(locationPermissionInformation.status) {
            case PermissionStatus.UNDETERMINED:
                const permissionResponse = await requestPermission();
                return permissionResponse.granted;
            case PermissionStatus.DENIED:
                Alert.alert(
                    'Insufficient Permissions!', 
                    'You need to grant Location permissions to use this app.'
                );
                return false;
            default:
                return true;
        }
    }

    async function getLocationHandler() {

        const hasPermission = await verifyPermissions();

        if( !hasPermission ) {
            reteurn;
        }

        const location = await getCurrentPositionAsync();
        setPickedLocation({
            lat: location.coords.longitude,
            lng: location.coords.latitude
        });
    }

    function pickOnMapHandler() {
        navigation.navigate('Map');
    }
    
    return(
        <View>
            <View style={styles.mapPreview}>
                {pickedLocation && <Image style={styles.image} source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}/>}
                {!pickedLocation && <Text>No location picked yet.</Text>}
            </View>
            <View style={styles.actions}>
                <OutlinedButton onPress={getLocationHandler} icon='location'>Locate User</OutlinedButton>
                <OutlinedButton onPress={pickOnMapHandler} icon='map'>Pick on Map</OutlinedButton>
            </View>
        </View>
    );
}

export default LocationPicker;