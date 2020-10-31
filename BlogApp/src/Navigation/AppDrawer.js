import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTabScreen from "./../Navigation/HomeTab";
import PostStackScreen from "./PostStack";
import ProfileScreen from "./../Screens/ProfileScreen";
import PostStackScreen from "../Screens/PostScreen";

const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Home" component={HomeTabScreen} />
      <AppDrawer.Screen name="Profile" component={ProfileScreen} />
    </AppDrawer.Navigator>
  );
};

export default AppDrawerScreen;