// Get body and create main element
const body = document.querySelector('body');
const mainHome = document.createElement('main');
mainHome.classList.add('main-home');

// Create secondary text
const secondaryText = document.createElement('h3');
secondaryText.classList.add('secondary-text');
secondaryText.append('Distinct flavors with the most exotic aroma');

// Create primary text
const primaryText = document.createElement('h2');
primaryText.classList.add('primary-text');
const br = document.createElement('br');
primaryText.append('Premium tastes', br, 'that feel like home!');

// Populates page
export default function populateHome() {
    document.body.style.backgroundImage = "url('../images/food-home.webp')";
    body.append(mainHome);
    mainHome.append(secondaryText);
    mainHome.append(primaryText);
}
