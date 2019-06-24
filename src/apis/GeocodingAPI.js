import Geocode from 'react-geocode';
export const API_KEY = "AIzaSyBbEgH3Bm7kYUluzA4Zbc2VvGEfuJqwuQw";

Geocode.setApiKey(API_KEY);

export const GeocodingAPI = async CEP => await Geocode.fromAddress(CEP);

