import React, {useState} from 'react';
import {Text, StyleSheet, Button, View, TextInput, Switch} from 'react-native';

const LoginScreen = (props)=>{
    let [username, setusername]= useState('');
    let [isEnabled, setisEnabled] = useState(false);
   return(
       <View>
           <Text style={Styles.textStyle}>{username}</Text>
           <TextInput 
           placeholder='username'
           style= {Styles.inputStyle}
           onChangeText={function(currentInput){
               setusername(currentInput);
           }}
           onSubmitEditing={function(){
               console.log(username);
           }}
           />
           <Switch
           value={isEnabled}
           onValueChange = {function(){
                if(isEnabled===true){
                    setisEnabled(false);
                }
                else{
                    setisEnabled(true);
                }
                console.log(isEnabled);
           }}
           />
       </View>
   )
};

const Styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'blue',
            alignContent: "center",
            alignSelf: "center",
        },
        inputStyle:{
            borderColor: '#808000',
            borderWidth : 2,
            margin: 10,
            padding: 5,
        },
    }
);

export default LoginScreen;