import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CourseScreen1 from './CourseScreen1';
import CourseScreen2 from './CourseScreen2';
import CourseScreen3 from './CourseScreen3';

const SemesterScreen=(props)=>{
    return(
    <View style={Styles.viewStyle}>
        <TouchableOpacity 
        onPress={
            function () {
            props.navigation.navigate("Course List1");
        }}>
            <Text style={Styles.textStyle}>1st semester</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={
            function () {
            props.navigation.navigate("Course List2");
        }}>
            <Text style={Styles.textStyle}>2nd semester</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={
            function () {
            props.navigation.navigate("Course List3");
        }}>
            <Text style={Styles.textStyle}>3rd semester</Text>
        </TouchableOpacity>
    </View>
    );

};

const Styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 50,
            color: 'black',
            marginVertical: 30,
        },
        viewStyle : {
            borderColor: 'black',
            borderWidth: 5,
            fontSize: 20,
            backgroundColor: '#ADD8E6',
        }
    },
    
);

export default SemesterScreen;