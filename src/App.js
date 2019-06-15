import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SearchZipCode from './components/SearchZipCode';
import configureStore from './store';
import './App.css';

const store = configureStore();

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <div className="App" data-test="app">
                    <SearchZipCode />
                </div>
            </Provider>
        );
    }
}

export default App;
