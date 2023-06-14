import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Gathering,
  createGathering,
  getGathering,
} from '../../services/gatherings';
import {CustomBtn} from '../../components/button';
import {Styles} from '../../styles/global';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';

export default function ViewGatheringScreen({route}: any) {
  const item = getGathering(route.key);

  return (
    <View style={styles.container}>
      <ScrollView style={Styles.container}>
        <Text style={Styles.title}>{item?.title}</Text>
        <Text style={Styles.label}>
          <FontAwesomeIcon icon={faHouse} />
          &nbsp;{item?.address}
        </Text>
        <Text style={Styles.label}>
          <FontAwesomeIcon icon={faClock} />
          &nbsp;** Tidspunkt
        </Text>
        <CustomBtn>
          <Text>Tilmæld</Text>
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
