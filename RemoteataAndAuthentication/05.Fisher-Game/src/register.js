document.getElementById('logout').style.display = 'none';

document.querySelector('form').addEventListener('submit', registerNewCustomer);

async function registerNewCustomer(e){
    e.preventDefault();
    let formData = new FormData(document.querySelector('form'))

    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');

    if(password != rePass){
        document.getElementsByClassName('notification')[0].textContent = "The passwords do not match! Please, try again";
        return
    }
    document.getElementsByClassName('notification')[0].textContent = '';
    
    let body = {
        email,
        password
    }

    let response = await fetch("http://localhost:3030/users/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    let data = await response.json();
    let user = {
        email: data.email,
        accessToken: data.accessToken
    }
    sessionStorage.setItem('user',  JSON.stringify(user))
    var obj = JSON.parse(sessionStorage.user);
    window.location = '../index.html';
    document.getElementsByTagName('span')[0].textContent = obj.email
}