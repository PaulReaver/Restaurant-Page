// Get body and content div and create main element
const content = document.querySelector('#content');
const mainContact = document.createElement('main');
mainContact.classList.add('main-contact');

const information = [];
const informationTitles = [];
const informationSubtitles = [];
const informationDescriptions = [];

// Create information containers
for (let i = 0; i < 2; i += 1) {
    information[i] = document.createElement('section');
    information[i].classList.add('glass-container');
}

// Create information container titles
for (let i = 0; i < 2; i += 1) {
    informationTitles[i] = document.createElement('h2');
    informationTitles[i].classList.add('glass-title');
}

// Create information titles' text
informationTitles[0].append('Opening Hours');
informationTitles[1].append('Contact Us');

// Create information subtitles and descriptions
for (let i = 0; i < 6; i += 1) {
    informationSubtitles[i] = document.createElement('h3');
    informationSubtitles[i].classList.add('glass-subtitle');
    informationDescriptions[i] = document.createElement('p');
    informationDescriptions[i].classList.add('glass-description');
}

// Append text to information subtitles and descriptions
informationSubtitles[0].append('Monday - Thursday');
informationDescriptions[0].append('9am - 6pm');
informationSubtitles[1].append('Friday - Saturday');
informationDescriptions[1].append('9am - 11pm');
informationSubtitles[2].append('Sunday');
informationDescriptions[2].append('Closed');
informationSubtitles[3].append('Phone Number');
informationDescriptions[3].append('123456789');
informationSubtitles[4].append('Email');
informationDescriptions[4].append('restaurant@mail.com');
informationSubtitles[5].append('Location');
informationDescriptions[5].append('123 East Downtown Place');

// Append all to information containers
for (let i = 0; i < 2; i += 1) {
    information[i].append(informationTitles[i]);
}

for (let i = 0; i < 3; i += 1) {
    information[0].append(informationSubtitles[i], informationDescriptions[i]);
}

for (let i = 3; i < 6; i += 1) {
    information[1].append(informationSubtitles[i], informationDescriptions[i]);
}

// Append containers to main container
mainContact.append(information[0], information[1]);

// Populate page
export default function populateContact() {
    content.replaceChildren();
    content.append(mainContact);
}
