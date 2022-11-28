import { login } from '../api/users.js';
import { html } from '../lib.js'

const loginTemp = (onSubmit) => html`
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onSubmit} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/create">Create an account</a>
              </p>
            </form>
          </div>
        </section>`

export function loginView(ctx) {
    ctx.render(loginTemp(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password')

        if (email == '' || password == '') {
            return alert("All fields are requared!")
        }

        await login(email,password);
        ctx.updateNav();
        ctx.page.redirect('/dashboard')
    }
}