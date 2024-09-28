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

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice === computerChoice) {
        return console.log(`It is a draw! ${humanChoice} to ${computerChoice}`);
    }
    if (humanChoice === "paper" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "rock"
        || humanChoice === "rock" && computerChoice === "paper"
    ) {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}. Score is ${humanScore} to ${computerScore + 1}`);
        return 0;        
    }
    console.log(`You Win! ${humanChoice} beats ${computerChoice}. Score is ${humanScore + 1} to ${computerScore}`);
    return 1;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        round = playRound(humanSelection, computerSelection, humanScore, computerScore);
        if (round === 0 ) {computerScore += 1;}
        else if (round === 1) {humanScore += 1;}        
    }
    if (humanScore > computerScore) {console.log("You won the game!"); }
    else if (humanScore < computerScore) {console.log("You lose the game!");}
    else {console.log("It's a draw!")}
    return console.log(`Score is ${humanScore} to ${computerScore}`)
}
playGame();