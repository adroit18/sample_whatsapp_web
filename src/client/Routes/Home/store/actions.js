import * as types from './types';
export function userSelectedtoChat(userName) {
  return { type:types.CHANGE_SELECTED_USER,payload: userName}
}
export function fetchCurrentChatsBetween(user1,user2) {
  return { 
    type:types.FETCH_CHATS,
    payload:!!user1 && !!user2 ?JSON.parse(localStorage.getItem('chatData'))[user1][user2]:[]
  }
}