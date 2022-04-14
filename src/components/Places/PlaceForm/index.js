import { ScrollView, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import ImagePicker from '../ImagePicker';
import LocationPicker from '../LocationPicker';
import Button from '../../UI/Button';
import { Place } from '../../../../models/place';

const PlaceForm = ({ onCreatePlace }) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [pickedLocation, setPickedLocation] = useState();

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText);
    }

    function takeImageHandler(imageUri) {
        setSelectedImage(imageUri);
    }

    function pickLocationHandler(location) {
        setPickedLocation(location);
    }

    function savePlaceHandler() {
         const placeData = new Place(
            enteredTitle,
            selectedImage,
            pickedLocation
        );
        onCreatePlace(placeData); 
    }

    return(
       <ScrollView style={styles.form}>
           <View style={styles.container}>
                <View>
                    <Text style={styles.label}> Title:</Text>
                    <TextInput style={styles.input}  onChangeText={changeTitleHandler} value={enteredTitle}/>
                </View>
                <ImagePicker onTakeImage={takeImageHandler}/>
                <LocationPicker onPickLocation={pickLocationHandler}/>
                <Button onPress={savePlaceHandler}>Add place</Button>
           </View>
       </ScrollView>
    );
}

export default PlaceForm;