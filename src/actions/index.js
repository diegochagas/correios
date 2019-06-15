import types from './types';

export const loadAddress = CEP => ({ 
    type: types.ADDRESS_LOAD, 
    CEP 
});

export const setAddress = address => ({ 
    type: types.ADDRESS_LOAD_SUCCESS, 
    address 
});

export const setError = error => ({ 
    type: types.ADDRESS_LOAD_FAIL, 
    error 
});

export const fetchCoordinates = CEP => ({
    type: types.FETCH_COORDINATES,
    CEP
});

export const setCoordinates = coordinates => ({ 
    type: types.FETCH_COORDINATES_SUCCESS, 
    coordinates
});

export const setErrorCoordinates = error => ({ 
    type: types.FETCH_COORDINATES_FAIL, 
    error 
});
