import React, {useEffect, useState} from 'react';
import {
  GatheringItem,
  OverviewGatherings,
} from '../../components/gatherings/overview';
import {Gathering, getMyGatherings} from '../../services/gatherings';
import {useIsFocused} from '@react-navigation/native';
import {getUser} from '../../services/user';

export default function GatheringScreen({navigation}: any) {
  const isFocused = useIsFocused();
  const [gatherings, setGatherings] = useState<Gathering[]>([]);
  const [gatheringsList, setGatheringsList] = useState([]);

  useEffect(() => {
    if (!isFocused) {
      return;
    }
    getUser().then(user => {
      if (user) {
        getMyGatherings().then(val => setGatherings(val));
      }
    });
  }, [isFocused]);

  useEffect(() => {
    if (!isFocused) {
      return;
    }

    let gL: any = [];
    gatherings.forEach((g, i) => {
      gL.push(<GatheringItem key={i} data={g} navigation={navigation} />);
    });
    setGatheringsList(gL);
  }, [navigation, gatherings, isFocused]);

  return (
    <OverviewGatherings navigation={navigation}>
      {gatheringsList}
    </OverviewGatherings>
  );
}
