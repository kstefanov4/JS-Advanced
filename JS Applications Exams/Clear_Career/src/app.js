import { logout } from './api/users.js';
import { html, render, page} from './lib.js';
import { getUserData } from './util.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

const content = document.getElementById('main');
const user = document.getElementById('user');
const guest = document.getElementById('guest');
document.getElementById('logout').addEventListener('click',onLogout)

page(contexDecoration)
page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/dashboard', dashboardView)
page('/create', createView)
page('/dashboard/:id', detailsView)
page('/edit/:id', editView)
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
        guest.style.display = 'none';
        user.style.display = 'block';
    }else{
        guest.style.display = 'block';
        user.style.display = 'none';

    }
}

function renderMain(template){
    render(template,content);
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/dashboard')
}