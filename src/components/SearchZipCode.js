import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ErrorMessage from './ErrorMessage';

class SearchZipCode extends React.Component {
    render () {
        return (
            <form className="address-form">
                <label>Busca endereço</label>
                <input />
                <ErrorMessage/>
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        );
    }
}

export default SearchZipCode;