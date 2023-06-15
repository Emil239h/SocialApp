import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginForm from '../../components/login/loginForm';
import RegisterForm from '../../components/login/registerForm';

export default function LoginScreen({route}: any) {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <View style={styles.container}>
      {isLoginForm ? (
        <LoginForm route={route} swapForm={setIsLoginForm} />
      ) : (
        <RegisterForm route={route} swapForm={setIsLoginForm} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
