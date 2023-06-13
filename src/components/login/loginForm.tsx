import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {CustomBtn, LinkBtn} from '../button';
import {Styles, Colors} from '../../styles/global';
import {AuthContext, setUserToken} from '../../services/authService';
import {useContext} from 'react';

export default function LoginForm({swapForm}: any) {
  // TODO login skal laves
  const {signIn} = useContext(AuthContext);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Login</Text>
      <Text style={Styles.label}>E-mail</Text>
      <TextInput style={Styles.textInput} />
      <Text style={Styles.label}>Adgangskode</Text>
      <TextInput style={Styles.textInput} />
      <Text style={Styles.label}>
        Ikke oprettet endnu?&nbsp;
        <LinkBtn onPress={() => swapForm(false)}>Opret dig nu</LinkBtn>
      </Text>
      <CustomBtn onPress={() => signIn('test')}>
        <Text>Login</Text>
      </CustomBtn>
    </View>
  );
}
