import { ScrollView, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import ImagePicker from '../ImagePicker';
import LocationPicker from '../LocationPicker';

const PlaceForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText);
    }

    return(
       <ScrollView style={styles.form}>
           <View>
               <Text style={styles.label}> Title:</Text>
               <TextInput style={styles.input}  onChangeText={changeTitleHandler} value={enteredTitle}/>
           </View>
           <ImagePicker/>
           <LocationPicker/>
       </ScrollView>
    );
}

export default PlaceForm;