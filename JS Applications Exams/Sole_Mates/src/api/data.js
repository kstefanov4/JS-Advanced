import { get, post , del, put} from "./api.js";


export async function getAllShoes(){
    return get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function createShoe(data){
    return post('/data/shoes',data);
}

export async function getShoeById(id){
    return get('/data/shoes/' + id)
}

export async function deleteShoe(id){
    return del('/data/shoes/' + id);
}

export async function editShoe(id, data){
    return put('/data/shoes/' + id, data);
}

export async function getSearchResult(query){
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}