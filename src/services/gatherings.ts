interface Gathering {
  token: string;
  title?: string;
  description?: string;
  creator?: number;
  address?: string;
  coords: Coordinates;
}
interface Coordinates {
  latitude: number;
  longitude: number;
}

const exampleData: Gathering[] = [
  {
    token: 'test_token_1',
    title: 'test1',
    description: 'test description',
    creator: 1,
    address: 'test address 1',
    coords: {latitude: 55.646518, longitude: 12.526356},
  },
  {
    token: 'test_token_2',
    title: 'test 2',
    description: 'test 2 description',
    creator: 2,
    address: 'test address 2',
    coords: {latitude: 55.646518, longitude: 12.525615},
  },
];

function getAllGatherings(): Gathering[] {
  return exampleData;
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

function getGathering(token: string) {
  return exampleData.find(x => x.token == token);
}

function createGathering(g: Gathering) {
  exampleData.push(g);
}

function updateGathering() {}

function deleteGathering() {}

export {
  getAllGatherings,
  getMyGatherings,
  getGathering,
  createGathering,
  updateGathering,
  deleteGathering,
};
export type {Gathering};
