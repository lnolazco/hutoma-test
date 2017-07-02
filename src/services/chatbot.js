import axios from 'axios';

function sendMessage(id, text) {
    const params = { q: text };
    if (id) {
        params.chatId = id;
    }
    const url = 'https://us-central1-hutoma-backend.cloudfunctions.net/chat';

    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url,
            headers: { 'Authorization': 'Basic YXBwbGljYW50Og==' },
            params
        }).then(({ status, data }) => {
            if (status === 200) {
                resolve(data);
            } else {
                reject(new Error('error'));
            }
        });
    });
}

export default {
    sendMessage
};