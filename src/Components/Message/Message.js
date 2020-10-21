import React from 'react';
import './Message.css';

class Message extends React.Component {
    render() {
        return(
            <div className="MessageContainer">
                <p>{this.props.messagep}</p>
            </div>
        );
    }
}

export default Message;