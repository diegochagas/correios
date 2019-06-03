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
                        <input value={uf} disabled name="uf" />
                    </div>
                    <button className="btn show-map-button">Exibir mapa</button>
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
            // return <small>Não foi possível exibir mapa com o endereço informado.</small>
        }
    }
}

const mapStateToprops = state => {
    return { address: state.address }
}

export default connect(mapStateToprops, { fetchCoordinates })(AddressForm);
