import actionTypes from '../actions/types';

export const INITIAL_ADDRESS_STATE = {
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    cep: ""
}

export const addressReducer = (state = INITIAL_ADDRESS_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADDRESS_LOAD_SUCCESS:
            return action.address;
        default:
            return state;
    }
};

export const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.ADDRESS_LOAD:
            return true;
        case actionTypes.ADDRESS_LOAD_SUCCESS:
        case actionTypes.ADDRESS_LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export const errorReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.ADDRESS_LOAD_FAIL:
            return action.error;
        case actionTypes.ADDRESS_LOAD:
        case actionTypes.ADDRESS_LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};
