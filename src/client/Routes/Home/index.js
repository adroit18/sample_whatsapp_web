import React from 'react';
import './index.scss';
import List from './components/List';
import ChatArea from './components/ChatArea';

const Header = () => (
  <div className = "mainContainer">
    <div className = "friendList"><List></List></div>
    <div className = "chatArea"><ChatArea></ChatArea></div>
  </div>
);
export default Header;
