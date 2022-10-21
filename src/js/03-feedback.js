// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект 
// с полями email и message, в которых сохраняй текущие значения полей формы. 
// Пусть ключом для хранилища будет строка "feedback-form-state".

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные,
//  заполняй ими поля формы. В противном случае поля должны быть пустыми.

// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email,
//  message и текущими их значениями в консоль.

// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
//  Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector(".feedback-form textarea" );
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit',  onFormSubmit);
textarea.addEventListener('input', throttle (onTextareaInput , 500) ) ;

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset(); 
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
 const message = evt.target.value;

 localStorage.setItem(STORAGE_KEY,  message);
}

function populateTextarea() {
   const saveMessage = localStorage.getItem(STORAGE_KEY);

   if(saveMessage){
    console.log(saveMessage);
    textarea.value = saveMessage;
   }
}
