import ViaCEPAPI from '../api/ViaCEPAPI';

export const SEARCH_ADDRESS = "SEARCH_ADDRESS";

export const fetchCEP = CEP => async dispatch => {
    const response = await ViaCEPAPI(CEP);
    console.log(response);
    dispatch({ type: SEARCH_ADDRESS, payload: response.data });
} 