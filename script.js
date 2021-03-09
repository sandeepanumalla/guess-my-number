'Use Strict'

const inputValue = document.getElementById("myInput");

let check = document.getElementById("btn");

let randomNumber =Math.ceil(Math.random()*20);

let message = document.querySelector('.message');

let scoreElement = document.querySelector('.score');
let highScoreElement = document.querySelector('.high-score');




console.log();

console.log(message.textContent)

let highScore = 0;
let score = 20;


check.addEventListener('click',()=>{

    console.log(inputValue.value);
    
    if(score > 0){
        if(randomNumber == inputValue.value){
            console.log("That's correct");
            message.textContent = "That's correct";
            if(score > highScore){
                highScore = score;
                highScoreElement.children[0].children[0].textContent=highScore;
            }
            scoreElement.children[0].children[0].textContent=score;
            document.querySelector(".answer").textContent=randomNumber;
            console.log("Score is", score)
            document.body.style.backgroundColor="rgb(71, 176, 67)";
        }
        if(inputValue.value != randomNumber){
            if(inputValue.value > randomNumber ){
                console.log("Too high");
                message.textContent = "Too high";
                score -= 1;
                console.log("Score is", score)
                scoreElement.children[0].children[0].textContent=score;
            }
            if(inputValue.value < randomNumber){
            console.log("Too Low");
            message.textContent = "Too Low";
            score -= 1;
            console.log("Score is", score)

            scoreElement.children[0].children[0].textContent = score;
            }
        }
    }else{
        console.log("Game over my friend..");
        check.setAttribute('disabled','true');
    }
    
    
})

const Again = document.querySelector(".header_btn");
console.log(Again);
Again.addEventListener('click',()=>
{
    if( check.hasAttribute('disabled')){
        check.removeAttribute('disabled');
    }
    
    document.body.style.backgroundColor="rgb(32, 32, 32)";
    score = 20;
    randomNumber =Math.ceil(Math.random()*20);
    scoreElement.children[0].children[0].textContent=score;
    console.log("you are playing again. Your Score is ", score);
    console.log("High score is ", highScore);
    highScoreElement.children[0].children[0].textContent=highScore;
    document.querySelector(".answer").textContent="?"
    message.textContent="Start guessing...";
})