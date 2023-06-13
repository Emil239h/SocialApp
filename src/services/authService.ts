import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useMemo} from 'react';

interface User {
  token: string;
  session: string;
  session_timeout: Date;
}

const storeUser = async (user: User) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@user_session', jsonValue);
  } catch (e) {
    // TODO lav en catch
  }
};

const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem('@user_session');
    if (value !== null) {
      return value != null ? JSON.parse(value) : null;
    }
  } catch (e) {
    // TODO lav en catch
  }
};

let userToken = null;

const setUserToken = (newVal: string | null) => {
  userToken = newVal;
};

const Login = () => {
  let timeout = new Date();
  timeout.setMonth(12);

  storeUser({
    token: 'tset_token',
    session: 'test_session',
    session_timeout: timeout,
  });
  return true;
};

const Register = () => {
  return true;
};

const AuthContext = createContext(null);

export {getUser, storeUser, userToken, setUserToken, AuthContext};
