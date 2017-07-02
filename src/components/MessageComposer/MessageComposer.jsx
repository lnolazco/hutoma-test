import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class MessageComposer extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        sendMessage: PropTypes.func
    };

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