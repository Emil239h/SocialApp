import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';
import { Gathering } from '../../services/gatherings';

function OverviewGatherings({children}: any ){
    return (
        <View>
            <Text>Test</Text>
            {children}
        </View>
    );
}

function GatheringItem({navigation, data} : {navigation : any, data: Gathering}) {

    return (
        <View>
            <Text>{data?.title}</Text>    
            <Text>{data?.description}</Text>    
            <Text>{data?.address}</Text>
            <Button title='Edit example' onPress={() => navigation.navigate({name : 'EditGathering' , key: data})}/>
            <Button title='Create example' onPress={() => navigation.navigate({name : 'CreateGathering', key: data})}/>    
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
  

  export {OverviewGatherings, GatheringItem}