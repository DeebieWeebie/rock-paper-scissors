let humanScore = 0;
let computerScore = 0;
let computerChoice = "";
let humanChoice = "";
let input = ""
let userMessage = "";

function getComputerChoice() {
    randomNumber=Math.floor(Math.random() * 100) +1;
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
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore = humanScore + 1;
        return userMessage = "You win! Rock beats scissors!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore = humanScore + 1;
        return userMessage = "You win! Paper beats rock!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore = humanScore + 1;
        return userMessage = "You win! Scissors beats paper!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore = computerScore + 1;
        return userMessage = "You lose! Paper beats rock!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore = computerScore + 1;
        return userMessage = "You lose! Scissors beats paper!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore = computerScore + 1;
        return userMessage = "You lose! Rock beats scissors!";
    } else {
        return userMessage = "It's a tie!  We are playing best of 5.  Play again!"
    }
}

btn.addEventListener("click", humanChoice);

// playGame();

// function playGame() {
    // const numberOfGamesToPlay = 5;

    // for (let i = 0; i < numberOfGamesToPlay; i++) { 
        // console.log(`StartingGame ${i + 1}`);
        // let humanSelection = getHumanChoice();
        // let computerSelection = getComputerChoice();
        // playRound(humanSelection, computerSelection);
        // console.log("You chose:", humanChoice);
        // console.log("The computer chose:", computerChoice);
        // console.log(userMessage);
        // console.log("Your score is:", humanScore);
        // console.log("The computer score is:", computerScore);
        // console.log (`Game ${i + 1} is finished.`)
    // }
     
    // scoreMessage = `The score is the computer ${computerScore} vs you: ${humanScore}`;

    // if (i = numberOfGamesToPlay  && computerScore > humanScore) {
    //     scoreMessage = `The winner is the computer!  The computer's final score is: ${computerScore} and your final score is: ${humanScore}`;
    // } else if (i = numberOfGamesToPlay && humanScore > computerScore) {
    //     scoreMessage = `The winner is you! Your final score is: ${humanScore} and the computer's final score is: ${computerScore}`;
    // } else {
    //     scoreMessage = "Score: It's a tie!  Play 5 rounds again!"
    // }
    // console.log(scoreMessage);
// }  
