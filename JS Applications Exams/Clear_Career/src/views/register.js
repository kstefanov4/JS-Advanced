import { register } from '../api/users.js';
import { html } from '../lib.js'

const registerTemp = (onSubmit) => html`
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`

export function registerView(ctx) {
    ctx.render(registerTemp(onSubmit));

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        let email = formData.get('email')
        let password = formData.get('password')
        let repass = formData.get('re-password')

        if (email == '' || password == ''){
            return alert('All fields are required!')
        }

        if (password !== repass){
            return alert('Password does not match!');
        }

        await register(email,password);
        ctx.updateNav();
        ctx.page.redirect('/dashboard');
    }
}