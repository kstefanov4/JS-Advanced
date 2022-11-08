document.getElementById('logout').style.display = 'none';
document.getElementById('register').addEventListener('submit', registerNewCustomer);

function registerNewCustomer(e){
    e.preventDefault();
    console.log('test')
}
