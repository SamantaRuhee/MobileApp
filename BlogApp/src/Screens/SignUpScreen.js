import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Switch } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { Entypo, } from '@expo/vector-icons';

const SignUpScreen = (props) => {
    return (<View style={Styles.viewstyle}>
        <Card>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider />
            <Input
            leftIcon={<Entypo name="mail-with-circle" size={24} color="black" />}
            placeholder='E-mail Address'
            />
            <Input
            leftIcon={<Entypo name="lock" size={24} color="black" />}
            placeholder='Password'
            secureTextEntry={true}
            />
            <Button
            icon={<Entypo name="mobile" size={24} color="black" />}
            title='SignUp and auto-login'
            type='clear'
            onPress={
                function () {
                    props.navigation.navigate("Home");
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