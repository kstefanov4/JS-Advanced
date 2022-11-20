import { createMeme, getMemeById, updateMeme } from '../api/memes.js';
import { html, render } from '../lib.js'
import { notify } from '../notify.js';

const editTemp = (onSubmit, meme) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`

export async function editView(ctx) {
    const meme = await getMemeById(ctx.params.id)
    console.log(meme)
    ctx.render(editTemp(onSubmit, meme))

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const meme = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl')
        };

        if (meme.title == '' || meme.description == '' || meme.imageUrl == '') {
            return notify('All fields are required!')
        };

        await updateMeme(ctx.params.id, meme);
        e.target.reset();
        ctx.page.redirect('/memes/' + ctx.params.id)
    }
}