
import { logout } from './api/users.js';
import { html, render, page} from './lib.js';
import { getUserData } from './util.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homePageView } from './views/homePage.js';
import { loginView } from './views/login.js';
import { memesView } from './views/memesView.js';
import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click',onLogout)

page(decorateContex);
page('/', homePageView);
page('/memes', memesView);
page('/memes/:id', detailsView);
page('/edit/:id', editView);
page('/createMeme', createView);
page('/myprofile', profileView);
page('/login', loginView);
page('/register', registerView);


updateNav()
page.start();

function decorateContex(ctx,next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next();
}

function renderMain(templateResult){
    render(templateResult,main);
}

function updateNav(){
    const userData = getUserData();

    if (userData){
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;
    }else{
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/')
}