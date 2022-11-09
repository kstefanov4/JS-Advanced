document.getElementById('logout').style.display = 'none';
document.getElementsByTagName('form')[0].addEventListener('submit', login);

async function login(e) {
    e.preventDefault();
    let dataForm = new FormData(document.getElementsByTagName('form')[0]);
    let { email, password } = Object.fromEntries(dataForm);

    let body = {
        email,
        password
    }

    let response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    let data = await response.json();
    let user = {
        email: data.email,
        id: data._id,
        accessToken: data.accessToken
    }
    //console.log(user)
    sessionStorage.setItem('user',  JSON.stringify(user))
    var obj = JSON.parse(sessionStorage.user);
    window.location = '../index.html';
    document.getElementsByTagName('span')[0].textContent = obj.email
}
