import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import Expenses from '../components/Expenses';
import FormEdit from '../components/FormEdit';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
    };
  }

  editExpense = (despesa) => {
    this.setState({ edit: true, despesa });
  }

  finishedEdit = (finished) => {
    if (finished) {
      this.setState({ edit: false });
    }
  }

  render() {
    const { edit, despesa } = this.state;
    return (
      <div>
        <Header />
        {edit
          ? <FormEdit edit={ despesa } finishedEdit={ this.finishedEdit } />
          : <FormExpenses />}
        <Expenses edit={ this.editExpense } />
      </div>
    );
  }
}

Wallet.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Wallet;
