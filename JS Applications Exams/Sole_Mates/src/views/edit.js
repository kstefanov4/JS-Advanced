
import { editShoe, getShoeById } from '../api/data.js';
import { html } from '../lib.js'

const editTemp = (onSubmit, shoe) => html`
<section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                .value="${shoe.brand}"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                .value="${shoe.model}"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                .value="${shoe.imageUrl}"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
                .value="${shoe.release}"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
                .value="${shoe.designer}"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
                .value="${shoe.value}"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`

export async function editView(ctx) {
    const shoe = await getShoeById(ctx.params.id)
    ctx.render(editTemp(onSubmit, shoe));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const brand = formData.get('brand');
        const model = formData.get('model');
        const imageUrl = formData.get('imageUrl');
        const release = formData.get('release');
        const designer = formData.get('designer');
        const value = formData.get('value');

        const shoe = {
            brand,
            model,
            imageUrl,
            release,
            designer,
            value
        }

        if (brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            return alert('All fields are required!')
        }

        await editShoe(ctx.params.id, shoe);
        e.target.reset();
        ctx.page.redirect('/dashboard/' + ctx.params.id)
    }
}