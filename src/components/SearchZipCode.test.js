import React from 'react';
import SearchZipCode, { errorMessages } from './SearchZipCode';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../utils';

const CEP = '11712-330';
const event = { target: { value: CEP } };
const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<SearchZipCode store={store} />).childAt(0).dive();
    return wrapper;
}

describe('Testing SearchZipCode Component', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('should render without errors', () => {
        const component = findByTestAttr(wrapper, "search-zip-code");
        expect(component.length).toBe(1);
    });

    describe('select-uf field', () => {

        it('selectUFFromStatesList should return value as expected', () => {
            const classInstance = wrapper.instance();
            const UF = 'RJ';
            const selectedUF = classInstance.selectUFFromStatesList(UF);
            expect(selectedUF).toBe(UF);
        });

        it('renderBrazilianStates should select value as expected', () => {
            const classInstance = wrapper.instance();
            const UF = 'RJ';
            const component = classInstance.renderBrazilianStates(UF);
            expect(component.props.value).toBe(UF);
        });
    });
        
    describe('input search field', () => {

        it('should render an input search field', () => {
            const component = findByTestAttr(wrapper, "search-field");
            expect(component.length).toBe(1);
        });

        it('should change an input search field value', () => {
            const classInstance = wrapper.instance();
            classInstance.onChangeCEP(event);
            expect(classInstance.CEP.current).toEqual(CEP);
        });
    });

    describe('errorMessageHandler method', () => {

        let classInstance;
        beforeEach(() => {
            classInstance = wrapper.instance();
        });

        it(`should throw a message if the CEP was not found`, () => {
            const errorMessage = classInstance.errorMessageHandler(null, true);
            expect(errorMessage).toEqual(errorMessages.notFoundMessage);
        });

        it(`should throw a message if the CEP was invalid`, () => {
            const { networkErrorMessage } = errorMessages;
            const errorMessage = classInstance.errorMessageHandler(networkErrorMessage, true);
            expect(errorMessage).toEqual(errorMessages.invalidZipCodeMessage);
        });

    });

});