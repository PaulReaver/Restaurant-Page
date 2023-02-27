// Get body and content div and create main element
const content = document.querySelector('#content');
const mainContact = document.createElement('main');
mainContact.classList.add('main-contact');

const openingHoursContainer = document.createElement('section');
openingHoursContainer.classList.add('opening-hours');

const openingHoursTitle = document.createElement('h2');
openingHoursTitle.classList.add('opening-hours-title');
openingHoursTitle.append('Opening Hours');

const mondayToThursday = document.createElement('h3');
mondayToThursday.classList.add('day');
mondayToThursday.append('Monday - Thursday');

const mondayToThursdayHours = document.createElement('p');
mondayToThursdayHours.classList.add('hours');
mondayToThursdayHours.append('9am - 6pm');

openingHoursContainer.append(
    openingHoursTitle,
    mondayToThursday,
    mondayToThursdayHours
);

// Populate page
export default function populateContact() {
    document.body.style.backgroundImage = "url('../images/food-contact.webp')";
    content.replaceChildren();
    content.append(openingHoursContainer);
}
