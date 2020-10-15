import React from 'react';
import {Text, StyleSheet, Button, View, Image} from 'react-native';

const HomeScreen = (props)=>{
    return(<View style={Styles.viewstyle}>
    <Text>Welcome to the app</Text>
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
        viewstyle:{
            color:'white',
        }
    }
);

export default HomeScreen;