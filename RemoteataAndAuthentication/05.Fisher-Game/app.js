document.getElementById('logout').style.display = 'none';
document.getElementsByClassName('load')[0].addEventListener('click',loadAllCatches);

var obj = JSON.parse(sessionStorage.user);
if (obj){
    document.getElementsByTagName('span')[0].textContent = obj.email;
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
    document.getElementById('logout').addEventListener('click', logout);
    document.getElementById('logout').style.display = '';
    document.getElementById('addBtn').disabled = false;
    document.getElementById('addBtn').addEventListener('click',addRecord);
}
async function loadAllCatches(){
    document.getElementById('catches').innerHTML = '';
    let response = await fetch('http://localhost:3030/data/catches');
    let data = await response.json();
    
    for (const record of data) {
        let {_ownerId, angler,weight,species,location,bait,captureTime,_id} = record
        
        let div = document.createElement('div');
        div.className = 'catch';
        div.innerHTML = `<label>Angler</label>
        <input type="text" class="angler" value="${angler}">
        <label>Weight</label>
        <input type="text" class="weight" value="${weight}">
        <label>Species</label>
        <input type="text" class="species" value="${species}">
        <label>Location</label>
        <input type="text" class="location" value="${location}">
        <label>Bait</label>
        <input type="text" class="bait" value="${bait}">
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${captureTime}">
        <button class="update" data-id="${_ownerId}">Update</button>
        <button class="delete" data-id="${_ownerId}">Delete</button>`;
        document.getElementById('catches').appendChild(div);

        div.getElementsByClassName('update')[0].addEventListener('click',() => {updadeRecord(div,_id)});
        div.getElementsByClassName('delete')[0].addEventListener('click',() => {deleteRecord(_id)});

    }
    checkTheOwner();
}
async function updadeRecord(div,id){
    let angler = div.getElementsByClassName('angler')[0].value;
    let weight = div.getElementsByClassName('weight')[0].value;
    let species = div.getElementsByClassName('species')[0].value;
    let location = div.getElementsByClassName('location')[0].value;
    let bait = div.getElementsByClassName('bait')[0].value;
    let captureTime = div.getElementsByClassName('captureTime')[0].value;
    
    let body = {
        "angler": angler,
        "weight": Number(weight),
        "species": species,
        "location": location,
        "bait": bait,
        "captureTime": Number(captureTime)
    }

    let url = 'http://localhost:3030/data/catches/'+id;
    let response = await fetch(url,{
        method: "PUT",
        headers:{
            'Content-Type': 'application/json',
            'X-Authorization': obj.accessToken
        },
        body:JSON.stringify(body)
    });
    loadAllCatches();
}

async function deleteRecord(id){
    let url = 'http://localhost:3030/data/catches/'+id;

    let response = await fetch(url,{
        method: "DELETE",
        headers:{
            'Content-Type': 'application/json',
            'X-Authorization': obj.accessToken
        }
    })
    loadAllCatches();
}

function checkTheOwner(){
    let allCatches = Array.from(document.getElementsByClassName('catch'));
    for (const record of allCatches) {
        let id = record.getElementsByClassName('update')[0].getAttribute('data-id')
        if (id != obj.id){
            record.getElementsByClassName('angler')[0].setAttribute('disabled',true);
            record.getElementsByClassName('weight')[0].setAttribute('disabled',true);
            record.getElementsByClassName('species')[0].setAttribute('disabled',true);
            record.getElementsByClassName('location')[0].setAttribute('disabled',true);
            record.getElementsByClassName('bait')[0].setAttribute('disabled',true);
            record.getElementsByClassName('captureTime')[0].setAttribute('disabled',true);
            record.getElementsByClassName('update')[0].setAttribute('disabled',true);
            record.getElementsByClassName('delete')[0].setAttribute('disabled',true);
        }
    }
}

async function addRecord(e){
    e.preventDefault();

    let dataForm = new FormData(document.getElementsByTagName('form')[0]);
    let { angler, weight,species,location,bait,captureTime } = Object.fromEntries(dataForm);
    let body = {
        "angler": angler,
        "weight": Number(weight),
        "species": species,
        "location": location,
        "bait": bait,
        "captureTime": Number(captureTime)
    }
    
    let response = await fetch('http://localhost:3030/data/catches',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': obj.accessToken
        },
        body: JSON.stringify(body)
    })
    let data = response.json();
    loadAllCatches();
}


async function logout(){
    // accessToken = sessionStorage.getItem('user')
    // let response = await fetch('http://localhost:3030/users/logout',{
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'x-Authorization': accessToken
    //     }
    // });
    // let data = await response.json();
    sessionStorage.clear();
    window.location = './index.html';
}