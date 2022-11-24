
import { deleteSong, getSongById } from '../api/albums.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

//_id	_ownerId	name	artist	genre	imgUrl	price	releaseDate	description _createdOn

const detailsTemp = (song, isOwner, onDelete) => html`
<section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src="../..${song.imgUrl}">
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${song.name}</h1>
                        <h3>Artist: ${song.artist}</h3>
                        <h4>Genre: ${song.genre}</h4>
                        <h4>Price: $${song.price}</h4>
                        <h4>Date: ${song.releaseDate}</h4>
                        <p>Description: ${song.description}</p>
                    </div>
                    ${isOwner ? html`<div class="actionBtn">
                    <a href="/edit/${song._id}" class="edit">Edit</a>
                    <a @click=${onDelete} href="" class="remove">Delete</a>
                </div>` : ''}
                </div>
            </div>
        </section>`

export async function detailsView(ctx) {
    const song = await getSongById(ctx.params.id)
    const userData = getUserData();
    const isOwner = userData?.id == song._ownerId;
    ctx.render(detailsTemp(song, isOwner, onDelete));

    async function onDelete() {
        await deleteSong(ctx.params.id);
        ctx.page.redirect('/catalog')
    }
}