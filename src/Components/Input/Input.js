import React from 'react';
import './Input.css';
import messageBoard from '../../utils/messageboard';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const inputField = document.getElementById("messageInput");
        if (inputField.value) {
            messageBoard.postMessage(inputField.value).then();
            inputField.value = "";
        }
    }

    render() {
        return (
            <div className="InputContainer">
                <h2>Post a message!</h2>
                <textarea id="messageInput"></textarea>
                <button onClick={this.handleClick}>POST</button>
            </div>
        );
    }
}

export default Input;