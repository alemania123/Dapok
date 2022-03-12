import * as React from 'react'; 
import {NavigationContainer} from '@react-navigation/native'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens 
import FolderScreen from '../components/screens/FolderScreen.js'
import HomeScreens from '../components/screens/HomeScreens.js'
import ProfileScreen from '../components/screens/ProfileScreen.js'

//Screen names
const homeName = 'Home'; 
const profileName = 'Profile'
const folderName = 'Folder'; 

const Tab = createBottomTabNavigator(); 

export default function MainContainer() { 
    return(
        <NavigationContainer>
            <Tab.Navigator  initialRouteName={homeName}
                screenOptions = {({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName; 
                        let rn = route.name; 

                        if(rn === homeName) {
                            iconName = focused ? 'home': 'home-outline'
                        } else if (rn === folderName) {
                            iconName = focused ? 'folder': 'folder-outline'
                        }
                        else if (rn === profileName){
                            iconName = focused ? 'person': 'person'
                        }
                         
                        return <Ionicons name = {iconName} size={size} color = {color}/>
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#1F465B', 
                    inactiveTintColor: 'grey', 
                    labelStyle: {paddingBottom: 10, fontSize:10 }, 
                    style: {padding:10, height: 70}
                }}
                
                >
                    <Tab.Screen name = {homeName} component = {HomeScreens}/>
                    <Tab.Screen name = {folderName} component = {FolderScreen}/>
                    <Tab.Screen name = {profileName} component = {ProfileScreen}/>
               
            </Tab.Navigator>

        </NavigationContainer>
    ); 
}