
import { createDotation, deletePet, getDonationByPetId, getDonationByUser, getPetById } from '../api/pets.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

//_id	_ownerId	name	breed	age	weight	image	_createdOn

const detailsTemp = (pet, isOwner, onDelete, userData,onDonate, totalDonations, userDonated) => html`
<section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.imege}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: ${totalDonations * 100}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    ${userData ? html`<div class="actionBtn">
                    <!-- Only for registered user and creator of the pets-->
                    ${isOwner ? html `<a href="/edit/${pet._id}" class="edit">Edit</a>
                    <a @click=${onDelete} href="#" class="remove">Delete</a>
                    ` : userDonated==0? html `<!--(Bonus Part) Only for no creator and user-->
                    <a @click=${onDonate} href="#" class="donate">Donate</a>` : ''}
                </div>` : ''}
                    
                </div>
            </div>
        </section>
    </main>`

export async function detailsView(ctx) {

    const pet = await getPetById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id == pet._ownerId;
    const totalDonations = await getDonationByPetId(ctx.params.id);
    const userDonated = await getDonationByUser(ctx.params.id, userData?.id);
    ctx.render(detailsTemp(pet, isOwner, onDelete, userData, onDonate, totalDonations, userDonated))

    async function onDelete() {
        // const choice = confirm('Are you sure you want to delete this pet?')
            await deletePet(ctx.params.id);
            ctx.page.redirect('/')
    }

    async function onDonate(){
        const pet = {
            petId: ctx.params.id
        }
        await createDotation(pet)
        ctx.page.redirect('/dashboard/' + ctx.params.id)
    }

}