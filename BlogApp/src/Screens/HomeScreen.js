import React from 'react';
import {Text, StyleSheet, Button, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props)=>{
    console.log(props);
    return(<View style={Styles.viewstyle}>
    <Button 
    title='input'
    onPress={
        function () {
        props.navigation.navigate("Login");
    }}
    />
    </View>
    );
};

const Styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'blue',
            alignContent: "center",
            alignSelf: "center",
        },
        profiletext:{
            fontSize: 50,
            alignSelf : "center",
            alignContent: "center",
        },
        imageStyle:{
            height: 200,
            width : 200,
            alignSelf : "center",
            alignContent : "center",
        },
        viewstyle:{
            backgroundColor : '#ADD8E6',
        }
    }
);

export default HomeScreen;