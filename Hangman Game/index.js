let buttons = document.querySelectorAll('main button');

const question = ['Lagos', 'Manchester United', "LeBron", "Real Madrid", "Wizkid"];

let score = 0;

let randomQuestionValue = Math.floor(Math.random() * question.length)

let newArray = Array.from(question[randomQuestionValue])

let category = document.querySelector('.category');

let gameStatus = document.querySelector('.game-status').innerHTML;

let newBtn = Array.from(buttons);
let newValue = 10;

let hint = document.querySelector('.hint-button');
hint.addEventListener('click', quizHints);

let hintText = document.querySelector('.hints')

hintText.style.opacity = "0";

let newQuestion = newArray.map(function (item) {
    return `<span>${item}</span>`
});
