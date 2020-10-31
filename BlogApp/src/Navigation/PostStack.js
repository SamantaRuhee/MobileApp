import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "./../Screens/PostScreen" ;
import HomeScreen from "./../Screens/HomeScreen";

const PostStack = createStackNavigator();
const PostStackScreen = () => {
  return (
    <PostStack.Navigator initialRouteName="Home">
      <PostStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <PostStack.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: false }}
      />
    </PostStack.Navigator>
  );
};

export default PostStackScreen;