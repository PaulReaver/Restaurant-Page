// Get body and content div and create main element
const content = document.querySelector('#content');
const mainMenu = document.createElement('main');
mainMenu.classList.add('main-menu');

// Create plates
const plates = [];
const plateNames = [];
const plateDescriptions = [];
for (let i = 0; i < 6; i += 1) {
    plates[i] = document.createElement('section');
    plates[i].classList.add('glass-container');

    plateNames[i] = document.createElement('h2');
    plateNames[i].classList.add('glass-title');

    plateDescriptions[i] = document.createElement('p');
    plateDescriptions[i].classList.add('glass-description');

    plates[i].append(plateNames[i], plateDescriptions[i]);
}

plateNames[0].append('Quinoa Lentil Salad');
plateNames[1].append('Cedar-Plank Salmon');
plateNames[2].append('Oriental Coleslaw');
plateNames[3].append('Six-Hour Pork Roast');
plateNames[4].append('Creamy Leak Soup');
plateNames[5].append('Cha Gio');

plateDescriptions[0].append(
    `Quinoa lentil salad is a great option for meal prep. It's an easy and nutritious vegetarian and gluten-free salad.`
);
plateDescriptions[1].append(
    `The salmon takes on a light, smoky woodiness from grilling on a cedar plank, for a lovely pairing of earth and ocean.`
);
plateDescriptions[2].append(
    `Red cabbage, carrots, spring onions, and coriander are tossed in a delicious sweet-sour dressing made with sesame oil, soy sauce, lime juice and honey.`
);
plateDescriptions[3].append(
    `Juicy boneless pork shoulder, rubbed with a mixture of sage, rosemary, garlic, fennel seeds, white wine, olive oil, salt, and pepper.`
);
plateDescriptions[4].append(
    `Dolloped with cool, billowy cream, the soup coaxes out the vegetable's most sensuous side.`
);
plateDescriptions[5].append(
    `Vietnamese spring rolls, stuffed with bean thread noodles, wood ear mushrooms, grated carrot, and ground pork shoulder.`
);

// Add plates to main container
for (let i = 0; i < 6; i += 1) {
    mainMenu.append(plates[i]);
}

// Populate menu
export default function populateMenu() {
    document.body.style.backgroundImage = "url('../food-menu.webp')";
    content.replaceChildren();
    content.append(mainMenu);
}
