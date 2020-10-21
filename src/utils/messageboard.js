const messageBoard = {};
const baseUrl = `http://localhost:4000/api`;

messageBoard.getMessages = () => {
    const url = `${baseUrl}`;
    return fetch(url).then(response => {
        if (!response.ok) {
            return new Promise(resolve => resolve([1, 2]));
        }
        return response.json().then(jsonResponse => {
            return jsonResponse;
        });
    })
};

messageBoard.postMessage = (message) => {
    //console.log(JSON.stringify({message: message}));
    if (!message)
        return new Promise(resolve => resolve(null));
    const url = `${baseUrl}`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({messagetxt: message})
    };
    return fetch(url, options).then(response => {
        if (!response.ok)
            return new Promise(resolve => resolve(null));
        else
            return response.json().then(jsonResponse => {
                return jsonResponse;
            });
    });
}

export default messageBoard;