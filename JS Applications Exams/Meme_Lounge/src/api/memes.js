import { del, get, post, put } from "./api.js";

export async function getAllMemes(){
    return get('/data/memes?sortBy=_createdOn%20desc')
}

export async function getMemeById(id){
    return get('/data/memes/' + id)
}

export async function getAllMemesByProfile(id){
    return get(`/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`)
}

export async function createMeme(meme){
    return post('/data/memes', meme)
}

export async function updateMeme(id,meme){
    return put('/data/memes/' + id, meme)
}

export async function deleteMeme(id){
    return del('/data/memes/' + id);
}