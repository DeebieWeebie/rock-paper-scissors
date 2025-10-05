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

function updateScore() {
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
    return updateResultMessage(resultMessage);
    // updateScore();
}

getChoices();


// `Human score: ${humanScore}, Computer score: ${computerScore}`
//rework this to have humanScore <=5 && computerScore <= 5, playgame....do while?
// function keepScore() {
//     if (humanScore <= 5 || computerScore <= 5)
//       
//         console.log("Your score is:", humanScore);
//         console.log("The computer score is:", computerScore);
//         // console.log (`Game ${i + 1} is finished.`)
//     }
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