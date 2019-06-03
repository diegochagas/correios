import ViaCEPAPI from '../apis/ViaCEPAPI';
import BingMapsAPI from '../apis/BingMapsAPI';

export const FETCH_ADDRESS = "FETCH_ADDRESS";
export const FETCH_COORDINATES = "FETCH_COORDINATES";

export const fetchCEP = CEP => async dispatch => {
    try {
        const response = await ViaCEPAPI(CEP);
        dispatch({ type: FETCH_ADDRESS, payload: response.data });
    } catch (err) {
        dispatch({type: FETCH_ADDRESS, payload: err});
    }
} 

export const fetchCoordinates = CEP => async dispatch => {
    try {
        const response = await BingMapsAPI(CEP);
        const coordinates = response.data.resourceSets[0].resources[0].geocodePoints[0].coordinates;
        dispatch({type: FETCH_COORDINATES, payload: coordinates});
    } catch (err) {
        dispatch({type: FETCH_COORDINATES, payload: err});
    }
}