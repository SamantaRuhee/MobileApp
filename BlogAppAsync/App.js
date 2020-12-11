import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./src/Navigation/AuthStack";
import AppDrawerScreen from "./src/Navigation/AppDrawer";
import { AuthContext, AuthProvider } from "./src/Provider/AuthProvider";


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