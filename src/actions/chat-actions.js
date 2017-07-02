import * as types from './types';
import chatbot from '../services/chatbot';

function sendMessage(id, text){
    return dispatch => {
        dispatch(sendingMessage(id, text));

        chatbot.sendMessage(id, text)
            .then(data => dispatch(receiveMessage(data.chatId, data.result.answer)));
    }
}

function sendingMessage(id, text) {
    return {
        type: types.SEND_MESSAGE,
        text,
        id
    };
}

function receiveMessage(id, text) {
    return {
        type: types.RECEIVE_MESSAGE,
        text,
        id
    };
}

export { sendMessage };
