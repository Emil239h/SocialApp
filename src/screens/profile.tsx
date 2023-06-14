import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AuthContext} from '../services/authService';
import {Colors, Styles} from '../styles/global';
import {CustomBtn} from '../components/button';
import {User, editUser, getUser} from '../services/user';

export default function ProfileScreen({navigation}: any) {
  const {signOut} = useContext(AuthContext);
  const [profile, setProfile] = useState<User | null>(null);

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [nameInvalid, setNameInvalid] = useState(false);

  const phoneIsValid = () => {
    const nameRegex = new RegExp(/^[+]?[\d]{8,10}/);
    if (!nameRegex.test(phone)) {
      return false;
    }

    return true;
  };
  const nameIsValid = () => {
    if (name == '') {
      return false;
    }

    return true;
  };

  const onSubmit = async () => {
    let phoneValid = phoneIsValid();
    let nameValid = nameIsValid();

    setPhoneInvalid(!phoneValid);
    setNameInvalid(!nameValid);

    if (profile && phoneValid && nameValid) {
      let newProfile = profile;
      newProfile.phone = phone;
      newProfile.name = name;
      if (await editUser(newProfile)) {
        navigation.navigate({name: 'Kort'});
      }
    }
  };

  useEffect(() => {
    getUser().then(val => {
      setProfile(val);
      setPhone(val.phone);
      setName(val.name);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Profil</Text>
        <Text style={Styles.label}>E-mail</Text>
        <Text style={[Styles.textInput, styles.disabled]}>
          {profile?.email}
        </Text>
        <Text style={Styles.label}>Telefon</Text>
        <TextInput
          inputMode="tel"
          defaultValue={profile?.phone}
          onChangeText={v => setPhone(v)}
          style={[Styles.textInput, phoneInvalid ? styles.invalid : {}]}
        />
        <Text style={Styles.label}>Navn</Text>
        <TextInput
          defaultValue={profile?.name}
          onChangeText={v => setName(v)}
          style={[Styles.textInput, nameInvalid ? styles.invalid : {}]}
        />
        <CustomBtn onPress={onSubmit}>
          <Text>Gem</Text>
        </CustomBtn>
        <View style={styles.additionalContainer}>
          <CustomBtn onPress={() => signOut()}>
            <Text>Slet bruger</Text>
          </CustomBtn>
          <CustomBtn onPress={() => signOut()}>
            <Text>Log ud</Text>
          </CustomBtn>
        </View>
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
  additionalContainer: {
    marginTop: 100,
  },
  disabled: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  invalid: {
    borderWidth: 1,
    borderColor: Colors.error,
  },
});
