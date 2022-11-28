import { del, get, post, put } from "./api.js";


export async function getAllOffers(){
    return get('/data/offers?sortBy=_createdOn%20desc');
}

export async function createOffer(data){
    return post('/data/offers',data);
}

export async function createDotation(data){
    return post('/data/donation',data);
}

export async function editPet(id, data){
    return put('/data/offers/' + id, data);
}

export async function editOffer(id, data){
    return put('/data/offers/' + id, data);
}

export async function getOfferById(id){
    return get('/data/offers/' + id)
}

export async function getPetById(id){
    return get('/data/offers/' + id)
}

export async function deletePet(id){
    return del('/data/pets/' + id);
}

export async function deleteOffer(id){
    return del('/data/offers/' + id);
}

export async function getDonationByPetId(id){
    return get(`/data/donation?where=petId%3D%22${id}%22&distinct=_ownerId&count`)
}

export async function getDonationByUser(petId, userId){
    return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}
