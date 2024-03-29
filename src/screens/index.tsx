import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MainScreen from './main';
import GatheringScreen from './gatherings.tsx';
import ProfileScreen from './profile';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faMapLocation} from '@fortawesome/free-solid-svg-icons/faMapLocation';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import {Colors} from '../styles/global';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let faIcon = faMugSaucer; // fallback

          if (route.name === 'Kort') {
            faIcon = faMapLocation;
          } else if (route.name === 'Begivenheder') {
            faIcon = faCalendarDays;
          } else if (route.name === 'Profil') {
            faIcon = faUser;
          }

          return (
            <FontAwesomeIcon
              icon={faIcon}
              color={focused ? Colors.link : Colors.dark}
            />
          );
        },
      })}>
      <Tab.Screen name="Kort" component={MainScreen} />
      <Tab.Screen name="Begivenheder" component={GatheringScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
