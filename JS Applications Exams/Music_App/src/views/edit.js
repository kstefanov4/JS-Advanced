
import { editSong, getSongById } from '../api/albums.js';
import { html } from '../lib.js'

const editTemp = (onSubmit, song) => html`
<section class="editPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" .value="${song.name}">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value="${song.imgUrl}">

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" .value="${song.price}">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value="${song.releaseDate}">

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" .value="${song.artist}">

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" .value="${song.genre}">

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10" cols="10" .value="${song.description}"></textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>`

export async function editView(ctx) {
    const song = await getSongById(ctx.params.id)
    ctx.render(editTemp(onSubmit, song));

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const imgUrl = formData.get('imgUrl');
        const price = formData.get('price');
        const releaseDate = formData.get('releaseDate');
        const artist = formData.get('artist');
        const genre = formData.get('genre');
        const description = formData.get('description');

        const song = {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        }

        if (name == '' || imgUrl == '' || price == '' || releaseDate == '' || artist == '' || genre == '' || description == ''){
            return alert('All fields are required!')
        }

        await editSong(ctx.params.id, song);
        e.target.reset();
        ctx.page.redirect('/catalog/' + ctx.params.id)
    }
}