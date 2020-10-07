import React from 'react';
import {Text, StyleSheet, Button, View, Image, TouchableOpacity} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props)=>{
    console.log(props);
    return(<View>
    <Image
        source={
        require("./../../assets/iutlogo.jpg")}
    />
    <Text style={Styles.textStyle}>Department of CSE<br></br></Text>
    <TouchableOpacity 
    onPress={
        function () {
        props.navigation.navigate("Profile");
    }}
    >
        <Text>My Profile</Text>
    </TouchableOpacity>
    <Button 
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
        },
    }
);

export default HomeScreen;