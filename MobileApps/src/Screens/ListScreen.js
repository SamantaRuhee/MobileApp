import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen= () =>{
    const teacher=[
        {name:"Sabbir sir", key: "1"},
        {name:"Tasnim vai", key: "2"},
        {name:"Toma mam", key: "3"},
        {name:"Mohayemin sir", key: "4"},
        {name:"Ashraf sir", key: "5"},
        {name:"Faisal Hussain sir", key: "6"},
        {name:"Sadia Sharmin mam", key: "7"},
    ];
    return(
        <View style={Styles.viewStyle}>
        <FlatList
        data={teacher}
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
            fontSize: 25,
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

export default ListScreen;