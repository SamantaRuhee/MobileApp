import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ListScreen from './src/Screens/ListScreen';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer initialRoutineName="Home">
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Teachers List" component={ListScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;