import * as types from './types';
import * as initialState from './state';
export default function homeReducer(state = initialState.default, action) {
    switch (action.type) {
      case types.CHANGE_SELECTED_USER:
        return {
          ...state,
          selectedUser: action.payload
        }
        case types.FETCH_CHATS:
          return {
            ...state,
            currentChats: action.payload
          };
      default:
        return state
    }
  };