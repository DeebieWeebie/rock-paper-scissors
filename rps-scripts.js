var str1
let randomNumber=Math.floor(Math.random() * 100) +1;
console.log(randomNumber);
if (randomNumber <= 33) {
    str1 = "rock";
} else if (randomNumber >= 66) {
    str1 = "paper";
} else {
    str1 = "scissors"
}
console.log(str1);