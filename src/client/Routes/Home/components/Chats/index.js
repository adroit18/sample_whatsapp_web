import React from 'react';
import './index.scss';

const Chats = (props) => {      
  const showChats = (data) => {
    if(data && data.length>0){
      let list = [];
      for (let i = 0; i < data.length; i++) {
        list.push(
          <div key={i} className={(props.loginUser ==  data[i].from ? 'right' : 'left')}>
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
    <React.Fragment>
      <div className="chatDisplay">
        {showChats(props.data)}
      </div>
    </React.Fragment>
    );
  };
export default Chats;
