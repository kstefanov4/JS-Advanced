import { del, get, post, put } from "./api.js";


export async function getAllPets(){
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function createPet(data){
    return post('/data/pets',data);
}

export async function createDotation(data){
    return post('/data/donation',data);
}

export async function editPet(id, data){
    return put('/data/pets/' + id, data);
}

export async function getPetById(id){
    return get('/data/pets/' + id)
}

export async function deletePet(id){
    return del('/data/pets/' + id);
}

export async function getDonationByPetId(id){
    return get(`/data/donation?where=petId%3D%22${id}%22&distinct=_ownerId&count`)
}

export async function getDonationByUser(petId, userId){
    return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}
