// Get body and content div and create main element
const content = document.querySelector('#content');

export default function populateMenu() {
    document.body.style.backgroundImage = "url('../images/food-menu.webp')";
    content.replaceChildren();
}
