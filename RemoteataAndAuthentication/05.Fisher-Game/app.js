document.getElementById('logout').style.display = 'none';

var obj = JSON.parse(sessionStorage.user);
if (obj){
    document.getElementsByTagName('span')[0].textContent = obj.email;
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
    document.getElementById('logout').addEventListener('click', logout);
    document.getElementById('logout').style.display = '';
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