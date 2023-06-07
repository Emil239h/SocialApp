import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';


export default function Navbar({children}:any) {

    return (
            <View style={styles.container}>
                {children}
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
        top:100,
        height:200,
        flex:1,
        flexDirection:'column',

        
    }
  });
  