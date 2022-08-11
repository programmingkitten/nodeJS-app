import page from './node_modules/page/page.mjs';
import { dashboardView} from './views/dashboard.js';
import { furnitureEditView } from './views/editItem.js';
import { furnitureView } from './views/furnitureDetails.js';
import { loginView } from './views/login.js';
import { logoutView } from './views/logout.js';
import { updateNav } from './views/navController.js'
import { renderMiddleware } from './views/renderMiddleware.js';

const containerDiv = document.querySelector('.container');

updateNav();

page(renderMiddleware)
page('/index.html', '/');
page('/', dashboardView)
page('/login', loginView);
page('/logout', logoutView);
page('/furniture/:id', furnitureView);
page('/furniture/edit/:id', furnitureEditView)
page.start()

