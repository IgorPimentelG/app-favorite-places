import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from '../pages/AllPages';
import AddPlace from '../pages/AddPlace';
import PlaceDetails from '../pages/PlaceDetails';
import IconButton from '../components/UI/IconButton';
import { Colors } from '../constants/colors';
import Map from '../pages/Map';

const Routes = () => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: Colors.gray700,
                contentStyle: { backgroundColor: Colors.gray700}
            }}>
                <Stack.Screen 
                    name='AllPlaces' 
                    component={AllPlaces}
                    options={({ navigation }) => ({
                        title: 'Your Favorite Place',
                        headerRight: ({ tintColor }) => (
                            <IconButton 
                                icon={'add'} 
                                color={tintColor} 
                                size={24} 
                                onPress={() => navigation.navigate('AddPlace')}
                            />
                        )
                    })}
                />
                <Stack.Screen 
                    name='AddPlace' 
                    component={AddPlace}
                    options={{
                        title: 'Add a new Place'
                    }}
                />
                <Stack.Screen
                    name='PlaceDetails'
                    component={PlaceDetails}
                />
                 <Stack.Screen
                    name='Map'
                    component={Map}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default Routes;