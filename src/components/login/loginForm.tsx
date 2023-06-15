import React, {useContext, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {CustomBtn, LinkBtn} from '../button';
import {Styles} from '../../styles/global';
import {AuthContext} from '../../services/authService';

export default function LoginForm({swapForm}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn, signInAsGuest} = useContext(AuthContext);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Login</Text>
      <Text style={Styles.label}>E-mail</Text>
      <TextInput
        inputMode="email"
        onChangeText={v => setEmail(v)}
        style={Styles.textInput}
      />
      <Text style={Styles.label}>Adgangskode</Text>
      <TextInput
        secureTextEntry={true}
        onChangeText={v => setPassword(v)}
        style={Styles.textInput}
      />
      <Text style={Styles.label}>
        Ikke oprettet endnu?&nbsp;
        <LinkBtn onPress={() => swapForm(false)}>Opret dig nu</LinkBtn>
      </Text>
      <CustomBtn onPress={() => signIn(email, password)}>
        <Text>Login</Text>
      </CustomBtn>
      <CustomBtn onPress={() => signInAsGuest()}>
        <Text>Fortsæt som gæst</Text>
      </CustomBtn>
    </View>
  );
}
