import {ApiUrl} from '../styles/global';
import {getUser} from './user';

interface Gathering {
  token: string;
  title?: string;
  description?: string;
  address?: string;
  starttime?: string;
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
      console.error('unable to get gatherings');
      return <Gathering[]>[];
    });
}

async function getMyGatherings(): Promise<Gathering[]> {
  let user = await getUser();
  return fetch(
    `${ApiUrl}/events/event_get_own.php?user_token=${user.token}&session=${user.session}`,
  )
    .then(response => response.json())
    .then(json => {
      gatherings = <Gathering[]>json.content;
      return gatherings;
    })
    .catch(() => {
      console.error('unable to get user gatherings');
      return <Gathering[]>[];
    });
}

function getGathering(token: string): Gathering | undefined {
  return gatherings.find(x => x.token === token);
}

async function createGathering(gathering: Gathering) {
  let user = await getUser();
  return fetch(ApiUrl + '/events/event_create.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_token: user.token,
      session: user.session,
      title: gathering.title,
      address: gathering.address,
      starttime: gathering.starttime,
      description: gathering.description,
      latitude: gathering.coords.latitude,
      longitude: gathering.coords.longitude,
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json.status === 201) {
        // 201 Created
        return true;
      }
      return false;
    })
    .catch(() => {
      console.error('unable to create gathering');
      return false;
    });
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
      starttime: gathering.starttime,
      description: gathering.description,
      latitude: gathering.coords.latitude,
      longitude: gathering.coords.longitude,
    }),
  })
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
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
