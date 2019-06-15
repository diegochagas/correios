import { combineReducers } from 'redux';
import { loadingReducer, addressReducer, errorReducer } from './addressReducer';
import { loadingCoordinatesReducer, coordinatesReducer, errorCoordinatesReducer } from './coordinatesReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    address: addressReducer,
    error: errorReducer,
    isLoadingCoordinates: loadingCoordinatesReducer,
    coordinates: coordinatesReducer,
    errorCoordinates: errorCoordinatesReducer
});

export default rootReducer;
