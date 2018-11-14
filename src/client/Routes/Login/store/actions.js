import * as types from './types';

export function setLoginUser(user) {
  return { type:types.SET_LOGIN_USER,payload: user.email}
}