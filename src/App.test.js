import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './utils';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />);
    return wrapper;
}

describe('Testing App Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('renders without crashing', () => {
        const component = findByTestAttr(wrapper, 'app');
        expect(component.length).toBe(1);
    });

});
