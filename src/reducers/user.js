// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      user: {
        email: action.user.state,
      },
    };
  default:
    return state;
  }
};

export default user;
