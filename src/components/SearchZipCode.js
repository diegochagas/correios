import React from 'react';
import './SearchZipCode.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MapContainer from './MapContainer';
import { loadAddress, fetchCoordinates } from '../actions';
import brazilianStates from '../apis/BrazilianStatesAPI';

class SearchZipCode extends React.Component {
    constructor(props) {
        super(props);
        this.CEP = React.createRef();
        this.onChangeCEP = this.onChangeCEP.bind(this);
        this.onSearchCEP = this.onSearchCEP.bind(this);
    }

    render () {
        const { isLoading, address, error } = this.props;
        const { logradouro, complemento, bairro, localidade, uf, cep } = address;
        return (
            <div className="search-zip-code" data-test="search-zip-code">
                <header className="search-header">        
                    <form className="" onSubmit={this.onSearchCEP}>
                        <label className="search-label">Busca endereço</label>
                        <input 
                            className="search-field"
                            type="text"
                            onChange={this.onChangeCEP}
                            ref={this.CEP} 
                            placeholder="00000-000"
                            data-test="search-field"
                        />
                        <button className="btn search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </header>
                { ( error || address.erro ) && 
                <div className="error">
                    {this.errorMessageHandler(error, address.erro)}
                </div>}
                { isLoading &&
                <div className="spinner">
                    <div>Procurando...</div>
                    <progress></progress>
                </div> }
                { !(!address.cep || error !== null || address.erro) && 
                <div className="address-form">
                    <div className="address-fields">
                        <div className="form-group">
                            <label>CEP</label>
                            <input value={cep} disabled name="cep" />
                        </div>
                        <div className="form-group">
                            <label>Logradouro</label>
                            <input value={logradouro} disabled name="logradouro" />
                        </div>
                        <div className="form-group">
                            <label>Número</label>
                            <input name="numero" />
                        </div>
                        <div className="form-group">
                            <label>Complemento</label>
                            <input value={complemento} disabled name="complemento" />
                        </div>
                        <div className="form-group">
                            <label>Bairro</label>
                            <input value={bairro} disabled name="bairro" />
                        </div>
                        <div className="form-group">
                            <label>Cidade</label>
                            <input value={localidade} disabled name="localidade" />
                        </div>
                        <div className="form-group">
                            <label>Estado</label>
                            {this.renderBrazilianStates(uf)}
                        </div>
                    </div>
                    <div className="map">
                        <MapContainer />
                    </div>
                </div> }
            </div>
        );
    }
    
    selectUFFromStatesList (uf) {
        const brazilianState = brazilianStates.find(state => state.initials === uf); 
        return brazilianState ? brazilianState.initials : '';
    }
    
    renderBrazilianStates (uf) { 
        const selectedUF = this.selectUFFromStatesList(uf)
        return (
            <select id="uf" disabled value={selectedUF} data-test='select-uf'>
                {brazilianStates.map(state => {
                    return (
                        <option key={state.initials} value={state.initials}>
                            {state.name}
                        </option>
                    )
                })}
            </select>
        );
    }
    
    onChangeCEP(event) {
        this.CEP.current = event.target.value;
    }
    
    onSearchCEP (event) {
        event.preventDefault();
        const CEP = this.CEP.current;
        this.props.loadAddress(CEP);
        this.loadMap(CEP);
    }
    
    errorMessageHandler (error, erro) {
        const notFound = erro;
        if (notFound && error === null) {
            return errorMessages.notFoundMessage;
        }
        else if (error === errorMessages.networkErrorMessage) {
            return errorMessages.invalidZipCodeMessage;
        }
        else return error;
    }
    
    loadMap (CEP) {
        this.props.fetchCoordinates(CEP);
    }
}

export const errorMessages = {
    notFoundMessage: 'O CEP consultado não foi encontrado na base de dados.',
    networkErrorMessage: "Error: Network Error",
    invalidZipCodeMessage: "CEP de formato inválido, digite novamente."
}

const mapStateToProps = ({ isLoading, address, loadAddress, error }) => ({
    isLoading, address, loadAddress, error 
});

const mapDispatchToProps = dispatch => ({
    loadAddress: CEP => dispatch(loadAddress(CEP)),
    fetchCoordinates: CEP => dispatch(fetchCoordinates(CEP))
});
 
export default connect( mapStateToProps, mapDispatchToProps)(SearchZipCode);
