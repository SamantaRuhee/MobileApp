import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CourseScreen from './CourseScreen';

const SemesterScreen=(props)=>{
    return(
    <View style={Styles.viewStyle}>
        <TouchableOpacity 
        onPress={
            function () {
            props.navigation.navigate("Course List");
        }}>
            <Text style={Styles.textStyle}>1st semester</Text>
            <Text style={Styles.textStyle}>2nd semester</Text>
            <Text style={Styles.textStyle}>3rd semester</Text>
        </TouchableOpacity>
    </View>
    );

};

const Styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 50,
            color: "blue",
            marginVertical: 30,
        },
        viewStyle : {
            borderColor: "red",
            borderWidth: 5,
            fontSize: 20,
            backgroundColor: 'purple',
        }
    },
    
);

export default SemesterScreen;