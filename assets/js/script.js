// Variables
let playerIcons = document.getElementsByClassName("player-icons");
let computerIcons = document.getElementsByClassName("computer-icons");

let computer;
let player;

let playerScore = 0;
let computerScore = 0;

let winOrLose;

const rock = 0;
const paper = 1;
const scissors = 2;

// When player choose rock: Reveal players rock icon + Get computers choice and compare values
document.getElementById("rock-btn").onclick = function() {

    player = rock;
    playerIcons[rock].style.display = "block";
    playerIcons[paper].style.display = "none";
    playerIcons[scissors].style.display = "none";
    computerChoice();
    scores();
};

// When player choose paper: Reveal players paper icon + Get computers choice and compare values
document.getElementById("paper-btn").onclick = function() {

    player = paper;
    playerIcons[rock].style.display = "none";
    playerIcons[paper].style.display = "block";
    playerIcons[scissors].style.display = "none";
    computerChoice();
    scores();
};

// When player choose scissors: Reveal players scissors icon + Get computers choice and compare values
document.getElementById("scissors-btn").onclick = function() {

    player = scissors;
    playerIcons[rock].style.display = "none";
    playerIcons[paper].style.display = "none";
    playerIcons[scissors].style.display = "block";
    computerChoice();
    scores();
};

// Randomizes the computers choice and reveals computers icon
function computerChoice (){

    computer = Math.floor(Math.random() * 3);

    if (computer == rock){
        computerIcons[rock].style.display = "block";
        computerIcons[paper].style.display = "none";
        computerIcons[scissors].style.display = "none";
    } else if (computer == paper){
        computerIcons[rock].style.display = "none";
        computerIcons[paper].style.display = "block";
        computerIcons[scissors].style.display = "none";
    } else if (computer == scissors){
        computerIcons[rock].style.display = "none";
        computerIcons[paper].style.display = "none";
        computerIcons[scissors].style.display = "block";
    }
};

/* 
Compare player and computer values
Add score to round-winner and check if any player reach 5 points
When 5 points are reached declare winner and reset game*/
function scores (){

    let playerOutcome = "";
    let computerOutcome = "";

    if (computer == player){
        computerOutcome = "Tie!";
        playerOutcome = "Tie!"

    } else if (
        computer == rock && player == scissors ||
        computer == paper && player == rock ||
        computer == scissors && player == paper
    ){
        computerScore++;
        computerOutcome = "Win!";
        playerOutcome = "Lose!";

    } else if (
        player == rock && computer == scissors ||
        player == paper && computer == rock ||
        player == scissors && computer == paper
    ){
        playerScore++;
        playerOutcome = "Win!";
        computerOutcome = "Lose!";
    }

    document.getElementById("player-score").innerHTML = "Score:" + playerScore;
    document.getElementById("player-outcome").innerHTML = playerOutcome;
    document.getElementById("computer-score").innerHTML = "Score:" + computerScore;
    document.getElementById("computer-outcome").innerHTML = computerOutcome;

    if (playerScore == 5){

        winOrLose = "You Won! \n";
        reset();

    } else if (computerScore == 5){

        winOrLose = "You Lost! \n";
        reset();
    }
}

// Reveal confirm box. If Ok is pressed reset game values
function reset (){

    if (confirm(winOrLose + "Press Ok to play again !")){

        playerScore = 0;
        computerScore = 0;
        playerOutcome = "";
        computerOutcome = "";

        playerIcons[rock].style.display = "none";
        playerIcons[paper].style.display = "none";
        playerIcons[scissors].style.display = "none";

        computerIcons[rock].style.display = "none";
        computerIcons[paper].style.display = "none";
        computerIcons[scissors].style.display = "none";

        document.getElementById("player-score").innerHTML = "Score:" + playerScore;
        document.getElementById("player-outcome").innerHTML = playerOutcome;
        document.getElementById("computer-score").innerHTML = "Score:" + computerScore;
        document.getElementById("computer-outcome").innerHTML = computerOutcome;
    }
}