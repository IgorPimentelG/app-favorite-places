import { View, Image, Text, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import OutlinedButton from '../../UI/OutlinedButton';

const ImagePicker = ({ onTakeImage }) => {

    const [cameraPermisionInformation, requestPermission] = useCameraPermissions();
    const [pickedImage, setPickedImage] = useState();

    async function verifyPermissions() {

        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        switch(status) {
            case 'granted': 
                return true;
            case 'denied':
                Alert.alert(
                    'Insufficient Permissions!', 
                    'You need to grant camera permissions to use this app.'
                );
                return false;
            default: 
                return false;
        }
    }

    async function takeImageHandler() {

        const hasPermission = await verifyPermissions();

        console.log(hasPermission);
        if( !hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        setPickedImage(image.uri);
        onTakeImage(image.uri);
    }

    return(
        <View>
            <View style={styles.imagePreview}>
                {pickedImage && <Image style={styles.image} source={{ uri: pickedImage }}/>}
                {!pickedImage && <Text>No image taken yet</Text>}
            </View>
            <OutlinedButton onPress={takeImageHandler} icon={'camera'}>
                Take Image
            </OutlinedButton>
        </View>
    );
}

export default ImagePicker;