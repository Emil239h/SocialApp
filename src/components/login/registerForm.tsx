import React, {useContext, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomBtn, LinkBtn} from '../button';
import {Colors, Styles} from '../../styles/global';
import {AuthContext, Register} from '../../services/authService';

export default function RegisterForm({route, swapForm}: any) {
  const {signUp} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setpasswordInvalid] = useState(false);

  const emailIsValid = () => {
    const nameRegex = new RegExp(/^[\w.]+@[\w.]+.[\w]/);
    if (!nameRegex.test(email)) {
      return false;
    }

    if (email !== email2) {
      return false;
    }

    return true;
  };

  const passwordIsValid = () => {
    if (password == '') {
      return false;
    }

    if (password !== password2) {
      return false;
    }

    return true;
  };

  const onSubmit = async () => {
    let emailValid = emailIsValid();
    let passwordValid = passwordIsValid();

    setEmailInvalid(!emailValid);
    setpasswordInvalid(!passwordValid);
    if (emailValid && passwordValid) {
      signUp(email, password);
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Registrer</Text>
      <Text style={Styles.label}>E-mail</Text>
      <TextInput
        inputMode="email"
        onChangeText={v => setEmail(v)}
        style={[Styles.textInput, emailInvalid ? styles.invalid : {}]}
      />
      <Text style={Styles.label}>Gentag E-mail</Text>
      <TextInput
        inputMode="email"
        onChangeText={v => setEmail2(v)}
        style={[Styles.textInput, emailInvalid ? styles.invalid : {}]}
      />
      <Text style={Styles.label}>Adgangskode</Text>
      <TextInput
        secureTextEntry={true}
        onChangeText={v => setPassword(v)}
        style={[Styles.textInput, passwordInvalid ? styles.invalid : {}]}
      />
      <Text style={Styles.label}>Gentag Adgangskode</Text>
      <TextInput
        secureTextEntry={true}
        onChangeText={v => setPassword2(v)}
        style={[Styles.textInput, passwordInvalid ? styles.invalid : {}]}
      />
      <Text style={Styles.label}>
        Allerede oprettet?&nbsp;
        <LinkBtn onPress={() => swapForm(true)}>Login nu</LinkBtn>
      </Text>
      <CustomBtn onPress={onSubmit}>
        <Text>Registrer</Text>
      </CustomBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  invalid: {
    borderWidth: 1,
    borderColor: Colors.error,
  },
});
