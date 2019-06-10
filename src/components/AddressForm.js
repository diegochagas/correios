import React from 'react';
import './AddressForm.scss';
import { connect } from 'react-redux';
import MapContainer from './MapContainer';
import { fetchCoordinates } from '../actions';

class AddressForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { zipcode: '' };
    }

    render () {
        const { logradouro, complemento, bairro, localidade, uf, cep } = this.props.address;
        return (
            <div className="address-form">
                <form onSubmit={this.showMap}>
                    <div className="form-group">
                        <label>CEP</label>
                        <input value={cep} disabled name="cep" ref="CEP" />
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
                        {this.renderStates(uf)}
                    </div>
                    <button className="btn show-map-button">Exibir no mapa</button>
                </form>
                <div className="map">
                    {this.renderMap()}
                </div>
            </div>
        );
    }

    showMap = event => {
        event.preventDefault();
        const CEP = this.refs.CEP.value;
        this.props.fetchCoordinates(CEP);
        this.setState({ zipcode: CEP });
    }

    renderMap = () => {
        const CEP = this.state.zipcode;
        if (CEP === '') {
            return <small></small>
        } else {
            return <MapContainer />;
        }
    }

    renderStates = uf => {
        const brazilianStates = [
            {initials: "AC", name: "Acre"},
            {initials: "AL", name: "Alagoas"},
            {initials: "AP", name: "Amapá"},
            {initials: "AM", name: "Amazonas"},
            {initials: "BA", name: "Bahia"},
            {initials: "CE", name: "Ceará"},
            {initials: "DF", name: "Distrito Federal"},
            {initials: "ES", name: "Espírito Santo"},
            {initials: "GO", name: "Goiás"},
            {initials: "MA", name: "Maranhão"},
            {initials: "MT", name: "Mato Grosso"},
            {initials: "MS", name: "Mato Grosso do Sul"},
            {initials: "MG", name: "Minas Gerais"},
            {initials: "PA", name: "Pará"},
            {initials: "PB", name: "Paraíba"},
            {initials: "PR", name: "Paraná"},
            {initials: "PE", name: "Pernambuco"},
            {initials: "PI", name: "Piauí"},
            {initials: "RJ", name: "Rio de Janeiro"},
            {initials: "RN", name: "Rio Grande do Norte"},
            {initials: "RS", name: "Rio Grande do Sul"},
            {initials: "RO", name: "Rondônia"},
            {initials: "RR", name: "Roraima"},
            {initials: "SC", name: "Santa Catarina"},
            {initials: "SP", name: "São Paulo"},
            {initials: "SE", name: "Sergipe"},
            {initials: "TO", name: "Tocantins"}
        ];
        const brazilianState = brazilianStates.find(state => state.initials === uf); 
        const selectedUF = brazilianState ? brazilianState.initials : '';
        return (
            <select id="uf" disabled defaultValue={selectedUF}>
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
}

const mapStateToprops = state => {
    return { address: state.address }
}

export default connect(mapStateToprops, { fetchCoordinates })(AddressForm);
