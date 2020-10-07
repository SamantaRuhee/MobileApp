import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const SemesterScreen=()=>{
    const sem=[
        {name:"1st semester", key: "1"},
        {name:"2nd semester", key: "2"},
        {name:"3rd semester", key: "3"},
        {name:"4th semester", key: "4"},
        {name:"5th semester", key: "5"},
    ];
    return(
        <View style={Styles.viewStyle}>
        <FlatList
        data={sem}
        renderItem={function( {item}){
            return(<Text style={Styles.textStyle}>{item.name}</Text>);
        }}
        />
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