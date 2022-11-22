import { getAllPets } from '../api/pets.js';
import { html } from '../lib.js'

const dashboardTemp = (pets) => html`
<section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${pets.length == 0? html`<div>
                <p class="no-pets">No pets in dashboard</p>
            </div>` : pets.map(petCard)}
                
            </div>
        </section>`

//_id	_ownerId	name	breed	age	weight	image	_createdOn

        function petCard(pet){
            return html`
            <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="../${pet.image}">
                    </article>
                    <h2 class="name">${pet.name}</h2>
                    <h3 class="breed">${pet.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/dashboard/${pet._id}">Details</a>
                    </div>
                </div>`
        }

export async function dashboardView(ctx) {
    const pets = await getAllPets();
    ctx.render(dashboardTemp(pets));

}