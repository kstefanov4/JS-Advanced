
import { getSearchResult } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const searchTemp = (onSearch, shoes, userData) => html`
<section id="search">
          <h2>Search by Brand</h2>

          <form @submit=${onSearch} class="search-wrapper cf">
            <input
              id="#search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required
            />
            <button type="submit">Search</button>
          </form>

          <h3>Results:</h3>
          <div id="search-container">
            ${shoes ? shoes.map(x => shoeCard(x, userData)) : html`<h2>There are no results found.</h2>`}
          
          </div>
        </section>`
//_id	_ownerId	brand	model	imageUrl	release	designer	value	_createdOn

function shoeCard(shoe, userData){
    return html`
<ul class="card-wrapper">
              <!-- Display a li with information about every post (if any)-->
              <li class="card">
                <img src="../..${shoe.imageUrl}" alt="travis" />
                <p>
                  <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
                </p>
                <p>
                  <strong>Model: </strong
                  ><span class="model">${shoe.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
                ${userData ? html`<a class="details-btn" href="/dashboard/${shoe._id}">Details</a>` : ''}
                
              </li>
            </ul>`
}
export function searchView(ctx) {

    ctx.render(searchTemp(onSearch));

    async function onSearch(e){
        e.preventDefault();
        debugger
        const searchInput = document.getElementById('#search-input');
        const query = searchInput.value;

        if (!query){
            return alert('The fields should not be empty!')
        }

        const shoes = await getSearchResult(query);
        const userData = getUserData();
        shoes.length > 0 ? 
        ctx.render(searchTemp(onSearch, shoes, userData)) : ctx.render(searchTemp(onSearch)) ;
    }
}