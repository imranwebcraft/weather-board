const data = [
    {
        location: "London",
        latitude: 51.5073219,
        longitude: -0.1276474,
    },
    {
        location: "Pangsa",
        latitude: 23.7800,
        longitude: 89.4127,
    },
    {
        location: "Kushtia",
        latitude:23.9089,
        longitude:  89.1222,
    },
    {
        location: "Rajbari",
        latitude:23.7527,
        longitude:  89.6446,
    },
    {
        location: "Kolkata",
        latitude: 22.5726723,
        longitude: 88.3638815,
    },
    {
        location: "Dhaka",
        latitude: 23.777176,
        longitude: 90.399452,
    },
    {
        location: "Singapore",
        latitude: 1.2899175,
        longitude: 103.8519072,
    },
    {
        location: "New York",
        latitude: 40.7127281,
        longitude: -74.0060152,
    },
    {
        location: "Toronto",
        latitude: 43.6534817,
        longitude: -79.3839347,
    },
];

const getLocation = () => data;

const getLocationByName = ( location ) => {
    if(!location || typeof location !== 'string') {
        throw new Error('getLocationByName requires a string location argument');
      }
    const foundLocation = data.find( (item) => item.location === location );
    return foundLocation ? foundLocation : {location, latitude: 0, longitude: 0};  
}

export {getLocation, getLocationByName};