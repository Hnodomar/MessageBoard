import React from 'react';
import './MessageList.css';
import Message from '../Message/Message';
import messageBoard from '../../utils/messageboard';

class MessageList extends React.Component {
    componentDidMount() {
        this.props.getmessages();
    }

    renderMessages() {
        //console.log(this.state.messages[0]);
        return this.props.message.map(message => {
            return <Message messagep={`${message.messagetext}`} key={message.id} />
        });
    }
    render() {
        return(
            <div className="MessageListContainer">
                {this.renderMessages()}
            </div>
        );
    }
}

export default MessageList;