import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';

const stack = createStackNavigator();

const HomeStackScreen = () => {
  return(
    <HomeStackScreen.Navigator>
    <HomeStackScreen.Screen name ='Home' component={HomeScreen}/>
    </HomeStackScreen.Navigator>
  );
};

function App(){
  return(
    <NavigationContainer>
      <HomeStackScreen/>
    </NavigationContainer>
  );
};

export default App;