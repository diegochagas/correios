import { put, call, takeLatest, all } from 'redux-saga/effects';
import { setAddress, setError, setCoordinates, setErrorCoordinates } from '../actions';
import actionTypes from '../actions/types';
import ViaCEPAPI from '../apis/ViaCEPAPI';
import BingMapsAPI from '../apis/BingMapsAPI';

function* handleAddressLoad(action) {
    try {
        const response = yield call(ViaCEPAPI, action.CEP);
        yield put(setAddress(response.data));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

function* watchAddressLoad() {
    yield takeLatest(actionTypes.ADDRESS_LOAD, handleAddressLoad);
}

function* handleCoordinatesLoad(action) {
    try {
        const response = yield call(BingMapsAPI, action.CEP);
        const arrayCoordinates = response.data.resourceSets[0].resources[0].geocodePoints[0].coordinates;
        yield put(setCoordinates({latitude: arrayCoordinates[0], longitude: arrayCoordinates[1]}));
    } catch (error) {
        yield put(setErrorCoordinates(error.toString()));
    }
}

function* watchCoordinatesLoad() {
    yield takeLatest(actionTypes.FETCH_COORDINATES, handleCoordinatesLoad);
}

export default function* rootSaga() {
    yield all([watchAddressLoad(), watchCoordinatesLoad()]);
}
