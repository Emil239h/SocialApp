import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  Coordinates,
  Gathering,
  getAllGatherings,
  getGathering,
} from '../services/gatherings';
import {RoundBtn} from '../components/button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {Colors} from '../styles/global';
import Geolocation from '@react-native-community/geolocation';

export default function MainScreen({navigation}: any) {
  const [currentLocation, setCurrentLocation] = useState<Coordinates>({
    // fallback coords
    latitude: 55.6465,
    longitude: 12.52617,
  });
  const [gatherings, setGatherings] = useState<Gathering[]>([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    getAllGatherings().then(val => setGatherings(val));
    Geolocation.getCurrentPosition(info => {
      setCurrentLocation(info.coords);
    });
  }, []);

  const mapMarkers = gatherings.map(item => {
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
            <FontAwesomeIcon
              color={Colors.light}
              icon={faArrowRight}
              size={24}
            />
          </RoundBtn>
        </View>
      </View>
    );
  };

  return (
    <View>
      <MapView
        style={styles.mapContainer}
        customMapStyle={googleCustomMapStyle}
        provider={PROVIDER_GOOGLE}
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {mapMarkers}
      </MapView>
      {detailsPreview()}
    </View>
  );
}

// generated on 'https://mapstyle.withgoogle.com'
const googleCustomMapStyle = [
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

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
    backgroundColor: Colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemInfoTitle: {
    fontSize: 24,
    color: Colors.light,
  },
  itemInfoAddress: {
    color: Colors.light,
  },
  shown: {
    display: 'flex',
  },
  hidden: {
    display: 'none',
  },
  mapContainer: {
    height: '100%',
  },
});
