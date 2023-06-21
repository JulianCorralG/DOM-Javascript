/* 
const misToppings = document.getElementsByTagName('li');
console.log(misToppings);

const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');
console.log(toppingsFondoMarron);

const toppingsFondoNaranja = document.getElementsByClassName('fondo-naranja');
console.log(toppingsFondoNaranja);


const primerToppingNaranja = document.querySelector('ul li:not(.fondo-marron');
console.log(primerToppingNaranja);


const primerTopping = document.querySelector('.topping');

console.log(primerTopping.style);

primerTopping.style.backgroundColor= '#6dff00';
primerTopping.style.color= 'red';
primerTopping.style.textTransform = 'uppercase'


const listaDeToppings = document.getElementById('lista-toppings');
console.log('>> innerText');
console.log(listaDeToppings.innerText);
console.log(listaDeToppings.textContent);
console.log(listaDeToppings.innerHTML);

const titulo = document.getElementById('titulo');
console.log(titulo);

titulo.innerText = 'Mis pizzas PRO :)'

for (const topping of toppings) {
    topping.addEventListener('click', (e) =>{
    console.log(e.target.innerText);});
}
*/

const toppings = document.getElementsByClassName('topping');

function mostrarClic(e){
    console.log(e.target.innerText);
}

for (const topping of toppings) {
    topping.addEventListener('click', mostrarClic);
}