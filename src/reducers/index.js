import { combineReducers } from 'redux';
import { SEARCH_ADDRESS } from '../actions';

const addressReducer = (state = '', action) => {
    switch (action.type) {
        case SEARCH_ADDRESS:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({ address: addressReducer });