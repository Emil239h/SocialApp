/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createContext, useEffect, useMemo, useReducer, useState} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AuthContext, LogOut, Login} from './src/services/authService';

import LoginScreen from './src/screens/auth/login';
import SplashScreen from './src/screens/splash';
import EditGatheringScreen from './src/screens/gatherings.tsx/edit';
import CreateGatheringScreen from './src/screens/gatherings.tsx/create';
import MainTabs from './src/screens';
import ViewGatheringScreen from './src/screens/gatherings.tsx/details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        Login(); // TODO lav resten
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => {
        LogOut();
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  const [isLoading, setIsLoading] = useState(true);

  const getUserToken = async () => {
    // testing purposes
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(500);
      const token = null;
      //dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken === null ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="SignIn"
              component={LoginScreen}
              options={{
                title: 'Sign in',
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Main"
              component={MainTabs}
              options={{
                title: 'Kort',
              }}
            />
            <Stack.Group screenOptions={{headerShown: true}}>
              <Stack.Screen
                name="EditGathering"
                options={{
                  title: '',
                }}
                component={EditGatheringScreen}
              />
              <Stack.Screen
                name="CreateGathering"
                options={{
                  title: '',
                }}
                component={CreateGatheringScreen}
              />
              <Stack.Screen
                name="ViewGathering"
                options={{
                  title: '',
                }}
                component={ViewGatheringScreen}
              />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
