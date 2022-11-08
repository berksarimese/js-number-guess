const numbersBetween = document.querySelector('#numbers-between');
const randomNumberText = document.querySelector('#random-number');
const guessBtn = document.querySelector('#guess-button');
const restartBtn = document.querySelector('#restart');
const guessCount = document.querySelector('#guess-count');

let inputNumber = 0;
let betweenNumber = 0;
let betweenNumberMax = 0;
let randomNumber = 0;
let guessCountNumber = 0;

numberGenerator();
guessBtn.addEventListener('click', clickGuess);
restartBtn.addEventListener('click', numberGenerator);

//NUMBER GENERATE AND RESET
function numberGenerator(){
    betweenNumberMax = Math.round(Math.random()*20) + 1;
    betweenNumber = Math.round(Math.random()*betweenNumberMax);
    randomNumber = Math.round(Math.random()*betweenNumber);
    numbersBetween.innerText = 0 + ' - ' + betweenNumber;
    randomNumberText.innerText = '?';
    guessCountNumber = 0;
    guessCount.innerText = 'GUESS COUNT:' + ' ' + guessCountNumber;
    inputNumber = document.querySelector('#guess-number').value = "";
    inputNumber = document.querySelector('#guess-number').disabled = false;
    //randomNumberText.innerText = randomNumber; //ACTIVATE WHEN YOU NEED TO SEE ?
    inputUnlock();
    }

//GUESS FUNCTION
function clickGuess(){
    inputNumber = document.querySelector('#guess-number').value;
    if(inputNumber == randomNumber) {
        inputNumber = document.querySelector('#guess-number').disabled = true;
        guessCountNumber ++;
        if(guessCountNumber == 1) {
            guessCount.innerText = 'YOU GOT IT RIGHT ON THE' + ' ' + guessCountNumber + 'st' + ' ' + 'TRY';
            inputLock();
        }
        if(guessCountNumber == 2) {
            guessCount.innerText = 'YOU GOT IT RIGHT ON THE' + ' ' + guessCountNumber + 'nd' + ' ' + 'TRY';
            inputLock();
        }
        if(guessCountNumber == 3) {
            guessCount.innerText = 'YOU GOT IT RIGHT ON THE' + ' ' + guessCountNumber + 'rd' + ' ' + 'TRY';
            inputLock();
        }
        if(guessCountNumber > 3) {
            guessCount.innerText = 'YOU GOT IT RIGHT ON THE' + ' ' + guessCountNumber + 'th' + ' ' + 'TRY';
            inputLock();
        }
    } else {
        guessCountNumber ++;
        guessCount.innerText = 'GUESS COUNT:' + ' ' + guessCountNumber;
    }}

function inputLock() {
    randomNumberText.innerText = randomNumber;
    guessBtn.style.backgroundColor = 'orange';
    guessBtn.style.cursor = 'default';
    guessBtn.disabled = true;
}

function inputUnlock() {
    guessBtn.style.backgroundColor = '';
    guessBtn.style.cursor = 'pointer';
    guessBtn.disabled = false;
}
