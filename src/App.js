import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import AddressForm from './components/AddressForm';
import SearchZipCode from './components/SearchZipCode';
import ErrorMessage from './components/ErrorMessage';

class App extends Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <SearchZipCode/>
                </header>
                {this.renderResponse()}
            </div>
        );
    }

    renderResponse = () => {
        const address = this.props.address;
        if (address !== '') {
            if (address.cep === undefined) {
                return <ErrorMessage/>;
            } else {
                return <AddressForm />;
            }
        }
    }
}

const mapStateToProps = state => {
    return { address: state.address };
}

export default connect(mapStateToProps)(App);
