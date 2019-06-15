import actionTypes from '../actions/types';

export const INITIAL_COORDINATES_STATE = {
        latitude: "-24.0350399017334", 
        longitude: "-46.530548095703125"
};

export const coordinatesReducer = (state = INITIAL_COORDINATES_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COORDINATES_SUCCESS:
            return action.coordinates;
        default:
            return state;
    }
};

export const loadingCoordinatesReducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COORDINATES:
            return true;
        case actionTypes.FETCH_COORDINATES_SUCCESS:
        case actionTypes.FETCH_COORDINATES_FAIL:
            return false;
        default:
            return state;
    }
};

export const errorCoordinatesReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COORDINATES_FAIL:
            return action.error;
        case actionTypes.FETCH_COORDINATES:
        case actionTypes.FETCH_COORDINATES_SUCCESS:
            return null;
        default:
            return state;
    }
};
