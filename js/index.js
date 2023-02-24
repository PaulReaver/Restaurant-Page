import '../css/reset.css';
import '../css/style.css';

const body = document.querySelector('body');

const header = document.createElement('header');
body.appendChild(header);

const content = document.createElement('div');
content.setAttribute('id', 'content');
body.appendChild(content);

const restaurant = document.createElement('h1');
restaurant.textContent = 'Restaurant';
header.appendChild(restaurant);
