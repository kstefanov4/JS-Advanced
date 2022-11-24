import { get, post , del, put} from "./api.js";


export async function getAllSongs(){
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function createSong(data){
    return post('/data/albums',data);
}

export async function getSongById(id){
    return get('/data/albums/' + id)
}

export async function deleteSong(id){
    return del('/data/albums/' + id);
}

export async function editSong(id, data){
    return put('/data/albums/' + id, data);
}

export async function getSearchResult(query){
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}