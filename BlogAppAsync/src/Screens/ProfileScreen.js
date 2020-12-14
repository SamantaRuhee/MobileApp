import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import HeaderHome from "../Components/HeaderHome";
import { AntDesign, Entypo } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { AuthContext } from "../Providers/AuthProvider";

import { deleteUserInfo } from "../Functions/ProfileFunctions";
import { clearAllData } from "../Functions/AsyncStorageFunctions";

const ProfileScreen = (props) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <HeaderHome
            DrawerFunction={() => {
              props.navigation.toggleDrawer();
            }}
          />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
            <Button title="Select Image from Gallery" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>
          <Card style={{flex: 1,justifyContent: 'center'}}>
            <Text style={styles.textStyle}>Name:{auth.CurrentUser.name}</Text>
            <Text style={styles.textStyle}>Student ID:{auth.CurrentUser.sid}</Text>
            <Text style={styles.textStyle}>Mail:</Text>
          </Card>
          <Button
              buttonStyle={{ backgroundColor: '#e02f2f' }}
              containerStyle={{ width: 150, marginLeft: 120, marginRight: 10, marginTop: 15 }}
              titleStyle={{ marginLeft: 5 }}
              title="Delete User"
              type='solid'
              alignSelf='center'
              icon={<AntDesign name="deleteuser" size={24} color="white" />}
              onPress={async () => {
                //clearAllData();
                deleteUserInfo(auth.CurrentUser.username);
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
              }}
            />
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    alignContent: "center",
  },
  viewStyle: {
    flex: 1,
  },
});

export default ProfileScreen;