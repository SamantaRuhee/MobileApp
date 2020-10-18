import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../Provider/AuthProvider';
import { Button } from 'react-native-elements';

const HomeScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth)=>(<View style={Styles.viewstyle}>
                <Text>Welcome to home</Text>
                <Button
                type='outline'
                title='log out'
                onPress={function(){
                    auth.setIsLoggedIn(false);
                }}
                />
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
        profiletext: {
            fontSize: 50,
            alignSelf: "center",
            alignContent: "center",
        },
        imageStyle: {
            height: 200,
            width: 200,
            alignSelf: "center",
            alignContent: "center",
        },
        viewstyle: {
            backgroundColor: '#ADD8E6',
        }
    }
);

export default HomeScreen;