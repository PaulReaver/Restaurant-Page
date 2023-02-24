import '../css/reset.css';
import '../css/style.css';

const body = document.querySelector('body');

const header = document.createElement('header');
body.prepend(header);

const restaurant = document.createElement('h1');
restaurant.textContent = 'Restaurant';
header.appendChild(restaurant);
