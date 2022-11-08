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

numberGenerator();
guessBtn.addEventListener('click', characterTest);
restartBtn.addEventListener('click', numberGenerator);


//CHARACTER TEST
function characterTest(){
    let charCount = 0;
    chars = inputNumber.value.split("");
    console.log(chars);

    for (let i = 0; i < chars.length; i++) {
        for(let k = 0; k < 10; k++) {
            if (chars[i] == k) {
            charCount ++;
    }}}

    if(charCount != chars.length) {
        console.log('farklı karakter');
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
        console.log('doğru karakter'); }}
}
    

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
    }

//GUESS FUNCTION
function clickGuess(){
    if(inputNumber.value == randomNumber) {
        inputNumber.disabled = true;
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
