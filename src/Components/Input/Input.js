import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="InputContainer">
                <h2>Post a message!</h2>
                <textarea id="messageInput"></textarea>
                <button onClick={this.props.onclick}>POST</button>
            </div>
        );
    }
}

export default Input;