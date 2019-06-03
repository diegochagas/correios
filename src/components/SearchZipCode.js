import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchCEP } from '../actions';
import './SearchZipCode.scss';

class SearchZipCode extends React.Component {
    constructor (props) {
        super(props);
        this.state = { value: '' };
    }

    render () {
        return (
            <form className="address-form" onSubmit={this.onSearchCEP}>
                <label className="search-label">Busca endereço</label>
                <input 
                    className="search-field"
                    type="text"
                    onChange={this.onBuildCEPMask}
                    ref="CEP" 
                    placeholder="00000-000"
                />
                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        );
    }
    
    onBuildCEPMask = () => {
        setTimeout(() => {
            let value = this.refs.CEP.value.replace(/\D/g, "");
            value = value.substring(0, 8);
            value = value.replace(/(\d{5})(\d{3})/, "$1-$2");
            this.refs.CEP.value = value;
            this.setState({ value });
        }, 1);
    }

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