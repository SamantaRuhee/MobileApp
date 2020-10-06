import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ListScreen= () =>{
    const teacher="Tasnim vai";
    const teacher1="Sabbir sir";
    const teacher2="Toma mam";
    const teacher3="Mohayemin sir";
    const teacher4="Ashraf sir";
    return(
        <View>
            <Text style={Styles.textStyles}>{teacher}</Text>
            <Text style={Styles.textStyles}>{teacher1}</Text>
            <Text style={Styles.textStyles}>{teacher2}</Text>
            <Text style={Styles.textStyles}>{teacher3}</Text>
            <Text style={Styles.textStyles}>{teacher4}</Text>
        </View>
    );
}

const Styles = StyleSheet.create(
    {
        testStyle:{
            fontSize: 30,
            color: 'blue',
        },
        viewStyle : {
            backgroundColor: 'purple',
        }
    },
    
);

export default ListScreen;