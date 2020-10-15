import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer initialRoutineName="Home">
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Login" component={LoginScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;