import React, {useEffect, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Navbar from '../components/navigation/navbar';
import NavbarButton from '../components/navigation/navbar-button';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {getAllGatherings, getGathering} from '../services/gatherings';

export default function MainScreen() {
  const exampleData = getAllGatherings();
  const [selected, setSelected] = useState('');

  /*
        test




    */

  useEffect(() => {
    console.log('New marker selected:' + selected);
  }, [selected]);

  // test end

  const mapMarkers = exampleData.map(item => {
    return (
      <Marker
        pinColor={item.token === selected ? 'purple' : 'green'}
        //key={testItem.key}
        id={item.token}
        key={`${item.token}-${item.token === selected ? 'active' : 'inactive'}`}
        coordinate={item.coords}
        onSelect={() => {
          setSelected(item.token);
        }}
        onPress={() => setSelected(item.token)}
      />
    );
  });

  const detailsPreview = () => {
    let item = getGathering(selected);

    return (
      <View>
        <Text
          style={[styles.itemInfo, selected ? styles.shown : styles.hidden]}>
          {item?.title}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <MapView
        style={styles.mapContainer}
        provider={PROVIDER_GOOGLE}
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: 55.646517,
          longitude: 12.526355,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {mapMarkers}
      </MapView>
      {detailsPreview()}
    </View>
  );
}
const styles = StyleSheet.create({
  itemInfo: {
    width: '80%',
    height: 50,
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'yellow',
  },
  shown: {
    display: 'flex',
  },
  hidden: {
    display: 'none',
  },

  title: {
    fontSize: 50,
  },
  link: {
    color: 'blue',
  },
  container: {},
  mapContainer: {
    height: '100%',
  },
});
