import React from 'react';
import { connect } from 'react-redux';
import ProtoTypes from 'prop-types';
import { actionAddUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailLocal: '',
      passwordLocal: '',
      isValidEmail: false,
      isValidPass: false,
      btnDisable: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.validateData(name, value);
  };

  validateData = (name, value) => {
    const { isValidEmail, isValidPass } = this.state;
    const regexEmail = /^[\w-.]+@([\w-]+\.com)/;
    const six = 6;
    if (name === 'emailLocal') {
      if (regexEmail.test(value)) {
        this.setState({ isValidEmail: true });
        if (isValidPass) { this.setState({ btnDisable: false }); }
      } else {
        this.setState({ isValidEmail: false });
        this.setState({ btnDisable: true });
      }
    }
    if (name === 'passwordLocal') {
      if (value.length < six) {
        this.setState({ isValidPass: false });
        this.setState({ btnDisable: true });
      }
      if (value.length >= six) {
        this.setState({ isValidPass: true });
        if (isValidEmail) { this.setState({ btnDisable: false }); }
      }
    }
  };

  handleClick = () => {
    const { emailLocal } = this.state;
    const { history, email } = this.props;
    email(emailLocal);
    history.push('/carteira');
  }

  render() {
    const { emailLocal, passwordLocal, btnDisable } = this.state;
    return (
      <form className="content-form">
        <input
          type="text"
          name="emailLocal"
          onChange={ this.handleChange }
          data-testid="email-input"
          value={ emailLocal }
        />
        <input
          type="password"
          name="passwordLocal"
          onChange={ this.handleChange }
          data-testid="password-input"
          value={ passwordLocal }
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ btnDisable }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: ProtoTypes.object,
  email: ProtoTypes.string,
}.isRequire;

const mapDispatchToProps = (dispatch) => ({
  email: (email) => dispatch(actionAddUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
