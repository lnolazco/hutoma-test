import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import chatbot from './chatbot';

describe('Chatbot', () => {
    it('returns data when sendMessage is called', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet('https://us-central1-hutoma-backend.cloudfunctions.net/chat').reply(200, data);

        chatbot.sendMessage(0, 'any').then(response => {
            expect(response).toEqual(data);
            done();
        });
    });
});
