import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';
import CreateGatheringScreen from './create';
import EditGatheringScreen from './edit';
import OverviewGatheringScreen from './overview';
import { NavigationContainer } from '@react-navigation/native';


export default function GatheringScreen({ navigation }:any) {
    const Stack = createNativeStackNavigator();

    return (
        <View>
            <Text>Oversigt</Text>
            <Button title='edit example' onPress={() => navigation.navigate('EditGathering')}/>
            <Button title='Create example' onPress={() => navigation.navigate('CreateGathering')}/>
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
  