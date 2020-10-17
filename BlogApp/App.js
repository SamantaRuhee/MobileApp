import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import HomeScreen from './src/Screens/HomeScreen';

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStackScreen.Navigator>
      <HomeStackScreen.Screen name='Home' component={HomeScreen} />
    </HomeStackScreen.Navigator>
  );
};

const AuthStackScreen = () => {
  return (<AuthStack.Navigator>
    <AuthStack.Screen name='SignIn' component={SignInScreen} options={{headerShown:false}} />
    <AuthStack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false}} />
  </AuthStack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <AuthStackScreen />
      {/* <HomeStackScreen/>*/}
    </NavigationContainer>
  );
};

export default App;