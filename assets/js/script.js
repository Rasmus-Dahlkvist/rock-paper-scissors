const rock = 0;
const paper = 1;
const scissors = 2;
let playerIcons = document.getElementsByClassName("player-icons");
let computerIcons = document.getElementsByClassName("computer-icons");
let computer;

document.getElementById("rock-btn").onclick = function() {
    playerIcons[rock].style.display = "block";
    playerIcons[paper].style.display = "none";
    playerIcons[scissors].style.display = "none";
    computerChoice();
};

document.getElementById("paper-btn").onclick = function() {
    playerIcons[rock].style.display = "none";
    playerIcons[paper].style.display = "block";
    playerIcons[scissors].style.display = "none";
    computerChoice();
};

document.getElementById("scissors-btn").onclick = function() {
    playerIcons[rock].style.display = "none";
    playerIcons[paper].style.display = "none";
    playerIcons[scissors].style.display = "block";
    computerChoice();
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