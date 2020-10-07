import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ProfileScreen=()=>
{
    return(
        <View>
            <Image
                source={
                    require("./../../assets/pic.jpg")
                }
            />
            <Text style={Styles.textStyle}>
                Name:  X
                Student ID: 170042064
                Room No. : 410, FHR
                Email : samantaruhee31@gmail.com
            </Text>
        </View>
    )
};
const Styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'red',
            alignContent: "center",
        },
    }
);
export default ProfileScreen;