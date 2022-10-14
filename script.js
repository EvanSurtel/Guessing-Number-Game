'use strict';



let number = Math.trunc(Math.random()*20) + 1;
console.log(number);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const setScore = function(score){
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', 
    function(){
        const guess = Number(document.querySelector('.guess').value);
        
        if(!guess) {//user leaves guess empty
            displayMessage('You didn\'t guess!')
        } else if(guess === number) {//player wins
            document.querySelector('.number').textContent = number;
            displayMessage('Correct');
            document.querySelector('body').style.backgroundColor = '#3beb06'
            document.querySelector('.number').style.width = '35rem';
            
            if(score>highscore){
            
            document.querySelector('.highscore').textContent = score;
            }
        }else if(number !== guess){//guess is incorrect
            if(score > 1){
                displayMessage(number > guess ? 'Too low!' : 'Too high!');
                score--;
                setScore(score);
            }else{
                score = 0;
                displayMessage('You lose...');
                setScore(score);
            }
        }
            
        
})

document.querySelector('.again').addEventListener('click', 
    function(){
        score = 20;
        setScore(score);
        number = Math.trunc(Math.random()*20) + 1;
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor = 'rgb(8, 8, 8)';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        displayMessage('Start guessing...');


})