import '../css/reset.css';
import '../css/style.css';

const content = document.querySelector('#content');

const header = document.createElement('header');
content.appendChild(header);

const restaurant = document.createElement('h1');
restaurant.textContent = 'Restaurant';
header.appendChild(restaurant);
