let humanScore = 0;
let computerScore = 0;
const messageContainer = document.getElementById('messageContainer');

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

function updateMessage(userMessage) {
    messageContainer.textContent = userMessage;
    console.log("Updating message container with:", userMessage);
}

function getChoices() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const humanChoice = event.target.textContent.toLowerCase();
            const computerChoice = getComputerChoice();
            console.log("Human choice: ", humanChoice);
            console.log("Computer choice: ", computerChoice);
            playRound(humanChoice, computerChoice);
        });
    });
}     

function playRound(humanChoice, computerChoice) {
    let userMessage;
    if (humanChoice === computerChoice) {
        userMessage = "It's a tie!  Winner is the first to have 5 points.  Play again!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper"))
    {
        humanScore++;
        userMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        userMessage = `You lose! ${computerChoice} beats ${humanChoice}!`;
    }
    updateMessage(userMessage);
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
}

updateMessage("Make a choice to start the game!");
getChoices();

//rework this to have humanScore <=5 && computerScore <= 5, playgame....do while?
// function playGame() {
//     const numberOfGamesToPlay = 5;

//     for (let i = 0; i < numberOfGamesToPlay; i++) { 
//         // console.log(`StartingGame ${i + 1}`);
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log("You chose:", humanChoice);
//         console.log("The computer chose:", computerChoice);
//         console.log(userMessage);
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
