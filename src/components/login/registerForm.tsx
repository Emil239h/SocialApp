import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';

export default function RegisterForm() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrer</Text>
            <Text>E-mail</Text>
            <TextInput />
            <Text>Gentag E-mail</Text>
            <TextInput />
            <Text>Adgangskode</Text>
            <TextInput />
            <Text>Gentag Adgangskode</Text>
            <TextInput />
            <Text>Allerede oprettet? <Text style={styles.link}>Login nu</Text></Text>
            <Button title='Registrer'/>
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
  