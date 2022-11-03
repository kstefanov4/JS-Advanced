async function lockedProfile() {
    document.getElementById('main').innerHTML = '';

    let response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    let data = await response.json();

    for (const iterator of Object.values(data)) {
        let userName = iterator.username;
        let email = iterator.email;
        let age = iterator.age;

        let div = document.createElement('div');
        div.classList.add('profile');
        div.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${userName}" disabled readonly />
        <div class="user1Username">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user1Age" value="${age}" disabled readonly />
        </div>
        
        <button>Show more</button>`;

        div.getElementsByTagName('div')[0].style.display = 'none';
        div.querySelector('input[type="radio"][value="lock"]').checked = true;

        document.getElementById('main').appendChild(div);
    }

    Array.from(document.getElementsByTagName('button'))
   .forEach(e => e.addEventListener('click',action));

    function action(event){
        let parentElement = event.target.parentElement;

        if (parentElement.querySelector('input[type="radio"][value="unlock"]').checked == true){
            if(parentElement.getElementsByTagName('button')[0].textContent == 'Hide it'){
                parentElement.getElementsByTagName('div')[0].style.display = 'none';
                parentElement.getElementsByTagName('button')[0].textContent = 'Show more'
                return;
            }

            parentElement.getElementsByTagName('div')[0].style.display = 'inline-block';
            
            if (parentElement.getElementsByTagName('div')[0].style.display == 'inline-block'){
                parentElement.getElementsByTagName('button')[0].textContent = 'Hide it'
            }
        }
    }
}