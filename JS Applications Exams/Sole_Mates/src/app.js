import { logout } from './api/users.js';
import { html, render, page} from './lib.js';
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { searchView } from './views/search.js';

const content = document.getElementById('main');
const user = document.getElementsByClassName('user')[0];
const guest = document.getElementsByClassName('guest')[0];
document.getElementById('logout').addEventListener('click',onLogout)

page(contexDecoration)
page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/dashboard', catalogView)
page('/create', createView)
page('/dashboard/:id', detailsView)
page('/edit/:id', editView)
page('/search', searchView)
updateNav();
page.start()

function contexDecoration(ctx,next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next();
}

function updateNav(){
    const userData = getUserData();

    if (userData){
        user.style.display = 'block';
        guest.style.display = 'none';
    }else{
        user.style.display = 'none';
        guest.style.display = 'block';

    }
}

function renderMain(template){
    render(template,content);
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/')
}