let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber);


const submit = document.getElementById('sbt');
const userInput = document.getElementById('guessField');
// const guessSlot = document.getElementsByClassName('guesses')[0];
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Pleas enter a number less than or equal to 100');
    } else {
        prevGuess.push(guess);
        if (numGuess > 2) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage('You guess the right number');
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('You guess TOOO lesser number');
    } else if (guess > randomNumber) {
        displayMessage('You guess TOOO higher number');
    }
};

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
};

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>` 
};

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
};

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}