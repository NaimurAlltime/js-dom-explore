// console.log(document);
console.log(document.body);
const liCollection = document.getElementsByTagName('li');

for(const li of liCollection){
   console.log(li.innerText);
}

const h3Collection = document.getElementsByTagName('h3');
for(const h3 of h3Collection){
    console.log(h3.innerText);
}