import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';
import CreateGatheringScreen from './create';
import EditGatheringScreen from './edit';

export default function OverviewGatheringScreen() {

    return (
            <View style={styles.container}>
                <View style={styles.mapContainer}><Text>Rediger begivenhed</Text></View>
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
  