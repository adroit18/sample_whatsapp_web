import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './index.scss';
import List from './components/List';
import ChatArea from './components/ChatArea';

import { userSelectedtoChat,fetchCurrentChatsBetween } from './store/actions';

const Home = (props) => {
  if(!props.loginUser)
    return <Redirect to="/" />

  return(
    <div className = "mainContainer">
      <div className = "friendList">
        <List 
        data={localStorage.getItem('users')}
        loginUser = {props.loginUser}
        onChangeSelectedUser = {props.onChangeSelectedUser}
        />
      </div>
      {props.selectedUser?
      <div className = "chatArea">
        <ChatArea 
          loginUser = {props.loginUser}
          selectedUser = {props.selectedUser}
          currentChats = {props.currentChats}
          fetchChats = {props.fetchChats}
          onChangeSelectedUser = {props.onChangeSelectedUser}
        />
      </div>:<h2 className="chooseContact">Choose a contact</h2>}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    loginUser: state.loginReducer.loginUser,
    selectedUser: state.homeReducer.selectedUser,
    currentChats: state.homeReducer.currentChats
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchChats: (loginUser,selectedUser) => {
      dispatch(fetchCurrentChatsBetween(loginUser,selectedUser));
    },
    onChangeSelectedUser: (loginUser,userName) => {
      dispatch(fetchCurrentChatsBetween(loginUser,userName))
      dispatch(userSelectedtoChat(userName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
