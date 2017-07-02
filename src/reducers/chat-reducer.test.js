import reducer from './chat-reducer';
import * as types from '../actions/types';

describe('Chat reducer', () => {
    it('add a new message to the state when handles send message action', () => {
        const state = { id: null, messages: [] };
        const expected = { id: null, messages: [ { text: 'hi', me: true } ] };
        const action = {
            type: types.SEND_MESSAGE,
            text: 'hi',
            id: null
        };
        const newState = reducer(state, action);
        expect(newState).toEqual(expected);
    });

    it('add a new message to the state when handles receive message action', () => {
        const state = { id: null, messages: [] };
        const expected = { id: 1, messages: [ { text: 'hi', me: false } ] };
        const action = {
            type: types.RECEIVE_MESSAGE,
            text: 'hi',
            id: 1
        };
        const newState = reducer(state, action);
        expect(newState).toEqual(expected);
    });
});
