import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Gathering, createGathering} from '../../services/gatherings';
import {Styles} from '../../styles/global';
import {CustomBtn} from '../../components/button';

export default function CreateGatheringScreen() {
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
      <ScrollView style={Styles.container}>
        <Text style={Styles.title}>Opret begivenhed</Text>

        <Text style={Styles.label}>Navn på begivenhed</Text>
        <TextInput style={Styles.textInput} />
        <Text style={Styles.label}>Addresse for begivenhed</Text>
        <TextInput style={Styles.textInput} />
        <Text style={Styles.label}>Beskrivelse af begivenhed</Text>
        <TextInput
          multiline
          textAlignVertical="top"
          maxLength={512}
          style={[Styles.textInput, Styles.descriptionInput]}
        />
        <CustomBtn onPress={() => createGathering(exampleGathering)}>
          <Text>Opret begivendhed</Text>
        </CustomBtn>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
