import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const despesas = expenses;
    return (
      <header>
        <div>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            {
              despesas
                .reduce((acc, elem) => {
                  const sum = parseFloat(elem.value);
                  const cotation = parseFloat(elem.exchangeRates[elem.currency].ask);
                  return acc + (sum * cotation);
                }, 0).toFixed(2)
            }

          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
