// Get content div and create main element
const content = document.querySelector('#content');
const mainHome = document.createElement('main');
mainHome.classList.add('main-home');

// Create secondary text
const secondaryText = document.createElement('p');
secondaryText.classList.add('secondary-text');
secondaryText.append('Distinct flavors with the most exotic aroma');

// Create primary text
const primaryText = document.createElement('h2');
primaryText.classList.add('primary-text');
const br = document.createElement('br');
primaryText.append('Premium tastes', br, 'that feel like home!');

// Create CTA link
const orderLink = document.createElement('a');
orderLink.classList.add('order-link');
orderLink.href = '#';
orderLink.append('Order Now');

// Add elements to main container
mainHome.append(secondaryText, primaryText, orderLink);

// Populates page
export default function populateHome() {
    document.body.style.backgroundImage = "url('../images/food-home.webp')";
    content.replaceChildren();
    content.append(mainHome);
}
