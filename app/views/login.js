import page from '../node_modules/page/page.mjs';
import {html, render} from '../node_modules/lit-html/lit-html.js';  
import { updateNav } from '../views/navController.js'

export function loginView(context) {
    const template = html`  
            <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`
    context.render(template)
}

async function onSubmit(ev) {
    ev.preventDefault();
    const data = extractFormData(ev);

    try {
        login(data)
        
    } catch (err) {
        console.log(err.message)
    }
}

function extractFormData(ev) {
    const formData = new FormData(ev.currentTarget);
    return {
        'email': formData.get('email'),
        'password': formData.get('password'),
    }
}

async function login(data) {
    const res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            body: JSON.stringify(data)
        })

    const responseData = await res.json();

    if (!res.ok) {
        throw new Error('invalid pass/user')
    }

    localStorage.setItem('token', responseData.accessToken)
    localStorage.setItem('ownerId', responseData._id)
    
    updateNav();
    page.redirect('/')
}