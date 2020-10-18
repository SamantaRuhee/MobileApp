import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import HomeScreen from './src/Screens/HomeScreen';

import { AuthContext, AuthProvider } from './src/Provider/AuthProvider';

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name='Home' component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const AuthStackScreen = () => {
  return (<AuthStack.Navigator initialRouteName='SignIn'>
    <AuthStack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
  </AuthStack.Navigator>
  );
};

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth)=>(<NavigationContainer>
          {auth.IsLoggedIn ? <HomeStackScreen/> : <AuthStackScreen/>}
        </NavigationContainer>)}
      </AuthContext.Consumer>
    </AuthProvider>
  );
};

export default App;