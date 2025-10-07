let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

const choiceContainer = document.getElementById("choice-container");
const messageContainer = document.getElementById("message-container");
const scoreContainer = document.getElementById("score-container");

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

function updateScoreMessage(scoreMessage) {
    scoreContainer.textContent = scoreMessage;
    console.log("Updating score message with:", scoreMessage);
}

function getChoices() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const humanChoice = event.target.textContent.toLowerCase();
            const computerChoice = getComputerChoice();
            updateChoiceMessage(`You chose ${humanChoice} and the computer chose ${computerChoice}.`);
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
        resultMessage = `You win the round because ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        resultMessage = `You lose the round because ${computerChoice} beats ${humanChoice}!`;
    }
    updateResultMessage(resultMessage);
    getScore();
}

getChoices();

function getScore() {
    if (humanScore === computerScore) {
        scoreMessage = `The human score is: ${humanScore} & the computer score is: ${computerScore}`;
    } else if (humanScore > computerScore && humanScore !== winningScore) {
        scoreMessage = `You are in the lead! The human score is: ${humanScore} and the computer's score is: ${computerScore}`;
    } else if (humanScore < computerScore && computerScore !== winningScore) { 
        scoreMessage = `You are behind! The human score is: ${humanScore} and the computer's score is: ${computerScore}`;
    } else if (humanScore === winningScore) {
        scoreMessage = `The game winner is you! Your final score is: ${humanScore} and the computer's final score is: ${computerScore}`;
    } else if (computerScore === winningScore) {
        scoreMessage = `The game winner is the computer! The computer's final score is: ${computerScore} and your final score is: ${humanScore}`;
    }
    updateScoreMessage(scoreMessage);
    checkGameEnd(humanScore, computerScore);
}

function checkGameEnd() {
    if (humanScore === winningScore || computerScore === winningScore) {
        humanScore = 0;
        computerScore = 0;
        updateChoiceMessage("");
        updateResultMessage("");
        const playAgainMessage = document.createElement("p");
        playAgainMessage.textContent = "If you want to play another game, simply press a choice again.";
        scoreContainer.appendChild(playAgainMessage);

    } else {
        return false;
    }
}
