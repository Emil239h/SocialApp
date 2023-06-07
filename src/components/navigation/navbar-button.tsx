import React from 'react';
import { Button, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';


export default function Navbar({text} : {text: string}) {

    return (
            <View>
              <Text>{text}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
  });
  