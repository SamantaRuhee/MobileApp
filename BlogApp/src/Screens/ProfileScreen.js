import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../Provider/AuthProvider";
import {getDataJSON} from '../Functions/AsyncStorageFunctions';



const ProfileScreen = (props) => {
  const [Email, setEmail] = useState("");
  const [CurrentUser, setCurrentUser] = useState({});
  const [SID, setSID] = useState("");
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <Header
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: function () {
                props.navigation.toggleDrawer();
              },
            }}
            centerComponent={{ text: "The Office", style: { color: "#fff" } }}
            rightComponent={{
              icon: "lock-outline",
              color: "#fff",
              onPress: function () {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              },
            }}
          />
          let UserData = await getDataJSON({Email});
          let UserData = await getDataJSON({Name});
          let UserData = await getDataJSON({SID});

          <Text style={styles.textStyle} >Name:  getDataJSON(CurrentUser)</Text>
          <Text style={styles.textStyle}>Student ID: UserData.SID </Text>
          <Text style={styles.textStyle}>Room No. : 410, FHR</Text>
          <Text style={styles.textStyle}>Email : samantaruhee31@gmail.com</Text>
          <Card>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar
                containerStyle={{ backgroundColor: "cyan" }}
                rounded
                icon={{
                  name: "thumbs-o-up",
                  type: "font-awesome",
                  color: "black",
                }}
                activeOpacity={1}
              />
              <Text style={{ paddingHorizontal: 10 }}>
                {auth.CurrentUser.name} Liked Your Post.
              </Text>
            </View>
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 30,
    color: 'blue',
    alignContent: "center",
},
  viewStyle: {
    flex: 1,
  },
});

export default ProfileScreen;