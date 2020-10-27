import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Card, Button, Text, Avatar, Input } from "react-native-elements";
import PostCard from "./../Components/PostCard";
import HeaderHome from "../Components/HeaderHome";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../Provider/AuthProvider";
import { getPosts } from "./../Requests/Posts";
import { getUsers } from "./../Requests/Users";
import { useNetInfo } from "@react-native-community/netinfo";

const HomeScreen = (props) => {
  const netinfo = useNetInfo();
  if (netinfo.type != "unknown" && !netinfo.isInternetReachable) {
    alert("No Internet!");
  }
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    setLoading(true);

    const response = await getPosts();
    if (response.ok) {
      setPosts(response.data);
    } else {
      alert(response.problem);
    }
  };
  const loadUsers = async () => {
    const response = await getUsers();
    if (response.ok) {
      setUsers(response.data);
    } else {
      alert(response.problem);
    }
    setLoading(false);
  };
  const getName = (id) => {
    let name = "";
    users.forEach((element) => {
      if (element.id == id) {
        name = element.name;
      }
    });
    return name;
  };

  useEffect(() => {
    loadPosts();
    loadUsers();
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
            <Input
              placeholder="What's On Your Mind?"
              leftIcon={<Entypo name="pencil" size={24} color="black" />}
            />
            <Button title="Post" type="outline" onPress={function () { }} />
          </Card>
          <ActivityIndicator size="large" color="red" animating={loading} />

          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
                <PostCard
                  author={getName(item.userId)}
                  title={item.title}
                  body={item.body}
                />
              );
            }}
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

export default HomeScreen;