import React,{Component} from 'react';
import socketIOClient from 'socket.io-client'
import './index.scss';
import Chats from './../Chats/index';
import { fetchCurrentChatsBetween } from './../../store/actions';

const socket = socketIOClient('http://localhost:8080');


class ChartArea extends Component {
  constructor(props) {
      super(props)
      this.state = {
          message: '', // Contains login form data
      }
      socket.on('newMessage',(data)=>{
        let currentChat = JSON.parse(localStorage.getItem('chatData'));
        currentChat[this.props.loginUser][this.props.selectedUser].push(data);
        currentChat[this.props.selectedUser][this.props.loginUser].push(data);
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
      socket.emit('messageSend', this.state.message)
      this.setState({
        message : ''
      });
    };
  }
  render(){
    return(
      <div>
          <h2>Chart Here.</h2>
          <Chats data={this.props.currentChats} ></Chats>
          <input className="chatInput" type="text" name="message" value={this.state.message}  onChange={this.handleInputChange}/>
          <button className="chatSend" onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}

export default ChartArea;
