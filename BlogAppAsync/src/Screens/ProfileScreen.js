import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { Text, Card, Button, Image } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import { AntDesign } from '@expo/vector-icons';
import HeaderHome from "../Components/HeaderHome";
import { getAllPosts } from "../Functions/PostFunctions";
import PostCard from "./../Components/PostCard";
import LikeCommentButton from "../Components/LikeCommentButton";
import { deleteUserInfo } from "../Functions/ProfileFunctions";
import { clearAllData } from "../functions/AsyncStorageFunctions";

const ProfileScreen = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    setLoading(true)
    let response = await getAllPosts();
    if (response != null) {
      setPosts(response);
    }
    setLoading(false)
  };

  useEffect(() => {
    loadPosts();
  }, []);

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
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 32 }}>
                  {auth.CurrentUser.name}
                </Text>
              </View>
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
            <Card>
              <View>
                <Text style={{ alignSelf: "center", fontSize: 18 }}>
                  Name: Rokeya Samanta Ruhee{"\n"}
                  Student ID: 170042064 {"\n"}
                  ultra pro max super lite introvert!!!! 
              </Text>
              </View>
            </Card>
            <FlatList
              data={posts}
              onRefresh={loadPosts}
              refreshing={loading}
              renderItem={function ({ item }) {
                let data = JSON.parse(item)
                if (JSON.stringify(data.username) === JSON.stringify(auth.CurrentUser.username)) {
                  return (
                    <View>
                      <Card>
                        <PostCard
                          author={data.name}
                          body={data.post}
                        />
                        <Card.Divider />
                        <LikeCommentButton
                          postID={data.postID}
                          likes={data.likes}
                          navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                              postId: data.postID,
                            });
                          }}
                        />
                      </Card>
                    </View>
                  );
                }
              }}
              keyExtractor={(item, index) => index.toString()}
            />
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

export default ProfileScreen;