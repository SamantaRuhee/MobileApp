import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./src/Navigation/AuthStack";
import AppDrawerScreen from "./src/Navigation/AppDrawer";
import { AuthContext, AuthProvider } from "./src/Provider/AuthProvider";
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA9GcsY0SmHJrGigZhwCR9LwwGt3NqesxY",
  authDomain: "blogapp-r64.firebaseapp.com",
  databaseURL: "https://blogapp-r64.firebaseio.com",
  projectId: "blogapp-r64",
  storageBucket: "blogapp-r64.appspot.com",
  messagingSenderId: "987530779396",
  appId: "1:987530779396:web:688d8d5e0744433c530e51"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);}




function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;