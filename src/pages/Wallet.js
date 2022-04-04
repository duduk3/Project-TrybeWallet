import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header />
        <FormExpenses />
        <Expenses history={ history } />
      </div>
    );
  }
}

Wallet.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Wallet;
