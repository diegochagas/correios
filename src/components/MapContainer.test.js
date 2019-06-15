import React from 'react';
import MapContainer from './MapContainer';
import { shallow } from 'enzyme';
import { testStore } from '../utils';
import { INITIAL_COORDINATES_STATE } from '../reducers/coordinatesReducer';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<MapContainer store={store} />).childAt(0);
    return wrapper;
}

describe('Testing MapContainer Component', () => {

    let wrapper;
    beforeEach(() => {
        const coordinates = {
            coordinates: {
                latitude: INITIAL_COORDINATES_STATE.latitude,
                longitude: INITIAL_COORDINATES_STATE.longitude
            }
        }
        wrapper = setUp(coordinates);
    });

    it('should render without errors', () => {
        expect(wrapper).toBeDefined();
    });

});