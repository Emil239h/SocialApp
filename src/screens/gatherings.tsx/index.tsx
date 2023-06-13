import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import {
  GatheringItem,
  OverviewGatherings,
} from '../../components/gatherings/overview';
import {getAllGatherings} from '../../services/gatherings';
import {useIsFocused} from '@react-navigation/native';

export default function GatheringScreen({navigation}: any) {
  const isFocused = useIsFocused();
  const gatherings = getAllGatherings();
  const [gatheringsList, setGatheringsList] = useState([]);

  useEffect(() => {
    if (!isFocused) return;
    let gL: any = [];
    gatherings.forEach((g, i) => {
      gL.push(<GatheringItem key={i} data={g} navigation={navigation} />);
    });
    setGatheringsList(gL);
  }, [isFocused]);

  return (
    <View>
      <OverviewGatherings navigation={navigation}>
        {gatheringsList}
      </OverviewGatherings>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
  link: {
    color: 'blue',
  },
  container: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
