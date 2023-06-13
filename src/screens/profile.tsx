import React, {useContext} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AuthContext, setUserToken} from '../services/authService';
import {Styles} from '../styles/global';
import {CustomBtn} from '../components/button';

export default function ProfileScreen({route}: any) {
  // TODO setUserToken skal sættes til null
  const {signOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Profil</Text>
        <Text style={Styles.label}>E-mail</Text>
        <TextInput style={Styles.textInput} />
        <Text style={Styles.label}>Navn</Text>
        <TextInput style={Styles.textInput} />
        <CustomBtn onPress={() => signOut()}>
          <Text>Slet bruger</Text>
        </CustomBtn>
        <CustomBtn onPress={() => signOut()}>
          <Text>Log ud</Text>
        </CustomBtn>
      </View>
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
