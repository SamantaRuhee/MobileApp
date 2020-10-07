import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const CourseScreen= () =>{
    const course=[
        {name:"cse 1001", key: "1"},
        {name:"swe 1010", key: "2"},
        {name:"cse 1011", key: "3"},
        {name:"cse 1000", key: "4"},
        {name:"swe 1100", key: "5"},
    ];
    return(
        <View style={Styles.viewStyle}>
        <FlatList
        data={course}
        renderItem={function( {item}){
            return(<Text style={Styles.textStyle}>{item.name}</Text>);
        }}
        />
        </View>
    );
}

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

export default CourseScreen;