import React from 'react';
import {Text, StyleSheet, Button, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props)=>{
    console.log(props);
    return(<View style={Styles.viewstyle}>
    <Image
        style={Styles.imageStyle}
        source={
        require("./../../assets/iutlogo.jpg")}
    />
    <Text style={Styles.textStyle}>Department of CSE</Text>
    <Text style={Styles.textStyle}>Programme: SWE</Text>
    <TouchableOpacity 
    onPress={
        function () {
        props.navigation.navigate("Profile");
    }}
    >
        <Text style={Styles.profiletext}>My Profile</Text>
    </TouchableOpacity>
    <Button 
    title='Semester wise course List'
    onPress={
        function () {
        props.navigation.navigate("Semester");
    }}
    />
    <Button 
    style={Styles.buttonstyle}
    title='List of faculty Members'
    onPress={
        function () {
        props.navigation.navigate("Teachers List");
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