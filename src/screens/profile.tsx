import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';

export default function ProfileScreen({route} : any) {
    const { setUserToken } = route.params;

    return (
            <View style={styles.container}>
                <View style={styles.mapContainer}><Text>Profil</Text></View>
                <Button title='Log ud' onPress={() => setUserToken(null)} />
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
  