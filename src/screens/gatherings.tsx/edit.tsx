import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';
import { Gathering, getGathering } from '../../services/gatherings';


export default function EditGatheringScreen({route} : any) {

    const item = getGathering(route.key);

    return (
        <View style={styles.container}>
            <View>
                <Text>Rediger begivenhed</Text>
                <Text>Navn: {item?.title}</Text>
            </View>
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
  });
  