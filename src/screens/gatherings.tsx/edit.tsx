import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {editGathering, getGathering} from '../../services/gatherings';
import {Colors, Styles} from '../../styles/global';
import {CustomBtn} from '../../components/button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import {getGeoOnAddr} from '../../services/maps';

export default function EditGatheringScreen({route, navigation}: any) {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);

  const [titleInvalid, setTitleInvalid] = useState(false);
  const [addressInvalid, setAddressInvalid] = useState(false);

  const addressLookup = async () => {
    if (address === '') {
      return null;
    }
    const results = await getGeoOnAddr(address);

    if (results.length > 0) {
      setAddress(results[0].formatted_address);
      return results[0];
    }
    return null;
  };

  const titleIsValid = () => {
    if (title === '') {
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    const addressResult = await addressLookup();

    let titleValid = titleIsValid();
    let addressValid = addressResult !== null;

    setTitleInvalid(!titleValid);
    setAddressInvalid(!addressValid);

    if (titleValid && addressValid && addressResult) {
      let success = await editGathering({
        title: title,
        address: addressResult.formatted_address,
        description: description,
        token: route.key,
        coords: {
          latitude: addressResult.geometry.location.lat,
          longitude: addressResult.geometry.location.lng,
        },
      });

      if (success) {
        navigation.navigate({name: 'Begivenheder'});
      }
    }
  };

  useEffect(() => {
    const item = getGathering(route.key);
    setTitle(item?.title);
    setAddress(item?.address);
    setDescription(item?.description);
  }, [route.key]);

  return (
    <View style={styles.container}>
      <ScrollView style={Styles.container}>
        <Text style={Styles.title}>{title}</Text>

        <Text style={Styles.label}>Navn på begivenhed</Text>
        <TextInput
          value={title}
          onChangeText={v => setTitle(v)}
          style={[Styles.textInput, titleInvalid ? styles.invalid : {}]}
        />
        <Text style={Styles.label}>Addresse for begivenhed</Text>
        <View style={styles.addressContainer}>
          <TextInput
            value={address}
            onChangeText={v => setAddress(v)}
            style={[
              Styles.textInput,
              styles.addressInput,
              addressInvalid ? styles.invalid : {},
            ]}
          />
          <CustomBtn onPress={addressLookup} style={styles.searchButton}>
            <FontAwesomeIcon
              color={Colors.light}
              icon={faMagnifyingGlass}
              size={24}
            />
          </CustomBtn>
        </View>

        <Text style={Styles.label}>Beskrivelse af begivenhed</Text>
        <TextInput
          multiline
          textAlignVertical="top"
          maxLength={512}
          value={description}
          onChangeText={v => setDescription(v)}
          style={[Styles.textInput, Styles.descriptionInput]}
        />
        <CustomBtn onPress={() => onSubmit()}>
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
  addressContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addressInput: {
    width: '75%',
    marginRight: 10,
  },
  searchButton: {
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  invalid: {
    borderWidth: 1,
    borderColor: Colors.error,
  },
});
