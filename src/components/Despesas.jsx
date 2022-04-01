import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import getCurrencies from '../services/Api';

class Despesas extends React.Component {
  render() {
    const { currencies } = this.props;
    const data = [...currencies];
    console.log(currencies);
    return (
      <main>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="text"
              name="value"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="currencies">
            Moeda:
            <select
              name="currencies"
              required
              id="currencies"
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

          <label htmlFor="payment">
            Método de Pagamento:
            <select
              name="payment"
              required
              id="payment"
              data-testid="method-input"
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="payment">
            Categoria:
            <select
              name="category"
              required
              id="category"
              data-testid="tag-input"
            >
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>

        </form>
      </main>
    );
  }
}

Despesas.propType = {
  currencies: PropTypes.arrayOf,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Despesas);
