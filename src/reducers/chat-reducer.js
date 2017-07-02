import * as types from '../actions/types';

const initState = {
    id: null,
    messages: []
};

const getNewState = (state, me, id, text) => {
    const newMessage = { me, text };

    return {
        id: state.id !== id ? id : state.id,
        messages: [
            ...state.messages,
            newMessage
        ]
    };
};

export default (state = initState, action) => {
    switch (action.type) {
    case types.SEND_MESSAGE:
        return getNewState(state, true, action.id, action.text);
    case types.RECEIVE_MESSAGE:
        return getNewState(state, false, action.id, action.text);
    default:
        return state;
    }
};