import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrencies from '../services/Api';
import { actionAddExpenses } from '../actions';

class Despesas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  addExpenses = async () => {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;
    const data = await getCurrencies();
    const filterData = data;
    delete filterData.USDT;
    this.setState({ exchangeRates: filterData });
    dispatch(actionAddExpenses(this.state));
    this.setState((prev) => ({ id: prev.id + 1 }));
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? 'checked' : target.value;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    this.addExpenses();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { currencies } = this.props;
    const data = [...currencies];
    const { value, description, currency, method, tag } = this.state;
    return (
      <main>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="text"
              name="value"
              data-testid="value-input"
              onChange={ this.handleChange }
              value={ value }
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              data-testid="description-input"
              onChange={ this.handleChange }
              value={ description }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              required
              id="currency"
              onChange={ this.handleChange }
              value={ currency }
            >
              <option key="0" value="" disabled hidden>escolha a moeda</option>
              {
                data.map((elem, i) => (
                  <option value={ elem } key={ i + 1 }>
                    {elem}
                  </option>
                ))
              }
            </select>
          </label>

          <label htmlFor="method">
            Método de Pagamento:
            <select
              name="method"
              required
              id="method"
              data-testid="method-input"
              onChange={ this.handleChange }
              value={ method }
            >
              <option value="" disabled hidden>Escolha a forma</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select
              name="tag"
              required
              id="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option value="" hidden>Escolha o tipo</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </main>
    );
  }
}

Despesas.propType = {
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: [...state.wallet.currencies],
});

export default connect(mapStateToProps)(Despesas);
