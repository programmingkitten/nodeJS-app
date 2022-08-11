const loggedInNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

export function updateNav() {
    if (!localStorage.token) {
        hide(loggedInNav);
        show(guestNav, 'inline');
    } else {
        hide(guestNav);
        show(loggedInNav, 'inline');
    }
}

function show(el, method) {
    const methods = {
        'undefined': 'block',
        'inline': 'inline',
    }
    el.style.display = methods[method];
}

function hide(el) {
    el.style.display = 'none';
}