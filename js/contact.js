// Get body and content div and create main element
const content = document.querySelector('#content');
const mainContact = document.createElement('main');
mainContact.classList.add('main-contact');

const openingHoursContainer = document.createElement('section');
openingHoursContainer.classList.add('glass-container');

// Create Opening hours title
const openingHoursTitle = document.createElement('h2');
openingHoursTitle.classList.add('glass-title');
openingHoursTitle.append('Opening Hours');

// Create Monday - Thursday title
const mondayToThursday = document.createElement('h3');
mondayToThursday.classList.add('glass-subtitle');
mondayToThursday.append('Monday - Thursday');

// Create Monday - Thursday hours
const mondayToThursdayHours = document.createElement('p');
mondayToThursdayHours.classList.add('glass-description');
mondayToThursdayHours.append('9am - 6pm');

// Create Friday - Saturday title
const fridayToSaturday = document.createElement('h3');
fridayToSaturday.classList.add('glass-subtitle');
fridayToSaturday.append('Friday - Saturday');

// Create Friday - Saturday hours
const fridayToSaturdayHours = document.createElement('p');
fridayToSaturdayHours.classList.add('glass-description');
fridayToSaturdayHours.append('9am - 11pm');

// Create Sunday title
const sunday = document.createElement('h3');
sunday.classList.add('glass-subtitle');
sunday.append('Sunday');

// Create Sunday hours
const sundayHours = document.createElement('p');
sundayHours.classList.add('glass-description');
sundayHours.append('Closed');

// Append all days and hours to container
openingHoursContainer.append(
    openingHoursTitle,
    mondayToThursday,
    mondayToThursdayHours,
    fridayToSaturday,
    fridayToSaturdayHours,
    sunday,
    sundayHours
);

// Append containers to main container
mainContact.append(openingHoursContainer);

// Populate page
export default function populateContact() {
    document.body.style.backgroundImage = "url('../images/food-contact.webp')";
    content.replaceChildren();
    content.append(mainContact);
}
