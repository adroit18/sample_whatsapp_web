import React from 'react';
import './index.scss';

const ListItem = (props) => (
  <div className="userCard"  onClick={() => props.onChangeSelectedUser(props.loginUser,props.user.email)}>
      {props.user.username}
  </div>
);
export default ListItem;

