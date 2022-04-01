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
      currencies: [...Object.keys(action.currencies)].filter((key) => key !== 'USDT'),
    };
  case ADD_EXPENSES:
    return {
      ...state,
      wallet: {
        expenses: [Object.keys(action.expenses)],
      },
    };
  default:
    return state;
  }
};

export default wallet;
