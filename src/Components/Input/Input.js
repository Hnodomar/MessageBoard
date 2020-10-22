import React from 'react';
import './Input.css';

class Input extends React.Component {
    componentDidMount() {
        const button = document.getElementById('postButton');
        window.addEventListener("keyup", event => {
            if (event.keyCode === 13)
                button.click();
        });
    }
    render() {
        return (
            <div className="InputContainer">
                <h2>Post a message!</h2>
                <textarea id="messageInput"></textarea>
                <button id="postButton" onClick={this.props.onclick}>POST</button>
            </div>
        );
    }
}

export default Input;