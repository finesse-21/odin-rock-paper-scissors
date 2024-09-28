function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) { return "rock" };
    if (rand == 1) { return "paper"};
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Choose your weapon!").trim().toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice; 
    }
    return alert("You entered wrong weapon :(");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log(`It is a draw! ${humanChoice} to ${computerChoice}`);
    }
    if (humanChoice === "paper" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "rock"
        || humanChoice === "rock" && computerChoice === "paper"
    ) {
        computerScore += 1;
        return console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
    humanScore += 1;
    return console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);