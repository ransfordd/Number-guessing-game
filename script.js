const guess = document.getElementById('guess');
const display = document.getElementById('display');

const minNum = 1;
const maxNum = 100;

let attempts = 0;
let running = true;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


function check(){

    userGuess = Number(guess.value);

    if(isNaN(userGuess)){
        display.textContent = "Ener a number";
    }
    else if(userGuess < minNum || userGuess > maxNum){
        display.textContent = "Enter a valid number";
    }
    else{
        attempts++;
        if(userGuess < answer){
            display.textContent = "Too low! Try again";
        }
        else if(userGuess > answer){
            display.textContent = "Too high! Try again";
        }
        else{
            display.textContent = `Hurrayyyy!!! You guessed it right. The answer is ${answer}. You used ${attempts} attempts`
            
        }
        running = false
    }
}

function reload(){
    location.reload()
}