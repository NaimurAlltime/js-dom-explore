//1. where to add 
const languageContainer = document.getElementById('language_container');

// 2. what to be added 
const li = document.createElement('li');
li.innerText = 'Java';

// 3. add the child 
languageContainer.appendChild(li);


//1. where to add 
const sectionContainer = document.getElementById('section_container');

// 2. what to be added 
const section = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = 'My Food List';
section.appendChild(h2);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Kacchi Birani";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "Berger";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "Pizza";
ul.appendChild(li3);

section.appendChild(ul);

sectionContainer.appendChild(section);

// set innerHtml directly 
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
 <h1> My Dress List </h1>
 <ul>
   <li> Panjabi </li>
   <li> Shirt </li>
   <li> Shue </li>
</ul> 
`;

sectionContainer.appendChild(sectionDress);