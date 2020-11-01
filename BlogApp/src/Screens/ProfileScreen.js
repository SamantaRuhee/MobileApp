import React, { useState, useEffect } from "react";
import { View, StyleSheet, AsyncStorage, Image, Platform } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import HeaderHome from "../Components/HeaderHome";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { AuthContext } from "../Provider/AuthProvider";

const ProfileScreen = (props) => {
  const [image, setImage] = useState(null);

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
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Select Image from Gallery" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>
          <Text style={styles.textStyle}>Name:  Ruhee</Text>
          <Text style={styles.textStyle}>Student ID: 170042064</Text>
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
  textStyle: {
    fontSize: 30,
    color: 'blue',
    alignContent: "center",
  },
  viewStyle: {
    flex: 1,
  },
});

export default ProfileScreen;