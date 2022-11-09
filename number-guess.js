const numbersBetween = document.querySelector('#numbers-between');
const randomNumberText = document.querySelector('#random-number');
const guessBtn = document.querySelector('#guess-button');
const restartBtn = document.querySelector('#restart');
const guessCount = document.querySelector('#guess-count');
const characterError = document.querySelector('#character-error');
const betweenError = document.querySelector('#between-error');
const inputNumber = document.querySelector('#guess-number');

let betweenNumber = 0;
let betweenNumberMax = 0;
let randomNumber = 0;
let guessCountNumber = 0;
let chars = 0;
let countPoint = 0;
let scoreArray = [];

numberGenerator();
guessBtn.addEventListener('click', characterTest);
restartBtn.addEventListener('click', numberGenerator);

//CHARACTER TEST
function characterTest(){
    if(inputNumber.value != ""){
    let charCount = 0;
    chars = inputNumber.value.split("");

    for (let i = 0; i < chars.length; i++) {
        for(let k = 0; k < 10; k++) {
            if (chars[i] == k) {
            charCount ++;
    }}}

    if(charCount != chars.length) {
        characterError.style.display = 'flex';
        betweenError.style.display = 'none';
    } else { 
        if((inputNumber.value > betweenNumber)) {
            betweenError.innerText = 'has to be between' + ' ' + '0' + ' ' + '-' + ' ' + betweenNumber + '*';
            betweenError.style.display = 'flex';
            characterError.style.display = 'none';
        } else {
        clickGuess();
        characterError.style.display = 'none';
        betweenError.style.display = 'none';
    }}}}
    

//NUMBER GENERATE AND RESET
function numberGenerator(){
    betweenNumberMax = Math.round(Math.random()*100) + 1;
    betweenNumber = Math.round(Math.random()*betweenNumberMax);
    randomNumber = Math.round(Math.random()*betweenNumber);
    numbersBetween.innerText = 0 + ' - ' + betweenNumber;
    randomNumberText.innerText = '?';
    guessCountNumber = 0;
    guessCount.innerText = 'GUESS COUNT:' + ' ' + guessCountNumber;
    inputNumber.value = "";
    inputNumber.disabled = false;
    //randomNumberText.innerText = randomNumber; //ACTIVATE WHEN YOU NEED TO SEE ?
    inputUnlock();
    characterError.style.display = 'none';
    betweenError.style.display = 'none';
    countPoint = 0;
    }

//GUESS FUNCTION
function clickGuess(){
    if(inputNumber.value == randomNumber) {
        inputNumber.disabled = true;
        guessCountNumber ++;
        if(guessCountNumber == 1) {
            guessCount.innerText = 'YOU GOT IT RIGHT ON THE' + ' ' + guessCountNumber + 'st' + ' ' + 'TRY';
            inputLock();
            calculateScore();
        }
        if(guessCountNumber == 2) {
            guessCount.innerText = 'YOU GOT IT RIGHT ON THE' + ' ' + guessCountNumber + 'nd' + ' ' + 'TRY';
            inputLock();
            calculateScore();
        }
        if(guessCountNumber == 3) {
            guessCount.innerText = 'YOU GOT IT RIGHT ON THE' + ' ' + guessCountNumber + 'rd' + ' ' + 'TRY';
            inputLock();
            calculateScore();
        }
        if(guessCountNumber > 3) {
            guessCount.innerText = 'YOU GOT IT RIGHT ON THE' + ' ' + guessCountNumber + 'th' + ' ' + 'TRY';
            inputLock();
            calculateScore();
        }
    } else {
        if(countPoint < betweenNumber){ countPoint ++; }
        guessCountNumber ++;
        guessCount.innerText = 'GUESS COUNT:' + ' ' + guessCountNumber;
    }}


//LOCKING INPUT AND GUESS BUTTON
function inputLock() {
    randomNumberText.innerText = randomNumber;
    guessBtn.style.backgroundColor = 'orange';
    guessBtn.style.cursor = 'default';
    guessBtn.disabled = true;
}

//UNLOCKING INPUT AND GUESS BUTTON
function inputUnlock() {
    guessBtn.style.backgroundColor = '';
    guessBtn.style.cursor = 'pointer';
    guessBtn.disabled = false;
}

//STORAGE SCORE DATA IN MAXIMUM 3 ELEMENT ARRAY - DELETING 3rd ADDING TO 1st
function calculateScore(){
    const newScore = {
        max: betweenNumber,
        guess: countPoint,
    }
    if(scoreArray.length > 2) {
        scoreArray.pop();
        scoreArray.unshift(newScore);
    } else { scoreArray.unshift(newScore); }

    addScore();
}

//DELETING OLD SCORE TABLE AND CREATING THE NEW ONE
function addScore(){
    const scoreTable = document.querySelector('.score-info');
    const cnt = scoreTable.childElementCount;
    
    for (let i = 0; i < scoreArray.length; i++) {
        const div = document.createElement('div');
        div.className = 'score-item';
        div.innerText = scoreArray[i].max + ' ' + '-' + ' ' + scoreArray[i].guess + ' ' + ':' + ' ' + (scoreArray[i].max - scoreArray[i].guess);
        scoreTable.appendChild(div);
    }

    for (let k = cnt - 1; k > 0; k--) {
        scoreTable.removeChild(scoreTable.children[k]); 
    }
}