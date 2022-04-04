import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionRemoveExpense, actionThunkCurrencies } from '../actions';

class Expenses extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // wallet();
    dispatch(actionThunkCurrencies());
  }

  editExpense = (despesa) => {
    const { history } = this.props;
    history.push({
      pathname: '/edit-expense',
      state: { despesa },
    });
  }

  delExpense = (despesa) => {
    const { expenses, dispatch } = this.props;
    const delExpense = expenses.filter((elem) => elem !== despesa);
    dispatch(actionRemoveExpense(delExpense));
  }

  render() {
    const { expenses } = this.props;
    const despesas = [...expenses];
    return (
      <main>
        <table>
          <thead>

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
          </thead>
          <tbody>

            { despesas.length > 0
              && despesas.map((despesa) => (
                <tr key={ despesa.id }>
                  <td>{despesa.description}</td>
                  <td>{despesa.tag}</td>
                  <td>{despesa.method}</td>
                  <td>{parseFloat(despesa.value).toFixed(2)}</td>
                  <td>
                    {despesa.currency === 'USD' && 'Dólar Comercial'}
                    {despesa.currency === 'EUR' && 'Euro'}
                    {despesa.currency !== 'USD'
                      && despesa.currency !== 'EUR'
                      && despesa.currency}
                  </td>
                  <td>
                    {(parseFloat(despesa.exchangeRates[despesa.currency]
                      .ask)).toFixed(2)}
                  </td>
                  <td>
                    {
                      (parseFloat(despesa.value)
                        * (parseFloat(despesa.exchangeRates[despesa.currency]
                          .ask))).toFixed(2)
                    }
                  </td>
                  <td>
                    Real
                  </td>
                  <td>
                    <button
                      type="button"
                      key={ despesa.id }
                      onClick={ () => this.editExpense(despesa) }
                      data-testid="edit-btn"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={ () => this.delExpense(despesa) }
                      data-testid="delete-btn"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.array,
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Expenses);
