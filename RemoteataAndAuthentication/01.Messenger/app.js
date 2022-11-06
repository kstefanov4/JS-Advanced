function attachEvents() {
    document.getElementById('submit').addEventListener('click', submitNewMessage);
    document.getElementById('refresh').addEventListener('click', getAllMessage);
}

async function submitNewMessage() {
    let name = document.querySelector('input[name="author"]').value;
    let content = document.querySelector('input[name="content"]').value;

    let body = {
        author: name,
        content: content,
    }

    let response = await fetch('http://localhost:3030/jsonstore/messenger',{
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(body)
    });

    getAllMessage();
}

async function getAllMessage() {

    let response = await fetch('http://localhost:3030/jsonstore/messenger');
    let data = await response.json();
    renderMessages(data);
}

function renderMessages(data) {
    let chats = Object.values(data).map(x => `${x.author}: ${x.content}`).join("\n");

    document.getElementById('messages').textContent = chats;
}

attachEvents();