import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {getGathering} from '../../services/gatherings';
import {Styles} from '../../styles/global';
import {CustomBtn} from '../../components/button';

export default function EditGatheringScreen({route}: any) {
  const item = getGathering(route.key);

  return (
    <View style={styles.container}>
      <ScrollView style={Styles.container}>
        <Text style={Styles.title}>{item?.title}</Text>

        <Text style={Styles.label}>Navn på begivenhed</Text>
        <TextInput defaultValue={item?.title} style={Styles.textInput} />
        <Text style={Styles.label}>Addresse for begivenhed</Text>
        <TextInput defaultValue={item?.address} style={Styles.textInput} />
        <Text style={Styles.label}>Beskrivelse af begivenhed</Text>
        <TextInput
          multiline
          textAlignVertical="top"
          maxLength={512}
          defaultValue={item?.description}
          style={[Styles.textInput, Styles.descriptionInput]}
        />
        <CustomBtn>
          <Text>Gem</Text>
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
