'use strict';

const INPUT_ELEMENT = document.querySelector('.js-number');
const BUTTON_ELEMENT = document.querySelector('.js-button');
const HINT_ELEMENT = document.querySelector('.js-hint');
const TRIES_ELEMENT =document.querySelector('.js-tries');
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

let counter = 0;
let randomNumber = getRandomNumber(MAX_NUMBER);
console.log('El número aleatorio es ' + randomNumber);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleButton(ev) {
    const hintForNumber = getHint(parseInt(INPUT_ELEMENT.value));
    console.log('Número introducido ' + parseInt(INPUT_ELEMENT.value));
    showHint(HINT_ELEMENT, hintForNumber)
    triesCounter();
}
BUTTON_ELEMENT.addEventListener('click',handleButton);

function getHint(number) {
    if (number === randomNumber) {
        return '¡Enhorabuena! Has acertado campeona';
    } else if (number < MIN_NUMBER  || number > MAX_NUMBER) {
        return 'El número debe estar entre 1 y 100';
    } else if (number < randomNumber) {
        return 'Demasiado bajo ¡sigue intentándolo!';
    } else if (number > randomNumber) {
        return 'Demasiado alto ¡sigue intentándolo!';
    } else {
       return '¡Ups! Introduce tu número';
    }
}

function showHint(element, text) {
    element.innerHTML = text;
}

function triesCounter () {
    if (HINT_ELEMENT.innerHTML === '¡Enhorabuena! Has acertado campeona' || HINT_ELEMENT.innerHTML === '¡Ups! Introduce tu número') {
        counter += 0;
        TRIES_ELEMENT.innerHTML = `Número de intentos: ${counter}`;
    } else {
        counter += 1;
        TRIES_ELEMENT.innerHTML = `Número de intentos: ${counter}`;
    }
}

function handlerNoSubmit(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
}
INPUT_ELEMENT.addEventListener("keydown", handlerNoSubmit);
