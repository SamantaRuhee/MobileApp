import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, ScrollView, ImageBackground } from "react-native";
import { Card } from "react-native-elements";
import PostCard from "./../Components/PostCard";

import { AuthContext } from "../Providers/AuthProvider";

import { getDataJSON, removeData } from "../Functions/AsyncStorageFunctions";
import { getAllComments, saveComment } from "../Functions/PostFunctions";
import { addNotifications } from "../Functions/NotificationFunctions";

import HeaderTop from "./../Components/HeaderTop";
import InputCard from "../Components/InputCard";

const PostScreen = (props) => {
    const postID = props.route.params.postId;
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState([]);


    const loadIndividualPost = async () => {
        let response = await getDataJSON(JSON.stringify(postID));
        if (response != null) {
            return response;
        }
    };

    const loadComments = async () => {
        setLoading(true);
        let response = await getAllComments();
        if (response != null) {
            setComments(response);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadIndividualPost().then((response) => {
            setPosts(JSON.parse(response));
        });
        loadComments();
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
                            <Card.Title>Post</Card.Title>
                            <PostCard
                                author={posts.name}
                                body={posts.post}
                            />
                        </Card>

                        <ScrollView>
                            <Card>
                                <Card.Title>Comments</Card.Title>
                                <FlatList
                                    data={comments}
                                    onRefresh={loadComments}
                                    refreshing={loading}
                                    renderItem={function ({ item }) {
                                        let data = JSON.parse(item);
                                        if (JSON.stringify(data.post) === JSON.stringify(postID)) {
                                            return (
                                                <View>
                                                    <PostCard
                                                        author={data.commenter}
                                                        body={data.comment}
                                                        removeFunc={async () => {
                                                            await removeData(JSON.stringify(data.commentId))
                                                            alert("Comment Deleted!");
                                                        }}
                                                    />
                                                </View>
                                            );
                                        }
                                    }
                                    }
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </Card>
                        </ScrollView>
                        <Card>
                            <InputCard
                                Text="Post a Comment"
                                currentFunc={setInput}
                                currentText={input}
                                pressFunction={async () => {
                                    saveComment(
                                        postID,
                                        posts.name,
                                        auth.CurrentUser.username + "-comment-" + Math.random().toString(36).substring(7),
                                        auth.CurrentUser.username,
                                        auth.CurrentUser.name,
                                        input)

                                    addNotifications(
                                        auth.CurrentUser.username + "-notification-" + Math.random().toString(36).substring(7),
                                        posts.name,
                                        auth.CurrentUser.name,
                                        "comment"
                                    )
                                }}
                            />
                        </Card>
          </View>
        )
    }
      </AuthContext.Consumer >
    );
  } else {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="red" animating={true} />
        </View>
    );
}
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "blue",
    },
    viewStyle: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default PostScreen;