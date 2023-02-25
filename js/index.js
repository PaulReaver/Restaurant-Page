import '../css/reset.css';
import '../css/style.css';

// Create and append header
const body = document.querySelector('body');
const header = document.createElement('header');
body.prepend(header);

// Create and append restaurant logo
const restaurant = document.createElement('h1');
restaurant.append('Restaurant');

// Create and append navbar
const nav = document.createElement('nav');
header.append(restaurant, nav);
const navlist = document.createElement('ul');
navlist.classList.add('nav-list');
nav.append(navlist);
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
navlist.append(li1, li2, li3);
const tab1 = document.createElement('a');
tab1.append('Home');
li1.append(tab1);
const tab2 = document.createElement('a');
tab2.append('Menu');
li2.append(tab2);
const tab3 = document.createElement('a');
tab3.append('Contact');
li3.append(tab3);
tab1.href = '#';
tab2.href = '#';
tab3.href = '#';
