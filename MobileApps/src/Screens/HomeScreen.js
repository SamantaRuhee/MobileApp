import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const HomeScreen = (props)=>{
    console.log(props);
    return(<View>
    <Text style={Styles.textStyle}>Hi there!</Text>
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