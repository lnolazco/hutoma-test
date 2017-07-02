import React from 'react';
import { shallow } from 'enzyme';
import { Chat } from './Chat';

describe('Chat', () => {
    it('create component', () => {
        const props = {
            id: null, messages:[]
        };
        const chat = shallow(<Chat {...props} />);
        expect(chat.hasClass('chat'));
    });
});