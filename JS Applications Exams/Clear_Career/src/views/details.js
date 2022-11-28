
import { createDotation, deleteOffer, deletePet, getDonationByPetId, getDonationByUser, getOfferById } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

//_id	_ownerId	name	breed	age	weight	image	_createdOn

const detailsTemp = (offer, isOwner, onDelete, userData) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="../${offer.imageUrl}" alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
              Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span
                  >${offer.description}</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span
                  >${offer.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">1</strong></p>

            <!--Edit and Delete are only for creator-->
            ${isOwner ? html `<div id="action-buttons">
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="" id="delete-btn">Delete</a>

          </div>` : userData ? html `<div id="action-buttons">
          <a href="" id="apply-btn">Apply</a>
          </div>` : ''}
            
          </div>
        </section>
    `

export async function detailsView(ctx) {

    const offer = await getOfferById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id == offer._ownerId;
    //const totalDonations = await getDonationByPetId(ctx.params.id);
    //const userDonated = await getDonationByUser(ctx.params.id, userData?.id);
    ctx.render(detailsTemp(offer, isOwner, onDelete, userData))

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this offer?')
        if (choice) {
            await deleteOffer(ctx.params.id);
            ctx.page.redirect('/dashboard');
        }
    }

    

}