let humanScore = 0;
let computerScore = 0;
let computerChoice = "";
let humanChoice = "";
let input = ""
let userMessage = "";

function getComputerChoice() {
    randomNumber=Math.floor(Math.random() * 100) +1;
    console.log(randomNumber);
    if (randomNumber <= 33) {
        return computerChoice = "rock";
    } else if (randomNumber >= 66) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

function getHumanChoice() {
    input = prompt("Please enter your choice /(either rock, paper, or scissors/): ");
    return humanChoice = input.toLowerCase(); 
}

function playRound(humanChoice, computerChoice) {
    console.log(computerChoice);
    console.log(humanChoice);
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore + 1;
        return userMessage = "You win! Rock beats scissors!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore + 1;
        return userMessage = "You win! Paper beats rock!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore + 1;
        return userMessage = "You win! Scissors beats paper!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore + 1;
        return userMessage = "You lose! Paper beats rock!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore + 1;
        return userMessage = "You lose! Scissors beats paper!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore + 1;
        return userMessage = "You lose! Rock beats scissors!";
    } else {
        return userMessage = "It's a tie!  We are playing best of 5.  Play again!"
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    console.log(userMessage)
}
playGame();
