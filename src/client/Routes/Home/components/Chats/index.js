import React from 'react';
import './index.scss';

const Chats = (props) => {      
  const showChats = (data) => {
    if(data && data.length>0){
      let list = [];
      for (let i = 0; i < data.length; i++) {
        list.push(<div key={i}>{data[i]}</div>)
      }
      return list;
    }
  }
  return (
    <div>
      {showChats(props.data)}
    </div>
    );
  };
export default Chats;
