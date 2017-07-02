import React, { PureComponent } from 'react';
import './styles.css';

class MessageComposer extends PureComponent {
    sendMessage = event => {
        event.preventDefault();
        const text = this.text.value;
        this.text.value = '';
        this.props.sendMessage(this.props.id, text);
    }

    render() {
        return (
            <form action="submit" onSubmit={this.sendMessage}>
                <input
                    className="message-composer"
                    type="text"
                    ref={text => {this.text = text}}
                    placeholder="Type a message..." />
            </form>
        );
    }
}

export default MessageComposer;