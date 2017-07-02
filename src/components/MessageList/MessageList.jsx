import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class MessageList extends PureComponent {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            me: PropTypes.bool
        }))
    };

    renderMessage({ text, me }, index) {
        const classes = `message-wrapper ${ me ? 'me' : 'bot' }`;

        return <div key={index} className={classes}>
            { !me && <div className="wrapper-icon" /> }
            <div className="wrapper-text">{text}</div>
        </div>;
    }

    render() {
        return <div>{this.props.messages.map(this.renderMessage)}</div>;
    }
}

export default MessageList;
