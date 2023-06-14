import {ApiUrl} from '../styles/global';

interface Gathering {
  token: string;
  title?: string;
  description?: string;
  address?: string;
  coords: Coordinates;
  creator?: Creator;
}
interface Coordinates {
  latitude: number;
  longitude: number;
}
interface Creator {
  token: string;
  name: string;
  phone: string;
  email: string;
}

let gatherings: Gathering[] = [];

async function getAllGatherings(): Promise<Gathering[]> {
  return fetch(ApiUrl + '/events/event_get.php')
    .then(response => response.json())
    .then(json => {
      gatherings = <Gathering[]>json.content;
      return gatherings;
    })
    .catch(error => {
      console.error(error);
      return <Gathering[]>[];
    });
}

function getMyGatherings() {
  return [
    {
      title: 'test1',
      description: 'test description',
      creator: 1,
      address: 'test address 1',
      lat: 52.1,
      long: 55.2,
    },
  ];
}

function getGathering(token: string): Gathering | undefined {
  return gatherings.find(x => x.token == token);
}

function createGathering(g: Gathering) {
  gatherings.push(g);
}

function editGathering() {}

function deleteGathering() {}

export {
  getAllGatherings,
  getMyGatherings,
  getGathering,
  createGathering,
  editGathering,
  deleteGathering,
};
export type {Gathering, Coordinates};
