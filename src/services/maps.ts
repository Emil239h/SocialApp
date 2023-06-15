const API_KEY = 'AIzaSyCA1Z6GWzyuHzCFqt4HhdJNV8zLMV_dRNk';
const ApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

interface addressComponent {
  long_name: string;
  short_name: string;
  types: Array<any>;
}

interface GeocodeResults {
  address_components: addressComponent[];
  formatted_address: string;
  geometry: {
    bounds: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
    location: {
      lat: number;
      lng: number;
    };
    location_type: string;
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  place_id: string;
  types: Array<any>;
}

async function getGeoOnAddr(address: string): Promise<GeocodeResults[]> {
  return fetch(
    `${ApiUrl}?key=${API_KEY}&address=${encodeURIComponent(address)}`,
  )
    .then(response => response.json())
    .then(json => {
      return <GeocodeResults[]>json.results;
    })
    .catch(error => {
      console.error(error);
      return [];
    });
}

export {getGeoOnAddr};
export type {GeocodeResults};
