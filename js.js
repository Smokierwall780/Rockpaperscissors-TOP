// make a function that generates a random number and then we use the randomly generated number to piuck rps
// make a function that prompts the user to enter in a choice
// create two variables that track both the players score and the computers score 
//


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

function getHumanChoice() {
    const humanChoice = prompt("What's Your Choice?");
    return humanChoice;
} 

function playGame() {
    // 1. Set up the score trackers
    let humanScore = 0;
    let computerScore = 0;

    // 2. Define playRound inside playGame so it can access the score variables
    function playRound(human, computer) {
        // Handle cases where the user cancels the prompt or leaves it blank
        if (!human) return; 
        
        human = human.toLowerCase();
        
        if (human === computer) {
            console.log(`You tied! You both chose ${human}`);
        } else if (
            (human == "rock" && computer == "scissor") ||
            (human == "scissor" && computer == "paper") ||
            (human == "paper" && computer == "rock")
        ) {
            console.log(`You won! ${human} beats ${computer}`);
            humanScore++;
        } else {
            console.log(`You lose! ${human} loses to ${computer}`);
            computerScore++;
        }
    }

    // 3. Loop 5 times
    for (let i = 0; i < 5; i++) {
        console.log(`--- Round ${i + 1} ---`);
        
        // Get new choices for EVERY round
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        
        // Run the round
        playRound(humanChoice, computerChoice);
    } 
    
    // 4. Log the final score after the loop finishes
    console.log("=== FINAL SCORE ===");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
}

// 5. Actually start the game!
playGame();