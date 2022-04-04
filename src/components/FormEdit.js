import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionEditExpense } from '../actions';

class FormEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { despesa } = this.props;
    this.setState({
      value: despesa.value,
      description: despesa.description,
      currency: despesa.currency,
      method: despesa.method,
      tag: despesa.tag,
    });
  }

  validateInputs = () => {
    const { value, description, currency, method, tag } = this.state;
    if (parseFloat(value) === undefined) {
      return 'Erro: decimal não aceita vírgula!!!';
    }
    if (value === '' || description === ''
    || currency === '' || method === '' || tag === '') {
      return 'Erro: algum campo está vazio!!!';
    }
  }

  editExpense = async () => {
    const { dispatch, despesa, expenses, history } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const newExpense = despesa;
    if (value !== despesa.value || description !== despesa.description
      || currency !== despesa.currency || method !== despesa.method
      || tag !== despesa.tag) {
      newExpense.value = value;
      newExpense.description = description;
      newExpense.method = method;
      newExpense.currency = currency;
      newExpense.tag = tag;
      const allExpenses = expenses;
      allExpenses[despesa] = newExpense;
      dispatch(actionEditExpense(allExpenses));
    }
    history.push('/carteira');
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? 'checked' : target.value;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    if (this.validateInputs === 'Erro: decimal não aceita vírgula!!!'
      || this.validateInputs() === 'Erro: algum campo está vazio!!!') {
      return;
    }
    this.editExpense();
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const data = [...currencies];
    return (
      <main>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="text"
              name="value"
              placeholder="0.00"
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
              <option value="" disabled hidden>escolha a forma</option>
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
              <option value="" hidden>escolha o tipo</option>
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
            data-testid="edit-btn"
          >
            Editar despesa
          </button>
        </form>
      </main>
    );
  }
}

FormEdit.propTypes = {
  expenses: PropTypes.array,
  currencies: PropTypes.array,
  despesa: PropTypes.object,
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(FormEdit);
