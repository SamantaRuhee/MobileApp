import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Switch } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { Entypo, } from '@expo/vector-icons';
import { AuthContext } from '../Provider/AuthProvider';
import {getDataJSON} from '../Functions/AsyncStorageFunctions';

const SignInScreen = (props) => {
    
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (
        <AuthContext.Consumer>
            {(auth) => (<View style={Styles.viewstyle}>
                <Card>
                    <Card.Title>CARD WITH DIVIDER</Card.Title>
                    <Card.Divider />
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
                        title='SignIn'
                        type='clear'
                        onPress={
                            async function () {
                                let UserData = await getDataJSON(Email);
                                if(UserData.password==Password){
                                    auth.setIsLoggedIn(true);
                                    auth.setCurrentUser(UserData);
                                }else{
                                    alert("Login Failed!");
                                    console.log(UserData);
                                }
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