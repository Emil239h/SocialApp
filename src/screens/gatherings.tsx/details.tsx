import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {getGathering} from '../../services/gatherings';
import {CustomBtn} from '../../components/button';
import {Styles} from '../../styles/global';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';

export default function ViewGatheringScreen({route}: any) {
  const item = getGathering(route.key);
  console.log(item);

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
          &nbsp;{item?.starttime}
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
