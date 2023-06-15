import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gathering} from '../../services/gatherings';
import {Styles} from '../../styles/global';
import {CustomBtn} from '../button';

function OverviewGatherings({navigation, children}: any) {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={Styles.container}>
          <Text style={Styles.title}>Begivenheder</Text>
        </View>
        {children}
        <View style={styles.container}>
          <CustomBtn
            onPress={() => navigation.navigate({name: 'CreateGathering'})}>
            <Text>Opret ny begivenhed</Text>
          </CustomBtn>
        </View>
      </ScrollView>
    </View>
  );
}

function GatheringItem({navigation, data}: {navigation: any; data: Gathering}) {
  return (
    <View style={Styles.container}>
      <Text style={styles.title}>{data?.title}</Text>
      <Text>{data?.address}</Text>
      <Text>{data?.description}</Text>
      <CustomBtn
        onPress={() =>
          navigation.navigate({name: 'EditGathering', key: data.token})
        }>
        Rediger
      </CustomBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
  },
  tinyLogo: {
    width: 66,
    height: 58,
  },
  container: {
    marginBottom: 50,
    width: '80%',
  },
  title: {
    fontSize: 24,
  },
});

export {OverviewGatherings, GatheringItem};
