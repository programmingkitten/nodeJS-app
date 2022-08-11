import {html, render as litRender} from '../node_modules/lit-html/lit-html.js';  

const containerDiv = document.querySelector('.container');

function render(view) {
    litRender(view, containerDiv)
}

export function renderMiddleware(context, next, containerDiv) {
    context.render = render;
    next();

}   

