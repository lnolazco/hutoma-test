import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MessageList from '../MessageList';
import MessageComposer from '../MessageComposer';
import { sendMessage } from '../../actions/chat-actions';
import './styles.css';

export class Chat extends Component {
    static propTypes = {
        id: PropTypes.string,
        messages: PropTypes.array
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        const node = this.refs.endmessages;
        node.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        const { messages, sendMessage } = this.props;

        return (
            <div className="chat">
                <div>
                    <h3 className="title">Hu:toma</h3>
                </div>
                <div className="inner">
                    <div className="content">
                        <MessageList messages={messages} />
                        <div ref="endmessages"></div>
                    </div>
                </div>
                <MessageComposer sendMessage={sendMessage} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.chat.id,
        messages: state.chat.messages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (chatId, text) => dispatch(sendMessage(chatId, text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
