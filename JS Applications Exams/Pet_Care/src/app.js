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

const content = document.getElementById('content');
const li = document.getElementsByTagName('li');
li[5].addEventListener('click', onLogout)

page(contexDecoration)
page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/dashboard', dashboardView)
page('/createPage', createView)
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
        li[2].style.display = 'none';
        li[3].style.display = 'none';
        li[4].style.display = 'block';
        li[5].style.display = 'block';
    }else{
        li[2].style.display = 'block';
        li[3].style.display = 'block';
        li[4].style.display = 'none';
        li[5].style.display = 'none';

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