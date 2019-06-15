import moxios from 'moxios';
import { testStore } from '../utils';
import { loadAddress, fetchCoordinates } from '../actions';
import { INITIAL_ADDRESS_STATE } from '../reducers/addressReducer';
import { INITIAL_COORDINATES_STATE } from '../reducers/coordinatesReducer';

const dispatchAddressStore = async (store, CEP) => await store.dispatch(loadAddress(CEP));
const dispatchCoordinatesStore = async (store, CEP) => await store.dispatch(fetchCoordinates(CEP));

describe('Testing Sagas', () => {
    
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should load address correctly', () => {
        const expectedState = INITIAL_ADDRESS_STATE;
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({ status: 200,  response: expectedState });
        });
        return dispatchAddressStore(store, '11712-330')
            .then(() => {
                const newState = store.getState();
                expect(JSON.stringify(newState.address)).toBe(JSON.stringify(expectedState));
            })
    });

    it('should fetch coordinates correctly', () => {
        const expectedState = INITIAL_COORDINATES_STATE;
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({ status: 200,  response: expectedState });
        });
        return dispatchCoordinatesStore(store, '11712-330')
            .then(() => {
                const newState = store.getState();
                expect(JSON.stringify(newState.coordinates)).toBe(JSON.stringify(expectedState));
            })
    });
    
})
