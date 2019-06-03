import Geocode from 'react-geocode';
export const API_KEY = "AIzaSyAHcixvHTRnP4vJCL1mkav-oY8wPJf4Fgc";

Geocode.setApiKey(API_KEY);

export const GeocodingAPI = async CEP => await Geocode.fromAddress(CEP);

