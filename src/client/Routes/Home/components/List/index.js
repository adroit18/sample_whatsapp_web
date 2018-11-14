import React from 'react';
import './index.scss';
import ListItem from './../ListItem';



const List = (props) => {      
  const createListItem = (data) => {
    data  = JSON.parse(data);
    if(data && data.length>0){
      let list = [];
      for (let i = 0; i < data.length; i++) {
        if(data[i].email != props.loginUser)
          list.push(
            <ListItem 
              key={i} 
              user={data[i]}
              onChangeSelectedUser = {props.onChangeSelectedUser}
              loginUser = {props.loginUser}
            />
          )
      }
      return list;
    }
  }

  return (
    <div >
      <h2>Chat List</h2>
      {createListItem(props.data)}
    </div>
    );
  };

export default List;