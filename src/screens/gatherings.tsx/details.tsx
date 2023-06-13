import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Gathering, createGathering} from '../../services/gatherings';

export default function ViewGatheringScreen() {
  const exampleGathering: Gathering = {
    token: 'test_e_1',
    title: 'test_e_1',
    address: 'dd',
    coords: {
      latitude: 55,
      longitude: 12,
    },
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Opret begivenhed</Text>
        <Button
          title="Opret begivendhed"
          onPress={() => createGathering(exampleGathering)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
  link: {
    color: 'blue',
  },
  container: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
