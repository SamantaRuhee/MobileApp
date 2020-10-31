import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Text, Card, Button, Avatar, Header, Input } from "react-native-elements";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { AuthContext } from "../Provider/AuthProvider";
import { useNetInfo } from "@react-native-community/netinfo";

const PostScreen = (props) => {
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

return (
<AuthContext.Consumer>
{(auth) => (
    <View style={styles.viewStyle}>
        <Header
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
        <Card>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Avatar
                    containerStyle={{ backgroundColor: "#ffab91" }}
                    rounded
                    icon={{ name: "user", type: "font-awesome", color: "black" }}
                    activeOpacity={1}
                />
                <Text h4Style={{ padding: 10 }} h4>
                Ruhee
                </Text>
            </View>
            <Text style={{ fontStyle: "italic" }}> Biriyani</Text>
            <Text
                style={{
                    paddingVertical: 10,
                }}
            >
                Biriyani khabo. taka nai.
            </Text>
        </Card>
        <Card>
            <Input
              placeholder="Give a comment!"
              leftIcon={<Entypo name="pencil" size={24} color="black" />}
            />
            <Button title="Post" type="outline" onPress={function () { }} />
          </Card>
        <View >
            <Text>
                Pam Beesley Liked Your Post.
        </Text>
        </View>
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