import { get, post } from "./api.js";


export async function getAllPets(){
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function createPet(data){
    return post('/data/pets',data);
}

export async function getPetById(id){
    return get('/data/pets/' + id)
}

export async function deletePet(id){
    return del('/data/pets/' + id);
}