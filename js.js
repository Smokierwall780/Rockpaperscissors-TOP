// make a function that generates a random number and then we use the randomly generated number to piuck rps
// make a function that prompts the user to enter in a choice
// create two variables that track both the players score and the computers score 
//

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomNumb = Math.random();
    if (randomNumb < 0.33) {
        return "scissor";
    } else if (randomNumb < 0.66) {
        return "rock";
    } else {
        return "paper";
    }
}

function getHumanChoice()  {
    const humanChoice = prompt("What's Your Choice?");
    return humanChoice;
} 

function playRound(human, computer) {
    human = human.toLowerCase();
    if (human === computer) {
        console.log("You Tied!");
    } else if (
        human == "rock" && computer == "scissor" ||
        human == "scissor" && computer == "paper" ||
        human == "paper" && computer == "rock"
    ) {
        console.log("Human Won!");
    } else {
        console.log("Computer Won!");
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);