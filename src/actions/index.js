// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_WALLET = 'ADD_WALLET';

export const actionAddUser = (data) => ({ type: ADD_USER, data });
export const actionAddWallet = (data) => ({ type: ADD_WALLET, data });
