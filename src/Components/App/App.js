import React from 'react';
import './App.css';
import Header from '../Header/Header';
import MessageList from '../MessageList/MessageList';
import Input from '../Input/Input';
import messageBoard from '../../utils/messageboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }
  getMessages() {
    messageBoard.getMessages().then(jsonResponse => {
      //console.log(jsonResponse.messages);
      this.setState({messages: jsonResponse.messages});
    });
  }
  handleClick() {
    const currentMessages = this.state.messages;
    const inputField = document.getElementById("messageInput");
    if (inputField.value) {
        messageBoard.postMessage(inputField.value).then(response => {
          currentMessages.push(response.messagetext);
          this.setState({messages: currentMessages});
        });
        //console.log(this.state.messages);
        inputField.value = "";
    }
  }

  render() {
    return (
      <div className="AppContainer">
        <Header />
        <MessageList message={this.state.messages} getmessages={this.getMessages} />
        <Input onclick={this.handleClick} />
      </div>
    );
  }
}

export default App;
