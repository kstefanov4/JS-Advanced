function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', load);
    document.getElementById('btnCreate').addEventListener('click', create);
}

async function create() {
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;
    let body = {
        "person": person,
        "phone": phone
    }

    let response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    let data = response.json();
    load();
    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';
    return data;

}

async function load() {

    let response = await fetch('http://localhost:3030/jsonstore/phonebook');
    let data = await response.json();
    let list = document.getElementById('phonebook');
    list.innerHTML = '';

    Object.values(data).map(x => {
        let li = document.createElement('li');
        li.innerText = `${x.person}: ${x.phone}`;
        let button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = function () { deleteElement(x._id) };
        li.appendChild(button);
        list.appendChild(li);
    });
}

async function deleteElement(id) {
    let url = 'http://localhost:3030/jsonstore/phonebook/' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
    load();
    return await response.json();

}

attachEvents();