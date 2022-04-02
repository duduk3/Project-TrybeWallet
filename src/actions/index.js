import getCurrencies from '../services/Api';

// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const WALLET_API = 'WALLET_API';

export const actionAddUser = (email) => ({ type: ADD_USER, email });
export const actionWallet = () => ({ type: WALLET_API });
export const actionAddCurrencies = (currencies) => ({ type: ADD_CURRENCIES, currencies });
export const actionAddExpenses = (expense) => ({ type: ADD_EXPENSES, expense });

export const actionThunkCurrencies = () => async (dispatch) => {
  dispatch(actionWallet());
  try {
    const wallet = await getCurrencies();
    dispatch(actionAddCurrencies(wallet));
  } catch (error) {
    console.log(error);
  }
};
