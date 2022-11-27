
import { getAllShoes } from '../api/data.js';
import { html } from '../lib.js'

const catalogTemp = (shoes) => html`
        <section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${shoes.length == 0 ? html `<h2>There are no items added yet.</h2>` : shoes.map(shoeCard)}
          </ul>
        </section>`

//_id	_ownerId	brand	model	imageUrl	release	designer	value	_createdOn

function shoeCard(shoe) {
    return html`<li class="card">
    <img src="../..${shoe.imageUrl}" alt="travis" />
    <p>
      <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
      <strong>Model: </strong
      ><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    <a class="details-btn" href="/dashboard/${shoe._id}">Details</a>
  </li>`
}

export async function catalogView(ctx) {
    const shoes = await getAllShoes();
    ctx.render(catalogTemp(shoes));

}