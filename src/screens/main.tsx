import React, {useEffect, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {getAllGatherings, getGathering} from '../services/gatherings';
import {RoundBtn} from '../components/button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfo} from '@fortawesome/free-solid-svg-icons/faInfo';
import {Colors} from '../styles/global';

export default function MainScreen({navigation}: any) {
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
      <View
        style={[
          styles.itemInfoContainer,
          selected ? styles.shown : styles.hidden,
        ]}>
        <View style={styles.itemInfo}>
          <View>
            <Text style={styles.itemInfoTitle}>{item?.title}</Text>
            <Text style={styles.itemInfoAddress}>{item?.address}</Text>
          </View>
          <RoundBtn
            onPress={() =>
              navigation.navigate({name: 'ViewGathering', key: item.token})
            }>
            <FontAwesomeIcon icon={faInfo} size={24} />
          </RoundBtn>
        </View>
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
  itemInfoContainer: {
    position: 'absolute',
    height: 80,
    width: '100%',
    bottom: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInfo: {
    width: '95%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemInfoTitle: {
    fontSize: 24,
  },
  itemInfoAddress: {},
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
