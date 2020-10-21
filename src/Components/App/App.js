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
  }

  handleClick() {
    const inputField = document.getElementById("messageInput");
    if (inputField.value) {
        messageBoard.postMessage(inputField.value).then(response => {
          this.state.messages.push(response);
        });
        console.log(this.state.messages);
        inputField.value = "";
    }
  }

  render() {
    return (
      <div className="AppContainer">
        <Header />
        <MessageList message={this.state.messages} />
        <Input onclick={this.handleClick} />
      </div>
    );
  }
}

export default App;
