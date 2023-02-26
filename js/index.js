import '../css/reset.css';
import '../css/style.css';

// Create and append header
const body = document.querySelector('body');
const header = document.createElement('header');
body.prepend(header);
const headerWrapper = document.createElement('div');
headerWrapper.classList.add('header-wrapper');
header.append(headerWrapper);

// Create and append restaurant logo and navbar
const restaurant = document.createElement('h1');
restaurant.append('Restaurant');
const nav = document.createElement('nav');
headerWrapper.append(restaurant, nav);

// Create and append navlist
const navlist = document.createElement('ul');
navlist.classList.add('nav-list');
nav.append(navlist);
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
navlist.append(li1, li2, li3);
const tabHome = document.createElement('a');
tabHome.classList.add('active-tab');
tabHome.append('Home');
li1.append(tabHome);
const tabMenu = document.createElement('a');
tabMenu.classList.add('non-active-tab');
tabMenu.append('Menu');
li2.append(tabMenu);
const tabContact = document.createElement('a');
tabContact.classList.add('non-active-tab');
tabContact.append('Contact');
li3.append(tabContact);
tabHome.href = '#';
tabMenu.href = '#';
tabContact.href = '#';

// Event listeners to declare a tab as active
tabHome.addEventListener('click', () => {
    if (tabHome.className !== 'active-tab') {
        tabHome.className = 'active-tab';
        tabMenu.className = 'non-active-tab';
        tabContact.className = 'non-active-tab';
    }
});

tabMenu.addEventListener('click', () => {
    if (tabMenu.className !== 'active-tab') {
        tabMenu.className = 'active-tab';
        tabHome.className = 'non-active-tab';
        tabContact.className = 'non-active-tab';
    }
});

tabContact.addEventListener('click', () => {
    if (tabContact.className !== 'active-tab') {
        tabContact.className = 'active-tab';
        tabHome.className = 'non-active-tab';
        tabMenu.className = 'non-active-tab';
    }
});
