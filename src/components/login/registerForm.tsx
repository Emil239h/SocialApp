import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomBtn, LinkBtn} from '../button';
import {Styles} from '../../styles/global';

export default function RegisterForm({route, swapForm}: any) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Registrer</Text>
      <Text style={Styles.label}>E-mail</Text>
      <TextInput style={Styles.textInput} />
      <Text style={Styles.label}>Gentag E-mail</Text>
      <TextInput style={Styles.textInput} />
      <Text style={Styles.label}>Adgangskode</Text>
      <TextInput style={Styles.textInput} />
      <Text style={Styles.label}>Gentag Adgangskode</Text>
      <TextInput style={Styles.textInput} />
      <Text style={Styles.label}>
        Allerede oprettet?&nbsp;
        <LinkBtn onPress={() => swapForm(true)}>Login nu</LinkBtn>
      </Text>
      <CustomBtn>
        <Text>Registrer</Text>
      </CustomBtn>
    </View>
  );
}
