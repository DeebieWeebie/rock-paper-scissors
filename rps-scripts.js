var computerChoice
var humanScore = 0
var computerScore = 0

function getComputerChoice() {
    randomNumber=Math.floor(Math.random() * 100) +1;
    console.log(randomNumber);
    if (randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber >= 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}
console.log(getComputerChoice());

var input
var humanChoice

function getHumanChoice() {
    input = prompt("Please enter your choice /(either rock, paper, or scissors/): ");
    return humanChoice = input.toLowerCase();
}
console.log(getHumanChoice());

function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        str1 = "rock";
    } else if (randomNumber >= 66) {
        str1 = "paper";
    } else {
        str1 = "scissors"
    }
    return
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);