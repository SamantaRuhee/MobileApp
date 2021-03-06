import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ProfileScreen=()=>
{
    return(
        <View>
            <Image
                style={Styles.imageStyle}
                source={
                    require("./../../assets/profile.jpg")
                }
            />
            <Text style={Styles.textStyle}>Name:  Ruhee</Text>
            <Text style={Styles.textStyle}>Student ID: 170042064</Text>    
            <Text style={Styles.textStyle}>Room No. : 410, FHR</Text>    
            <Text style={Styles.textStyle}>Email : samantaruhee31@gmail.com</Text>    
            
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
        imageStyle:{
            height: 200,
            width : 200,
            alignSelf : "center",
            alignContent : "center",
        },
    }
);
export default ProfileScreen;