import * as types from './types';
import * as initialState from './state';
export default function loginReducer(state = initialState.default, action) {
    switch (action.type) {
      case types.SET_LOGIN_USER:
        return {...state, loginUser: action.payload};
      default:
        return state
    }
  }