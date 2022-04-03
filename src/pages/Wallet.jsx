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
