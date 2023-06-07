/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './src/screens/auth/login';
import MainScreen from './src/screens/main';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from './src/screens/profile';
import SplashScreen from './src/screens/splash';
import OverviewGatheringScreen from './src/screens/gatherings.tsx/overview';
import EditGatheringScreen from './src/screens/gatherings.tsx/edit';
import GatheringScreen from './src/screens/gatherings.tsx';
import CreateGatheringScreen from './src/screens/gatherings.tsx/create';
import MainTabs from './src/screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(500);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {userToken !== null ? (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="SignIn"
            component={ LoginScreen }
            options={{
              title: 'Sign in',
            }}
            initialParams={{ setUserToken }}
          />
      </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
              name="Main"
              component={ MainTabs }
              options={{
              title: 'Kort',
              }}
              initialParams={{ setUserToken }} 
          />
          <Stack.Group screenOptions={{ headerShown: true }}>
            <Stack.Screen 
              name="EditGathering"
              component={ EditGatheringScreen }
          />
          <Stack.Screen 
              name="CreateGathering"
              component={ CreateGatheringScreen }
          />
          </Stack.Group>

      </Stack.Navigator>
          )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  test:{
    display:'none'
  }
});

export default App;
