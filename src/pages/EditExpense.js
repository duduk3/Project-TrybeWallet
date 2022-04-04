import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormEdit from '../components/FormEdit';

class EditExpense extends React.Component {
  render() {
    const { history, location: { state: { despesa } } } = this.props;
    return (
      <FormEdit despesa={ despesa } history={ history } />
    );
  }
}

EditExpense.propTypes = {
  expenses: PropTypes.array,
  despesa: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(EditExpense);
