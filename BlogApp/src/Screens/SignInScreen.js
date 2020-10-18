import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Switch } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { Entypo, } from '@expo/vector-icons';
import { AuthContext } from '../Provider/AuthProvider';

const SignInScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (<View style={Styles.viewstyle}>
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
                        title='SignIn'
                        type='clear'
                        onPress={
                            function () {
                                auth.setIsLoggedIn(true);
                            }}
                    />
                    <Button
                        icon={<Entypo name="mobile" size={24} color="black" />}
                        title="Don't have an account?"
                        type='clear'
                        onPress={
                            function () {
                                props.navigation.navigate("SignUp");
                            }}
                    />
                </Card>
            </View>)}
        </AuthContext.Consumer>
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

export default SignInScreen;