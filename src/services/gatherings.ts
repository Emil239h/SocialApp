
interface Gathering {
    title: string,
    description: string,
    creator: number,
    address: string,
    lat: number,
    long: number,
}

function getAllGatherings(): Gathering[] {
    return [{
        title: 'test1',
        description: 'test description',
        creator: 1,
        address: 'test address 1',
        lat: 52.1,
        long : 55.2
    },
    {
        title: 'test 2',
        description: 'test 2 description',
        creator: 2,
        address: 'test address 2',
        lat: 52.1,
        long : 55.2
    }
]
}

function getMyGatherings() {
    return [{
        title: 'test1',
        description: 'test description',
        creator: 1,
        address: 'test address 1',
        lat: 52.1,
        long : 55.2
    }
]
}

function createGathering() {
    
}

function updateGathering() {
    
}

function deleteGathering() {
    
}

export { getAllGatherings, getMyGatherings, createGathering, updateGathering, deleteGathering}
export type {Gathering}