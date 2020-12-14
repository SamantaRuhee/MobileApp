import React,{useState} from "react";
import {StyleSheet, View} from "react-native";
import {Input, Button,Avatar,Text, Card} from "react-native-elements";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../Providers/AuthProvider";
import {storeDataJSON} from "../Functions/AsyncStorageFunctions";
import HeaderHome from "../Components/HeaderHome";



const PostScreen = (props) => {
    return (
      <AuthContext.Consumer>
        {(auth) => (
          <View style={styles.viewStyle}>
            <HeaderHome
            DrawerFunction={() => {
              props.navigation.toggleDrawer();
            }}
          />
            <Card>
              <View style={{ flexDirection: "row", alignItems: "center",
                justifyContent: 'center',
            }}>
                <Avatar
                  size="large"
                  containerStyle={{ backgroundColor: "#ffab91" }}
                  rounded
                  icon={{ name: "user", type: "font-awesome", color: "black" }}
                  activeOpacity={1}
                />
                
              </View>
              <Text style={{ paddingHorizontal: 10,paddingBottom:2 ,marginTop:10,size:20,textAlign:"center" }}>
                {auth.CurrentUser.name}
                </Text>
                <Text style={{ paddingHorizontal: 10,paddingBottom:2 ,marginTop:0,size:20,textAlign:"center"  }}>
                  Date : 9 February 1990
                </Text>
                <Text style={{ paddingHorizontal: 10,paddingBottom:2 ,marginTop:0,size:20,textAlign:"center" }}>
                {auth.CurrentUser.post}
                </Text>
            </Card>
          </View>
        )}
      </AuthContext.Consumer>
    );
  };
  
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30,
      color: "blue",
    },
    viewStyle: {
      flex: 1,
    },
  });
  
  export default PostScreen;