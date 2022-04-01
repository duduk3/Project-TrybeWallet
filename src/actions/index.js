// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const actionAddUser = (email) => ({ type: ADD_USER, email });
export const actionAddCurrencies = (currencies) => ({ type: ADD_CURRENCIES, currencies });
export const actionAddExpenses = (expenses) => ({ type: ADD_EXPENSES, expenses });
