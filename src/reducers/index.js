import { combineReducers } from 'redux';
import { FETCH_ADDRESS, FETCH_COORDINATES } from '../actions';

const addressReducer = (state = '', action) => {
    switch (action.type) {
        case FETCH_ADDRESS:
            return action.payload;
        default:
            return state;
    }
}

const coordinatesReducer = (state = '', action) => {
    switch (action.type) {
        case FETCH_COORDINATES:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({ address: addressReducer, coordinates: coordinatesReducer });