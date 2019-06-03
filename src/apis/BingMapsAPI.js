import axios from 'axios';
const BING_API_KEY = "AhaUarMLk9Ld4hM3CieQT8PH3aUlGJUtkT353eG_BLWj3zvqZKkkIAkoX2JwyMIJ";
const BING_URL = "http://dev.virtualearth.net/REST/v1/Locations";

const BingMapsAPI = async CEP => await axios.get(`${BING_URL}?key=${BING_API_KEY}&query=${CEP}`);

export default BingMapsAPI;
