import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Despesas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: {
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
        exchangeRates: {},
      },
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? 'checked' : target.value;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { expenses: { value, description, currency, method, tag } } = this.state;
  }

  render() {
    const { currencies } = this.props;
    const data = [...currencies];
    console.log(typeof currencies);
    const { expenses: { value, description, currency, method, tag } } = this.state;
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
              {
                data.map((elem, i) => (
                  <option value={ elem } key={ i }>
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
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
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
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>

          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar Depesa
          </button>
        </form>
      </main>
    );
  }
}

Despesas.propType = {
  currencies: PropTypes.objectOf(PropTypes.array),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: [...state.wallet.currencies],
});

export default connect(mapStateToProps)(Despesas);
