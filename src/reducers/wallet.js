// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_CURRENCIES, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: [...Object.values(action.currencies)]
        .filter((key) => key.codein !== 'USDT'),
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...Object.values(action.expenses)]
        .filter((key) => key.codein !== 'BRLT'),
    };
  default:
    return state;
  }
};

export default wallet;
