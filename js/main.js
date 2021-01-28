'use strict';

const inputElement = document.querySelector('.js-number');
const submitElement = document.querySelector('.js-submit');
const hintElement = document.querySelector('js-hint');
const triesElement =document.querySelector('.js-tries');


//Número aleatorio 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
console.log('El número aleatorio es ' + randomNumber);

