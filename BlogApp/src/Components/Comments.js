import React from "react";
import { View } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import PostStackScreen from "./../Screens/PostScreen";

const comments = (props) => {
    return(
        <Text style={styles.textStyle}>Hello</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30,
      color: "blue",
    },
    viewStyle: {
      flex: 1,
    },
  });
  
export default comments;