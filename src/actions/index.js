import ViaCEPAPI from '../api/ViaCEPAPI';

export const SEARCH_ADDRESS = "SEARCH_ADDRESS";

export const fetchCEP = CEP => async dispatch => {
    try {
        const response = await ViaCEPAPI(CEP);
        dispatch({ type: SEARCH_ADDRESS, payload: response.data });
    } catch (err) {
        dispatch({type: SEARCH_ADDRESS, payload: err});
    }
} 