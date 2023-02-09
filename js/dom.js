// console.log(document);
console.log(document.body);
const liCollection = document.getElementsByTagName('li');

for(const li of liCollection){
   console.log(li.innerText);
}

// Option-1: getElementsByTagName
const h3Collection = document.getElementsByTagName('h3');
for(const h3 of h3Collection){
    console.log(h3.innerText);
}

// Option-2: getElementById 
document.getElementById('title').innerText = "EXPLORE DOM";

// Option-3: getElementsByClassName
const languageCollection = document.getElementsByClassName('programing_language');

for(const language of languageCollection){
    console.log(language.innerText);
}

// Option-4: querySelector
document.querySelector('.fruits_container li');

// Option-5: querySelectorAll
const fruitsCollection = document.querySelectorAll('.fruits_container li');
for(const fruits of fruitsCollection){
    console.log(fruits.innerText);
}