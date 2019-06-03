import React from 'react';
import { connect } from 'react-redux';

class ErrorMessage extends React.Component {
    render () {
        return (
            <small className="form-text-error">
                {this.renderErrorMessage()}
            </small>
        );
    }

    renderErrorMessage = () => {
        const { erro } = this.props.error;
        if (erro) {
            return 'Não encontrado';
        } else {
            return 'Digite o CEP corretamente';
        }
    }
}

const mapStateToProps = state => {
    return { error: state.address };
}

export default connect(mapStateToProps)(ErrorMessage);