const rock = 0;
const paper = 1;
const scissors = 2;
let playerIcons = document.getElementsByClassName("player-icons");

document.getElementById("rock-btn").onclick = function() {
    
    playerIcons[rock].style.display = "block";
    playerIcons[paper].style.display = "none";
    playerIcons[scissors].style.display = "none";
}

document.getElementById("paper-btn").onclick = function() {
    playerIcons[rock].style.display = "none";
    playerIcons[paper].style.display = "block";
    playerIcons[scissors].style.display = "none";
}

document.getElementById("scissors-btn").onclick = function() {
    playerIcons[rock].style.display = "none";
    playerIcons[paper].style.display = "none";
    playerIcons[scissors].style.display = "block";
}