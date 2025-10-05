let humanScore = 0;
let computerScore = 0;

const choiceContainer = document.getElementById("choiceContainer");
const messageContainer = document.getElementById("messageContainer");
const scoreContainer = document.getElementById("scoreContainer");

function getComputerChoice() {
    randomNumber=Math.floor(Math.random() * 100) +1;
    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber >= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}  

function updateChoiceMessage(choiceMessage) {
    choiceContainer.textContent = choiceMessage;
    console.log("Updating choice container with:", choiceMessage);
}

function updateResultMessage(resultMessage) {
    messageContainer.textContent = resultMessage;
    console.log("Updating message container with:", resultMessage);
}

function updateScore(scoreMessage) {
    scoreContainer.textContent = scoreMessage;
    console.log("Updating score message with:", scoreMessage);
}

function getChoices() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const humanChoice = event.target.textContent.toLowerCase();
            const computerChoice = getComputerChoice();
            updateChoiceMessage(`You chose ${humanChoice} and the computer chose ${computerChoice}!`);
            playRound(humanChoice, computerChoice);
        });
    });
}    

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
            resultMessage = "It's a tie! Play again!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper"))
    {
        humanScore++;
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}!`;
    }
    updateResultMessage(resultMessage);
    getScore();
}

getChoices();


// This all runs, but now it won't stop Figure out how to get it to do winner/loser
function getScore() {
    if (humanScore === computerScore) {
        scoreMessage = `The score is human score: ${humanScore} & computer score: ${computerScore}`;
    } else if (humanScore > computerScore) {
        scoreMessage = `You are in the lead! The score is: ${humanScore} and the computer's score is: ${computerScore}`;
    } else if (humanScore < computerScore) { 
        scoreMessage = `You are behind! The score is: ${humanScore} and the computer's score is: ${computerScore}`;
    } else if (humanScore === 5 && computerScore < 5) {
        scoreMessage = `The winner is you! Your final score is: ${humanScore} and the computer's final score is: ${computerScore}`;
    } else if (computerScore === 5 && humanScore < 5) {
        scoreMessage = `The winner is the computer!  The computer's final score is: ${computerScore} and your final score is: ${humanScore}`;
    }
    updateScore(scoreMessage);
}
