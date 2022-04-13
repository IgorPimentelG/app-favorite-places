import { View, Button, Image, Text } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import OutlinedButton from '../../UI/OutlinedButton';

const ImagePicker = () => {

    const [cameraPermisionInformation, requestPermission] = useCameraPermissions();
    const [pickedImage, setPickedImage] = useState();

    async function verifyPermissions() {

        switch(cameraPermisionInformation.status) {
            case PermissionStatus.UNDETERMINED: 
                const permissionResponse = await requestPermission();
                return permissionResponse.granted;
            case PermissionStatus.DENIED:
                Alert.alert(
                    'Insufficient Permissions!', 
                    'You need to grant camera permissions to use this app.'
                );
                return false;
            default: 
                return true;
        }
    }

    async function takeImageHandler() {

        const hasPermission = await verifyPermissions();

        if( !hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        setPickedImage(image.uri);
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