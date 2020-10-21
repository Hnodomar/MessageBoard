import React from 'react';
import './App.css';
import Header from '../Header/Header';
import MessageList from '../MessageList/MessageList';
import Input from '../Input/Input';

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <MessageList />
      <Input />
    </div>
  );
}

export default App;
