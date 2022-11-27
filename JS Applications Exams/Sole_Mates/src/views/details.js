import { deleteShoe, getShoeById } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

//_id	_ownerId	brand	model	imageUrl	release	designer	value	_createdOn

const detailsTemp = (shoe, isOwner, onDelete) => html`<section id="details">
<div id="details-wrapper">
  <p id="details-title">Shoe Details</p>
  <div id="img-wrapper">
    <img src="../..${shoe.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
    <p>
      Model: <span id="details-model">${shoe.model}</span>
    </p>
    <p>Release date: <span id="details-release">${shoe.release}</span></p>
    <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
    <p>Value: <span id="details-value">${shoe.value}</span></p>
  </div>

  <!--Edit and Delete are only for creator-->
  ${isOwner ? html `<div id="action-buttons">
  <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
  <a @click=${onDelete} href="" id="delete-btn">Delete</a>
</div>` : ''}
  
</div>
</section>`

export async function detailsView(ctx) {
    const shoe = await getShoeById(ctx.params.id)
    const userData = getUserData();
    const isOwner = userData?.id == shoe._ownerId;
    ctx.render(detailsTemp(shoe, isOwner, onDelete));

    async function onDelete() {
        await deleteShoe(ctx.params.id);
        ctx.page.redirect('/dashboard')
    }
}