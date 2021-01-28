'use strict';

const inputElement = document.querySelector('.js-number');
const buttonElement = document.querySelector('.js-button');
const hintElement = document.querySelector('.js-hint');
const triesElement =document.querySelector('.js-tries');


//Número aleatorio 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
console.log('El número aleatorio es ' + randomNumber);


//Número introducido
function handlerButton (event) {
    inputNumber ();
};

buttonElement.addEventListener('click',handlerButton);


//Pista
function inputNumber () {
    const inputElementValue = parseInt(inputElement.value);
    console.log('Número introducido ' + inputElementValue);
    if (inputElementValue === randomNumber) {
        hintElement.innerHTML = '¡Enhorabuena! Has acertado campeona';
    } else if (inputElementValue < 1  || inputElementValue > 100) {
        hintElement.innerHTML = 'El número debe estar entre 1 y 100';
    } else if (inputElementValue < randomNumber) {
        hintElement.innerHTML = 'Demasiado bajo ¡sigue intentándolo!';
    } else if (inputElementValue > randomNumber) {
        hintElement.innerHTML = 'Demasiado alto ¡sigue intentándolo!';
    } else {
        hintElement.innerHTML ='Introduce un número para comenzar a jugar';
    }
}
