
import { createDotation, deletePost, getPostById } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

//_id	_ownerId	title	description	address	phone	imageUrl	_createdOn

const detailsTemp = (post, isOwner, onDelete, userData) => html`    
    <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="../..${post.imageUrl}" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${post.title}</h2>
                        <p class="post-description">Description: ${post.description}</p>
                        <p class="post-address">Address: ${post.address}</p>
                        <p class="post-number">Phone number: ${post.phone}</p>
                        <p class="donate-Item">Donate Materials: 0</p>

                        ${isOwner ? html`<div class="btns">
                        <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                        <a @click=${onDelete} href="" class="delete-btn btn">Delete</a>
                    </div>` : ''}
                    </div>
                </div>
            </div>
        </section>`

export async function detailsView(ctx) {

    const post = await getPostById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id == post._ownerId;
    //const totalDonations = await getDonationByPetId(ctx.params.id);
    //const userDonated = await getDonationByUser(ctx.params.id, userData?.id);
    ctx.render(detailsTemp(post, isOwner, onDelete, userData))

    async function onDelete() {
        // const choice = confirm('Are you sure you want to delete this pet?')
            await deletePost(ctx.params.id);
            ctx.page.redirect('/dashboard')
    }

    async function onDonate(){
        const pet = {
            petId: ctx.params.id
        }
        await createDotation(pet)
        ctx.page.redirect('/dashboard/' + ctx.params.id)
    }

}