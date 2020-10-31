import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Switch } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { Entypo, } from '@expo/vector-icons';
import {storeDataJSON} from '../Functions/AsyncStorageFunctions';
import { firebase } from '../../Fire'

const SignUpScreen = (props) => {
    const [Name, setName] = useState("");
    const [SID, setSID] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");



    return (<View style={Styles.viewstyle}>
        <Card>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider />
            <Input
            leftIcon={<Entypo name="mail-with-circle" size={24} color="black" />}
            placeholder='Name'
            onChangeText={function (currentInput){
                setName(currentInput);
            }}
            />
            <Input
            leftIcon={<Entypo name="mobile" size={24} color="black" />}
            placeholder='Student ID'
            onChangeText={function (currentInput){
                setSID(currentInput);
            }}
            />
            <Input
            leftIcon={<Entypo name="mail-with-circle" size={24} color="black" />}
            placeholder='E-mail Address'
            onChangeText={function (currentInput){
                setEmail(currentInput);
            }}
            />
            <Input
            leftIcon={<Entypo name="lock" size={24} color="black" />}
            placeholder='Password'
            onChangeText={function (currentInput){
                setPassword(currentInput);
            }}
            secureTextEntry={true}
            />
            <Button
            icon={<Entypo name="mobile" size={24} color="black" />}
            title='SignUp and auto-login'
            type='clear'
            onPress={
                function () {
                   let currentUser= {
                       name: Name,
                       sid: SID,
                       email: Email,
                       password: Password,
                   };
                   storeDataJSON(Email, currentUser);
                   props.navigation.navigate('SignIn');
                }}
            />
            <Button
            icon={<Entypo name="mobile" size={24} color="black" />}
            title="Already have an account?"
            type='clear'
            onPress={
                function () {
                    props.navigation.navigate("SignIn");
                }}
            />
        </Card>
    </View>
    );
};

const Styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            color: 'blue',
            alignContent: "center",
            alignSelf: "center",
        },
        viewstyle: {
            backgroundColor: '#FFDF00',
            flex: 1,
            justifyContent: 'center',
        }
    }
);

export default SignUpScreen;