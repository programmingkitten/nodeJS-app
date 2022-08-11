import page from '../node_modules/page/page.mjs';
import { updateNav } from '../views/navController.js'

export function logoutView() {
    localStorage.clear();
    updateNav();
    page.redirect('/')
    
}