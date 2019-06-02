import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchCEP } from '../actions';

class SearchZipCode extends React.Component {
    constructor (props) {
        super(props);
        this.state = { value: '' };
    }

    render () {
        return (
            <form className="address-form" onSubmit={this.onSearchCEP}>
                <label>Busca endereço</label>
                <input type="text" value={this.state.value} onChange={this.onHandleChange} />
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        );
    }

    onHandleChange = event => this.setState({ value: event.target.value });

    onSearchCEP = event => {
        event.preventDefault();
        const CEP = this.state.value;
        if(CEP === '') {
            alert('Digite um CEP');
        } else {
            this.props.fetchCEP(CEP);
        }
    }
}

export default connect(null, { fetchCEP })(SearchZipCode);