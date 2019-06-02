import React from 'react';
import './AddressForm.scss';
import { connect } from 'react-redux';

class AddressForm extends React.Component {
    render () {

        const { logradouro, complemento, bairro, localidade, uf } = this.props.address;

        return (
            <div className="address-form">
                <div className="form-group">
                    <label>Logradouro</label>
                    <input value={logradouro} disabled/>
                </div>
                <div className="form-group">
                    <label>Número</label>
                    <input />
                </div>
                <div className="form-group">
                    <label>Complemento</label>
                    <input value={complemento} disabled/>
                </div>
                <div className="form-group">
                    <label>Bairro</label>
                    <input value={bairro} disabled/>
                </div>
                <div className="form-group">
                    <label>Cidade</label>
                    <input value={localidade} disabled/>
                </div>
                <div className="form-group">
                    <label>Estado</label>
                    <input value={uf} disabled/>
                </div>
            </div>
        );
    }
}

const mapStateToprops = state => {
    return { address: state.address }
}

export default connect(mapStateToprops)(AddressForm);
