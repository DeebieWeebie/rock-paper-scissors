var str1
function getComputerChoice() {
    randomNumber=Math.floor(Math.random() * 100) +1;
    console.log(randomNumber);
    if (randomNumber <= 33) {
        str1 = "rock";
    } else if (randomNumber >= 66) {
        str1 = "paper";
    } else {
        str1 = "scissors"
    }
    return str1;
}
console.log(getComputerChoice());
