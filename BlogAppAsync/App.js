import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer initialRoutineName="SignInScreen">
      <stack.Navigator>
        <stack.Screen name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}/>
        <stack.Screen name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;