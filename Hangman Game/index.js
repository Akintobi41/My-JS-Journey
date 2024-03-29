const question = ['Lagos', 'Manchester United', "LeBron", "Real Madrid", "Wizkid"];

let buttons = document.querySelectorAll('main button'),

    score = 0,

    randomQuestionValue = Math.floor(Math.random() * question.length),

    newArray = Array.from(question[randomQuestionValue]),

    category = document.querySelector('.category'),

    gameStatus = document.querySelector('.game-status').innerHTML,

    newBtn = Array.from(buttons),

    newValue = 10,

    hint = document.querySelector('.hint-button');
hint.addEventListener('click', quizHints);

let hintText = document.querySelector('.hints')

hintText.style.opacity = "0";

let newQuestion = newArray.map(function (item) {
    return `<span>${item}</span>`
});

quizType();

function quizType() {
    if (newArray.join("").toLowerCase() == "lagos") {
        category.textContent = "The chosen category is Cities";
    }
    else if (newArray.join("").toLowerCase() == "lebron") {
        category.textContent = "The chosen category is Famous Basketball Player";
    }
    else if (newArray.join("").toLowerCase() == "real madrid") {
        category.textContent = "The chosen category is Football Club";
    }
    else if (newArray.join("").toLowerCase() == "manchester united") {
        category.textContent = "The chosen category is Football Club";
    }
    else if (newArray.join("").toLowerCase() == "wizkid") {
        category.textContent = "The chosen category is Nigerian Musician";
    }
}
function quizHints() {

    hintText.style.opacity = "1";

    if (newArray.join("").toLowerCase() == "lagos") {
        hintText.textContent = "Most populous city in Nigeria ?";
    }
    else if (newArray.join("").toLowerCase() == "lebron") {
        hintText.textContent = "Drafted in 2003 by Cleveland Cavaliers";
    }
    else if (newArray.join("").toLowerCase() == "real madrid") {
        hintText.textContent = "The most successful champions league club";
    }
    else if (newArray.join("").toLowerCase() == "manchester united") {
        hintText.textContent = "The pride of England";
    }
    else if (newArray.join("").toLowerCase() == "wizkid") {
        hintText.textContent = "Famous Song - Pakurumo!";
    }
}


let questionBox = document.querySelector('.question');

questionBox.innerHTML = newQuestion.join("").toLowerCase();

let span = document.querySelectorAll('span'),

    spanArray = Array.from(span)

span.forEach(function (item) {
    item.style.color = "transparent";

    if (item.textContent == " ") {
        item.innerHTML = "-";
        item.style.color = "white"
        score++;
    }

});

let usableBtn = newBtn.map(function (button) {
    button.addEventListener('click', letterUpdate)
});

// button Onclick

function letterUpdate(e) {

    let newEl = spanArray.map(function (item) {
        return item.textContent
    })

    let arrayValue = newEl.join("");

    if (!arrayValue.includes(e.target.textContent)) {
        --newValue;
        e.target.style.display = "none";
    }

    if (newValue == 0) {
        let usableBtn = newBtn.map(function (button) {
            button.removeEventListener('click', letterUpdate)
        });
        hintText.style.opacity = "0";

        return document.querySelector('.game-status').textContent = "Game Over!!!"
    }

    document.querySelector('small').textContent = newValue;

    span.forEach(function (spanText) {

        if (spanText.textContent == e.target.textContent) {
            spanText.style.color = "white";
            score++;
            e.target.style.display = "none";
        }

    });

    if (score == newQuestion.length) {
        hintText.style.opacity = "0";
        document.querySelector('.result').textContent = "You win!";
        hint.removeEventListener('click', quizHints);
        let usableBtn = newBtn.map(function (button) {
            button.removeEventListener('click', letterUpdate)
        });
    }

}

// Restart Game function

const restartGame = document.querySelector('.restart');

let score1 = 0;

let count = 0;

if (count == 0) {
    restartGame.addEventListener('click', gameRestart);
}


function gameRestart(e) {
    count++;

    if (count > 0) {
        restartGame.removeEventListener('click', gameRestart);
    }

    let restart_newValue = 10;

    const question1 = ['Lagos', 'Manchester United', "LeBron", "Real Madrid", "Wizkid"];

    // remove previous event listener

    let usableBtn = newBtn.map(function (button) {
        button.removeEventListener('click', letterUpdate)
    });

    document.querySelector('.game-status').innerHTML = gameStatus;

    document.querySelector('.result').textContent = "";

    let randomQuestionValue1 = Math.floor(Math.random() * question.length);

    let newArray1 = Array.from(question1[randomQuestionValue1]);

    let restartQuestion = newArray1.map(function (item) {
        return `<span>${item}</span>`
    });
    let hintBtn = document.querySelector('.hint-button');

    hintBtn.addEventListener('click', restart_quizHints);

    let restartHint = document.querySelector('.hints');

    restartHint.style.opacity = "0";

    function restart_quizHints() {
        restartHint.style.opacity = "1";

        if (newArray1.join("").toLowerCase() == "lagos") {
            restartHint.textContent = "Most populous city in Nigeria ?";
        }
        else if (newArray1.join("").toLowerCase() == "lebron") {
            restartHint.textContent = "Drafted in 2003 by Cleveland Cavaliers";
        }
        else if (newArray1.join("").toLowerCase() == "real madrid") {
            restartHint.textContent = "The most successful champions league club";
        }
        else if (newArray1.join("").toLowerCase() == "manchester united") {
            restartHint.textContent = "The pride of England";
        }
        else if (newArray1.join("").toLowerCase() == "wizkid") {
            restartHint.textContent = "Famous Song - Pakurumo!";
        }

    }

    if (newArray1.join("").toLowerCase() == "lagos") {
        category.textContent = "The chosen category is Cities";
    }
    else if (newArray1.join("").toLowerCase() == "lebron") {
        category.textContent = "The chosen category is Famous Basketball Player";
    }
    else if (newArray1.join("").toLowerCase() == "real madrid") {
        category.textContent = "The chosen category is Football Club";
    }
    else if (newArray1.join("").toLowerCase() == "manchester united") {
        category.textContent = "The chosen category is Football Club";
    }
    else if (newArray1.join("").toLowerCase() == "wizkid") {
        category.textContent = "The chosen category is Nigerian Musician";
    }
    document.querySelector('.question').innerHTML = restartQuestion.join("").toLowerCase();

    let newBtn1 = Array.from(buttons)

    let usableBtn1 = newBtn1.map(function (button) {

        button.style.display = "block";
        button.addEventListener('click', letterUpdate1);

    });

    let span1 = document.querySelectorAll('span');

    let spanArray1 = Array.from(span1);

    span1.forEach(function (item) {
        item.style.color = "transparent";

        if (item.textContent == " ") {
            item.innerHTML = "-";
            item.style.color = "white"
            score1++;
        }

    });

    function letterUpdate1(e) {

        let newEl1 = spanArray1.map(function (item) {
            return item.textContent;
        });

        let arrayValue1 = newEl1.join("");

        if (!arrayValue1.includes(e.target.textContent)) {
            --restart_newValue;
            e.target.style.display = "none";
        }

        if (restart_newValue == 0) {
            let usableBtn1 = newBtn1.map(function (button) {
                button.removeEventListener('click', letterUpdate1)
            });
            score1 = 0;
            restartHint.style.opacity = "0";
            restartGame.addEventListener('click', gameRestart);
            return document.querySelector('.game-status').textContent = "Game Over!!!"
        }

        span1.forEach(function (item) {

            if (item.textContent == e.target.textContent) {
                item.style.color = "white";
                score1++;
                e.target.style.display = "none";
            }
        });

        if (score1 == restartQuestion.length) {
            let usableBtn1 = newBtn1.map(function (button) {
                button.removeEventListener('click', letterUpdate1);
            });


            score1 = 0;
            restartHint.style.opacity = "0";
            document.querySelector('.result').textContent = "You win!";
            restartGame.addEventListener('click', gameRestart);
        }
        document.querySelector('small').textContent = restart_newValue;
    }
}

