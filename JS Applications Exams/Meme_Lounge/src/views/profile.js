import { getAllMemes, getAllMemesByProfile, getMemeById } from '../api/memes.js'
import { html, render } from '../lib.js'
import { getUserData } from '../util.js'

const profileTemp = (memes,userData) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${memes.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : memes.map(memeCard)}
        
    </div>
</section>`

function memeCard(meme) {
    const memeTemp = html`
    <div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
    <a class="button" href="/memes/${meme._id}">Details</a>
</div>`
    return memeTemp
}

export async function profileView(ctx) {
    const userData = getUserData();
    const meme = await getAllMemesByProfile(userData.id);
    console.log(meme)
    ctx.render(profileTemp(meme,userData))
}