import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionThunkCurrencies } from '../actions';
import Header from '../components/Header';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { wallet } = this.props;
    wallet();
  }

  render() {
    return (
      <div>
        <Header />
        <Expenses />
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </table>
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  wallet: () => dispatch(actionThunkCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
