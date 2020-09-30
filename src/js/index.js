"use strict";

import '../css/index.css';

const button = document.querySelector('#button');
const buttonNext = document.querySelector('#buttonNext');
const card = document.querySelector('#card');
const cardNext = document.querySelector('#cardNext');
const ask = document.querySelector('#ask');
const askNext = document.querySelector('#askNext');
const answer = document.querySelector('#answer');
const answerNext = document.querySelector('#answerNext');
const oval = document.querySelector('#oval');
const ovalNext = document.querySelector('#ovalNext');
const path = document.querySelector('#path');
const pathNext = document.querySelector('#pathNext');

button.addEventListener('click', () => {
    card.classList.toggle('cards__image_type_selected');
    oval.classList.toggle('cards__oval_type_selected');
    path.classList.toggle('cards__path_type_selected');
    ask.style.display = 'none'
    answer.style.display = 'flex'
});

card.addEventListener('click', () => {

    if (ask.style.display == 'flex') {
        card.classList.toggle('cards__image_type_selected');
        oval.classList.toggle('cards__oval_type_selected');
        path.classList.toggle('cards__path_type_selected');
        ask.style.display = 'none'
        answer.style.display = 'flex'
    } else if (answer.style.display == 'flex') {
        card.classList.toggle('cards__image_type_selected');
        oval.classList.toggle('cards__oval_type_selected');
        path.classList.toggle('cards__path_type_selected');
        answer.style.display = 'none'
        ask.style.display = 'flex'
    }
});

buttonNext.addEventListener('click', () => {
    cardNext.classList.toggle('cards__image_type_selected');
    ovalNext.classList.toggle('cards__oval_type_selected');
    pathNext.classList.toggle('cards__path_type_selected');
    askNext.style.display = 'none'
    answerNext.style.display = 'flex'
});

cardNext.addEventListener('click', () => {
    if (askNext.style.display == 'flex') {
        cardNext.classList.toggle('cards__image_type_selected');
        ovalNext.classList.toggle('cards__oval_type_selected');
        pathNext.classList.toggle('cards__path_type_selected');
        askNext.style.display = 'none'
        answerNext.style.display = 'flex'
    } else if (answerNext.style.display == 'flex') {
        cardNext.classList.toggle('cards__image_type_selected');
        ovalNext.classList.toggle('cards__oval_type_selected');
        pathNext.classList.toggle('cards__path_type_selected');
        answerNext.style.display = 'none'
        askNext.style.display = 'flex'
    }

});