import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';
import LoginForm from '../../components/login/loginForm';
import RegisterForm from '../../components/login/registerForm';

export default function LoginScreen({route} : any) {

    let isLoginForm = true;

    const swapFormHandler = () => {
        isLoginForm = !isLoginForm;
    }
    return (
        <ScrollView>
            {isLoginForm ? (
                <LoginForm route={route} swapForm={swapFormHandler}/>
            ) : (
                <RegisterForm/>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 50,
    },
    link:{
        color: 'blue'
    },
    container: {
        marginTop: 50,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
  });
  