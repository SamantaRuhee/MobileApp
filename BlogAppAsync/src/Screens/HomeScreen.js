import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { Card } from "react-native-elements";
import { useNetInfo } from "@react-native-community/netinfo";
import { getAllData, getDataJSON, storeDataJSON, removeData } from "../Functions/AsyncStorageFunctions";
import { AuthContext } from "../Providers/AuthProvider";
import { AsyncStorage } from "react-native-community/async-storage";
import PostCard from "./../Components/PostCard";
import HeaderHome from "./../Components/HeaderHome";

const getAllPosts = async () => {
    let keys = await getAllData();
    let allposts = [];
    try {
        if (keys != null) {
            for (let key of keys) {
                if (key.includes('post')) {
                    let post = await getDataJSON(key);
                    allposts.push(post);
                }
            }
            return allposts;
        }
    } catch (error) {
        alert(error);
    }
}
const savePost = async (username, name, postID, input) => {
    let currentPost = {
        username: username,
        name: name,
        postID: postID,
        post: input,
        likes: 0,
    };
    storeDataJSON(
        JSON.stringify(postID),
        JSON.stringify(currentPost)
    );

    alert("Post Saved!")
    let UserData = await getDataJSON(JSON.stringify(postID));
    console.log(UserData);
}

const getAllComments = async () => {
    let keys = await getAllData();
    let allComments = [];
    try {
        if (keys != null) {
            for (let key of keys) {
                if (key.includes('comment')) {
                    let comment = await getDataJSON(key);
                    allComments.push(comment);
                }
            }
            return allComments;
        }
    } catch (error) {
        alert(error);
    }
}

const saveComment = async (postID, postAuthor, commentID, commneterID, commenterName, input) => {

    let currentComment = {
        post: postID,
        reciever: postAuthor,
        commentId: commentID,
        commneterID: commneterID,
        commenter: commenterName,
        comment: input,
    };

    storeDataJSON(
        JSON.stringify(commentID),
        JSON.stringify(currentComment)
    );

    alert("Comment Saved!")
    let UserData = await getDataJSON(JSON.stringify(commentID));
    console.log(UserData);
}

const HomeScreen = (props) => {

    const netinfo = useNetInfo();
    if (netinfo.type != "unknown" && !netinfo.isInternetReachable) {
        alert("No Internet!");
    }

    const [posts, setPosts] = useState([]);
    const [postID, setpostID] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState([]);


    const loadPosts = async () => {
        setLoading(true);
        let response = await getAllPosts();
        if (response != null) {
            setPosts(response);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadPosts();
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
                                Text="What's On Your Mind?"
                                leftIcon={<Entypo name="pencil" size={24} color="black" />}
                                onChangeText={(currentText) => {
                                    setInput(currentText);
                                }}
                                pressFunction={async () => {
                                    setpostID([auth.CurrentUser.username + "-post-" + Math.random().toString(36).substring(7)]);
                                    savePost(
                                        auth.CurrentUser.username,
                                        auth.CurrentUser.name,
                                        postID,
                                        input
                                    )
                                }}
                            />
                            <Button title="Post" type="outline" onPress={props.pressFunction} />
                        </Card>
                        <FlatList
                            data={posts}
                            onRefresh={loadPosts}
                            refreshing={loading}
                            renderItem={function ({ item }) {
                                let data = JSON.parse(item)
                                return (
                                    <View>
                                        <Card>
                                            <PostCard
                                                author={data.name}
                                                body={data.post}
                                                removeFunc={async () => {
                                                    await removeData(JSON.stringify(data.postID))
                                                    alert("Post Deleted!");
                                                }}
                                            />
                                            <Card.Divider />
                                        </Card>
                                    </View>
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                )}
            </AuthContext.Consumer>
        );
    } else {
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator size="large" color="black" animating={true} />
            </View>
        );
    }
};


export default HomeScreen;