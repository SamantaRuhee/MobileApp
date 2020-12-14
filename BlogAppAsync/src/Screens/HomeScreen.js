import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, FlatList, ActivityIndicator, TextInput,} from "react-native";
import { Card,  Button,  Text,  Avatar,  Input,  Header,} from "react-native-elements";
import PostCard from "./../Components/PostCard";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../Providers/AuthProvider";
import { getPosts } from "./../Requests/Posts";
import {getUsers} from "./../Requests/Users";  
import HeaderHome from "../Components/HeaderHome";
import {storeDataJSON} from "../Functions/AsyncStorageFunctions";
import {getDataJSON} from "../Functions/AsyncStorageFunctions";

const HomeScreen = (props) => {
  const [posts, setPosts] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState("");

  const loadPosts = async () => {
    setLoading(true);
    const response = await getPosts();
    if (response.ok) {
      //setPosts(response.data);
    }
  };

  const loadUsers = async () => {
    const response = await getUsers();
    if (response.ok) {
      setUsers(response.data);
    }
    setLoading(false);
  };
  const getName = (id) => {
    let Name = "";
    users.forEach((element) => {
      if (element.id == id) Name = element.name;
    });
    return Name;
  };

  useEffect(() => {
    loadPosts();
    loadUsers();
  }, []);

  if (!loading) {
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
            
              <Input
                multiline
                placeholder="What's On Your Mind?"
                onChangeText={
                  function(currentInput){
                      setPosts(currentInput)
  
                  }
              }
                leftIcon={<Entypo name="pencil" size={24} color="black" />}
              />
              <Button title="Post" type="outline" onPress={function () {
                    let userPost = {
                      user: auth.CurrentUser.Email,
                      post: posts,
                    };
                    
                    setData({posts});
                    auth.CurrentUser.post=posts;
                    storeDataJSON(auth.CurrentUser.Email, auth.CurrentUser);
                    
                    
              }} />
            </Card>

            

            <FlatList
              data={posts}
              renderItem = {function ({item}){
                return (
                  
                  <PostCard
                    author={auth.CurrentUser.name}
                    title={item.title} 
                    body={auth.CurrentUser.post}
                    navigation={props.navigation}
                  />
                );
              }}
            />
          </View>
        )}
      </AuthContext.Consumer>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#338AFF" animating={true} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  buttonView: {
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 15,
  },

  inputStyle: {
    color: "white"
  }
});

export default HomeScreen;