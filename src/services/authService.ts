import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useMemo} from 'react';
import {ApiUrl} from '../styles/global';
import {storeUser} from './user';

async function Login(email: string, password: string) {
  return fetch(ApiUrl + '/users/user_login.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // TODO fix
      email: 'emileldahljensen@gmail.com',
      password: 'qqq',
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json.status == 200) {
        storeUser(json.content);
        return json.content;
      } else {
        return null;
      }
    })
    .catch(error => {
      console.error(error);
      return null;
    });
}

const LogOut = () => {
  AsyncStorage.removeItem('@user_session');
};

async function Register(email: string, password: string) {
  return fetch(ApiUrl + '/users/user_create.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(response => response.json())
    .then(json => {
      return json.status == 200; // 200 OK
    })
    .catch(error => {
      console.error(error);
      return false;
    });
}

const AuthContext = createContext(null);

export {Login, Register, LogOut, AuthContext};
