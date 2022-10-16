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


document.getElementById("rock-btn").onclick = function() {

    player = rock;
    playerIcons[rock].style.display = "block";
    playerIcons[paper].style.display = "none";
    playerIcons[scissors].style.display = "none";
    computerChoice();
    scores();
};

document.getElementById("paper-btn").onclick = function() {

    player = paper;
    playerIcons[rock].style.display = "none";
    playerIcons[paper].style.display = "block";
    playerIcons[scissors].style.display = "none";
    computerChoice();
    scores();
};

document.getElementById("scissors-btn").onclick = function() {

    player = scissors;
    playerIcons[rock].style.display = "none";
    playerIcons[paper].style.display = "none";
    playerIcons[scissors].style.display = "block";
    computerChoice();
    scores();
};

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

function scores (){

    let playerOutcome = "who wins?";
    let computerOutcome = "who wins?";

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

   /* if (playerScore == 5){

        winOrLose = "you won! ";
        reset();

    } else if (computerScore == 5){

        winOrLose = "you lost! ";
        reset();

    }*/

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