import React from 'react';
import './index.scss';

const Chats = (props) => {      
  const showChats = (data) => {
    if(data && data.length>0){
      let list = [];
      for (let i = 0; i < data.length; i++) {
        list.push(
          <div key={i} className={(props.loginUser ==  data[i].user ? 'right' : 'left')}>
            <span>
              {data[i].user}
            </span>
            <span>&nbsp;::&nbsp;</span>
            <span>
              {data[i].message}
            </span>
          </div>
        )
      }
      return list;
    }
  }
  return (
    <div className="chatDisplay">
      {showChats(props.data)}
    </div>
    );
  };
export default Chats;
