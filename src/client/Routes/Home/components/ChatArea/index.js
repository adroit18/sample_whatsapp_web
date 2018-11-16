import React,{Component} from 'react';
import socketIOClient from 'socket.io-client'
import './index.scss';
import Chats from './../Chats/index';

const socket = socketIOClient('http://localhost:8080');


class ChartArea extends Component {
  constructor(props) {
      super(props)
      this.state = {
          message: '', // Contains login form data
      }
      socket.on('newMessage',(data)=>{
        let currentChat = JSON.parse(localStorage.getItem('chatData'));
        currentChat[data.from][data.to].push(data);
        currentChat[data.to][data.from].push(data);
        localStorage.setItem('chatData', JSON.stringify(currentChat));
        this.props.fetchChats(this.props.loginUser,this.props.selectedUser);
      });
  }
  handleInputChange = (event) => {
    const target = event.target;
    this.setState({
      message : target.value
    });
  } 
  sendMessage = (msg)=>{
    if(this.state.message){
      socket.emit('messageSend', {
          "from":this.props.loginUser,
          "to":this.props.selectedUser,
          "message":this.state.message
        }
      )
      this.setState({
        message : ''
      });
    };
  }
  render(){
    return(
      <div>
          <h2>Chart Here.</h2>
          <Chats data={this.props.currentChats} loginUser={this.props.loginUser}></Chats>
          <input className="chatInput" type="text" name="message" value={this.state.message}  onChange={this.handleInputChange}/>
          <button className="chatSend" onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}

export default ChartArea;
