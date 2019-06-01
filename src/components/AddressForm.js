import React from 'react';
import './AddressForm.scss';

class AddressForm extends React.Component {
    render () {
        return (
            <div className="address-form">
                <div className="form-group">
                    <label>Logradouro</label>
                    <input disabled/>
                </div>
                <div className="form-group">
                    <label>Número</label>
                    <input />
                </div>
                <div className="form-group">
                    <label>Complemento</label>
                    <input disabled/>
                </div>
                <div className="form-group">
                    <label>Bairro</label>
                    <input disabled/>
                </div>
                <div className="form-group">
                    <label>Cidade</label>
                    <input disabled/>
                </div>
                <div className="form-group">
                    <label>Estado</label>
                    <input disabled/>
                </div>
            </div>
        );
    }
}

export default AddressForm;
