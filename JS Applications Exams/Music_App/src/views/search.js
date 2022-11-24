
import { getSearchResult } from '../api/albums.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const searchTemp = (isClicked, onSearch, albums, userData) => html`
<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
                
            <!--Show after click Search button-->
            <div class="search-result">
            ${isClicked ? html `
            ${albums.map(x => songCard(x, userData))}` : html`<p class="no-result">No result.</p>`}
                
            </div>
        </section>`
function songCard(song, userData){
    return html`<div class="card-box">
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
export function searchView(ctx) {

    ctx.render(searchTemp(false, onSearch));

    async function onSearch(){
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value;

        if (!query){
            return alert('THe fields should not be empty!')
        }

        const albums = await getSearchResult(query);
        const userData = getUserData();
        albums.length > 0 ? 
        ctx.render(searchTemp(true, onSearch, albums, userData)) : ctx.render(searchTemp(false, onSearch)) ;
    }
}