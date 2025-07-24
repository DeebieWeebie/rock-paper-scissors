let computerChoice;
let humanChoice;
let input;
let userMessage;
let scoreMessage;
let i;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
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
    humanChoice = input.toLowerCase();
    return humanChoice;
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playGame() {
    let humanScore;
    let computerScore;
    console.log(computerChoice);
    console.log(humanChoice);

    for (let i = 0; i < 5; i++) {   
        
        function playRound(humanChoice, computerChoice) {  
            if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore = humanScore + 1;
                return userMessage = "You win! Rock beats scissors!";
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore++;
                return userMessage = "You win! Paper beats rock!";
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                return userMessage = "You win! Scissors beats paper!";
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore++;
                return userMessage = "You lose! Paper beats rock!";
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore++;
                return userMessage = "You lose! Scissors beats paper!";
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore++;
                return userMessage = "You lose! Rock beats scissors!";
            } else if (humanChoice === computerChoice) {
                return userMessage = "It's a tie!  We are playing best of 5.  Play again!"
            }
        }
//work on everything below this and figure out the message stuff again//       
    playRound (i);
    console.log(userMessage);
    console.log(scoreMessage);
        return scoreMessage = `The score is the computer ${computerScore} vs you: ${humanScore}`;
    }

    if (i === 5 && computerScore > humanScore) {
        scoreMessage = `The winner is the computer!  The computer's final score is: ${computerScore} and your final score is: ${humanScore}`;
    } else if (i === 5 && humanScore > computerScore) {
        scoreMessage = `The winner is you! Your final score is: ${humanScore} and the computer's final score is: ${computerScore}`;
    } else {
        scoreMessage = "It's a tie!  Play 5 rounds again!"
    }
    console.log(scoreMessage);
}

playGame(i);