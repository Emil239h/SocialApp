import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MainScreen from './main';
import GatheringScreen from './gatherings.tsx';
import ProfileScreen from './profile';

const Tab = createBottomTabNavigator();

export default function MainTabs({route}:any) {
    const { setUserToken } = route.params;

    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={MainScreen}/>
        <Tab.Screen name="Mine begivenheder" component={GatheringScreen} />
        <Tab.Screen 
            name="Profil" 
            component={ProfileScreen}
            initialParams={{ setUserToken }}/>
      </Tab.Navigator>
    );
  }