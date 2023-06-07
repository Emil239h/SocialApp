import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';
import Navbar from '../components/navigation/navbar';
import NavbarButton from '../components/navigation/navbar-button';


export default function MainScreen() {

    return (
            <View style={styles.container}>
                <View style={styles.mapContainer}><Text>Map</Text></View>
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
  