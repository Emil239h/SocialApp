import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  AuthContext,
  User,
  getUser,
  setUserToken,
} from '../services/authService';
import {Styles} from '../styles/global';
import {CustomBtn} from '../components/button';

export default function ProfileScreen({route}: any) {
  const {signOut} = useContext(AuthContext);
  const [profile, setProfile] = useState<User | null>(null);

  useEffect(() => {
    getUser().then(val => setProfile(val));
  }, []);

  return (
    <View style={styles.container}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Profil</Text>
        <Text style={Styles.label}>E-mail</Text>
        <TextInput defaultValue={profile?.email} style={Styles.textInput} />
        <Text style={Styles.label}>Navn</Text>
        <TextInput defaultValue={profile?.name} style={Styles.textInput} />
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
