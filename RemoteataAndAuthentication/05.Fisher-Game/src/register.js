document.getElementById('logout').style.display = 'none';

document.querySelector('form').addEventListener('submit', registerNewCustomer);

async function registerNewCustomer(e) {
    e.preventDefault();
    let formData = new FormData(document.querySelector('form'))

    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');

    if (password != rePass) {
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
    if (data.code == 409) {
        document.getElementsByClassName('notification')[0].textContent = data.message;
        setTimeout(function () {
            window.location = './register.html';
        }, 4000);

        return
    }
    document.getElementsByClassName('notification')[0].textContent = '';

    let user = {
        email: data.email,
        id: data._id,
        accessToken: data.accessToken
    }
//console.log(user)
    sessionStorage.setItem('user', JSON.stringify(user))
    var obj = JSON.parse(sessionStorage.user);
    window.location = '../index.html';
    document.getElementsByTagName('span')[0].textContent = obj.email
}