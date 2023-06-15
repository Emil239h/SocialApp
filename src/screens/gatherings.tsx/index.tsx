import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  GatheringItem,
  OverviewGatherings,
} from '../../components/gatherings/overview';
import {Gathering, getAllGatherings} from '../../services/gatherings';
import {useIsFocused} from '@react-navigation/native';

export default function GatheringScreen({navigation}: any) {
  const isFocused = useIsFocused();
  const [gatherings, setGatherings] = useState<Gathering[]>([]);
  const [gatheringsList, setGatheringsList] = useState([]);

  useEffect(() => {
    getAllGatherings().then(val => setGatherings(val));
  }, [isFocused]);

  useEffect(() => {
    if (!isFocused) return;
    let gL: any = [];
    gatherings.forEach((g, i) => {
      gL.push(<GatheringItem key={i} data={g} navigation={navigation} />);
    });
    setGatheringsList(gL);
  }, [gatherings, isFocused]);

  return (
    <View>
      <OverviewGatherings navigation={navigation}>
        {gatheringsList}
      </OverviewGatherings>
    </View>
  );
}
