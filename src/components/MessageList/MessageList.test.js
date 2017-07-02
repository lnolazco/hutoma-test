import React from 'react';
import { shallow } from 'enzyme';
import MessageList from './MessageList';

describe('Message List', () => {
    it('creates a message item for each message', () => {
        const msg = { me: false, text: '' };
        const messages = [ msg, msg ];

        const messageList = shallow(<MessageList messages={messages} />);
        expect(messageList.find('.message-wrapper').length).toEqual(2);
    });
});