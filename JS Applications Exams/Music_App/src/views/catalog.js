
import { html } from '../lib.js'
import { getAllSongs } from '../api/albums.js';
import { getUserData } from '../util.js';

const catalogTemp = (songs, userData) => html`
<section id="catalogPage">
            <h1>All Albums</h1>

            ${songs.length == 0 ? html `<p>No Albums in Catalog!</p>` : songs.map(x => songCard(x,userData))}

        </section>`

//_id	_ownerId	name	artist	genre	imgUrl	price	releaseDate	description _createdOn

function songCard(song, userData) {
    return html`
            <div class="card-box">
                <img src="../..${song.imgUrl}">
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${song.name}</p>
                        <p class="artist">Artist: ${song.artist}</p>
                        <p class="genre">Genre: ${song.genre}</p>
                        <p class="price">Price: $${song.price}</p>
                        <p class="date">Release Date: ${song.releaseDate}</p>
                    </div>
                    ${userData ? html`<div class="btn-group">
                    <a href="/catalog/${song._id}" id="details">Details</a>
                </div>` : ''}
                    
                </div>
            </div>`
}

export async function catalogView(ctx) {
    const songs = await getAllSongs();
    const userData = getUserData();
    ctx.render(catalogTemp(songs, userData));

}