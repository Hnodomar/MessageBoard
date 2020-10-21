import React from 'react';
import './MessageList.css';
import Message from '../Message/Message';
import messageBoard from '../../utils/messageboard';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.message,
        }
    }
    componentDidMount() {
        //console.log("mounted");
        messageBoard.getMessages().then(jsonResponse => {
            console.log(jsonResponse.messages);
            this.setState({messages: jsonResponse.messages});
        });
    }

    renderMessages() {
        //console.log(this.state.messages[0]);
        return this.state.messages.map(message => {
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