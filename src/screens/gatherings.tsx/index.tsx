import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';
import CreateGatheringScreen from './create';
import EditGatheringScreen from './edit';
import OverviewGatheringScreen from './overview';
import { NavigationContainer } from '@react-navigation/native';
import { GatheringItem, OverviewGatherings } from '../../components/gatherings/overview';
import { getAllGatherings } from '../../services/gatherings';


export default function GatheringScreen({ navigation }:any) {
    const Stack = createNativeStackNavigator();
    const gatheringsList : any = [];

    const gatherings = getAllGatherings();

    gatherings.forEach((g) => {
        gatheringsList.push(<GatheringItem data={g} navigation={navigation}/>);
      });

    return (
        <View>
            <OverviewGatherings>
                {gatheringsList}    
            </OverviewGatherings>
        </View>
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
    mapContainer:{
    }
  });
  