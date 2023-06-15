import AsyncStorage from '@react-native-async-storage/async-storage';
import {ApiUrl} from '../styles/global';

interface User {
  token: string;
  email?: string;
  name?: string;
  phone?: string;
  session: string;
  session_exp: Date;
}

const storeUser = async (user: User) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@user_session', jsonValue);
  } catch (e) {
    console.error('unable to store user');
  }
};

const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem('@user_session');
    if (value !== null) {
      return value != null ? JSON.parse(value) : null;
    }
  } catch (e) {
    console.error('unable to get user');
  }
};

async function editUser(user: User) {
  return fetch(ApiUrl + '/users/user_update.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: user.token,
      session: user.session,
      phone: user.phone,
      name: user.name,
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json.status == 200) {
        storeUser(user);
        return true;
      }
      return false;
    })
    .catch(() => {
      console.error('unable to update user');
      return false;
    });
}

export {getUser, storeUser, editUser};
export type {User};
