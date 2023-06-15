import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../styles/global';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SocialApp</Text>
      <ActivityIndicator size="large" color={Colors.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: Colors.light,
  },
});
