import {ApiUrl} from '../styles/global';
import {getUser} from './user';

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

async function editGathering(gathering: Gathering) {
  let user = await getUser();

  return fetch(ApiUrl + '/events/event_update.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_token: user.token,
      session: user.session,
      token: gathering.token,
      title: gathering.title,
      address: gathering.address,
      description: gathering.description,
      latitude: gathering.coords.latitude,
      longitude: gathering.coords.longitude,
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json.status == 200) {
        return true;
      }
      return false;
    })
    .catch(() => {
      console.error('unable to update gathering');
      return false;
    });
}

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
