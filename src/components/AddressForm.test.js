import React from 'react';
import AddressForm from './AddressForm';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import renderer from 'react-test-renderer';

const store = createStore(reducers, applyMiddleware(thunk));

describe('AddressForm', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
              <AddressForm/>
          </Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('calls showMap method', () => {
        const component = renderer.create(
            <Provider store={store}>
                <AddressForm/>
            </Provider>,
        );
        const instance = component.getInstance();
        expect(instance.showMap).toBeUndefined();
    });
});