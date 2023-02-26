// Get body and content div and create main element
const content = document.querySelector('#content');

export default function populateContact() {
    document.body.style.backgroundImage = "url('../images/food-contact.webp')";
    content.replaceChildren();
}
