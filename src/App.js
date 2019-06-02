import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import AddressForm from './components/AddressForm';
import SearchZipCode from './components/SearchZipCode';
import ErrorMessage from './components/ErrorMessage';

class App extends Component {
    render () {
        console.log(this.props.address.cep);
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
        const CEP = this.props.address.cep;
        if(CEP === undefined) {
            return <ErrorMessage/>;
        }
        else {
            return <AddressForm />
        }
    }
}

const mapStateToProps = state => {
    return {address: state.address};
}

export default connect(mapStateToProps)(App);
