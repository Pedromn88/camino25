interface Item {
    type: 'beer' | 'love' | 'octopus' | 'km';
    title: string;
    count: number;
}


interface mapHostel {
    type: 'bar' | 'hostel'
    latitude: number;
    longitude: number;
}


export const lastYear: Item[] = [{
    type: 'km',
    title: "Kilómetros Totales",
    count: 151
}, {
    type: 'beer',
    title: "Birras Totales",
    count: 300
}, {
    type: 'love',
    title: "Me Encantas Totales",
    count: 68
}, {
    type: 'octopus',
    title: "Pulpitos Totales",
    count: 8
}

]

export const mapHostel: mapHostel[] = [
    {
        type: 'hostel',
        latitude: 43.21815951730697,
        longitude: -6.875793986507831
    },
    {
        type: 'hostel',
        latitude: 43.1248553043032,
        longitude: -7.068065271164057
    },
    {
        type: 'hostel',
        latitude: 43.00793635698543,
        longitude: -7.558919186507833
    },
    {
        type: 'hostel',
        latitude: 42.94986661864797,
        longitude: -7.816524271164057
    },
    {
        type: 'bar',
        latitude: 42.91335783570397,
        longitude: -8.011571944242174
    },
    {
        type: 'hostel',
        latitude: 42.92620855995965,
        longitude: -8.16357917116405842
    },
    {
        type: 'hostel',
        latitude: 42.905245090848325,
        longitude: -8.360973784656226
    },
    {
        type: 'bar',
        latitude: 42.9048266981345,
        longitude: -8.360662373078343
    },
    {
        type: 'hostel',
        latitude: 42.88116292012864,
        longitude: -8.543191701851603
    },
    {
        type: 'bar',
        latitude: 42.87983649979521,
        longitude: -8.540745601915031,
    },

]

