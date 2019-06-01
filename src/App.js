import React from 'react';
import './App.scss';
import AddressForm from './components/AddressForm';
import SearchZipCode from './components/SearchZipCode';

function App() {
    return (
    <div className="App">
        <header className="App-header">
            <SearchZipCode/>
        </header>
        <AddressForm/>
    </div>
  );
}

export default App;
