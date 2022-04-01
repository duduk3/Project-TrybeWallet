import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionThunkCurrencies } from '../actions';
import Header from '../components/Header';
import Despesas from '../components/Despesas';

class Wallet extends React.Component {
  componentDidMount() {
    const { wallet } = this.props;
    wallet();
  }

  render() {
    return (
      <div>
        <Header />
        <Despesas />
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  wallet: () => dispatch(actionThunkCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
