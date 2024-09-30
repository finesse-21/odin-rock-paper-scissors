function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) { return "rock" };
    if (rand == 1) { return "paper"};
    return "scissors";
}
let score = [0, 0] 
function winCheck(score) {
    if (score[0] == 5) {
        alert("You won!");
     }
     if (score[1] == 5) {
        alert("You Lose!");
     }
}
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice(), score);
  });
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice(), score);
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice(), score);
});

const scoreContainer = document.querySelector(".score");
scoreContainer.textContent = `Current score is ${score[0]} to ${score[1]}`
const resultContainer = document.querySelector(".result");
function playRound(humanChoice, computerChoice, score) {
    if (humanChoice === computerChoice) {
        return resultContainer.textContent = `It is a draw! ${score[0]} to ${score[1]}`;
    }
    if (humanChoice === "paper" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "rock"
        || humanChoice === "rock" && computerChoice === "paper"
    ) {
        resultContainer.textContent = `You Lose! ${computerChoice} beats ${humanChoice}. Score is ${score[0]} to ${score[1] + 1}`;
        scoreContainer.textContent = `Current score is ${score[0]} to ${score[1] + 1}`
        winCheck([score[0], score[1] + 1])
        return score[1] += 1;        
    }
    resultContainer.textContent = `You Win! ${humanChoice} beats ${computerChoice}. Score is ${score[0] + 1} to ${score[1]}`;
    scoreContainer.textContent = `Current score is ${score[0] + 1} to ${score[1]}`
    winCheck([score[0] + 1, score[1]])
    return score[0] += 1;
}






// const playBtn = document.querySelector(".play");
// playBtn.addEventListener("click", () => {
//   playRound(getHumanChoice(), getComputerChoice(), 0, 0);
// });

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     let round = 0;
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         round = playRound(humanSelection, computerSelection, humanScore, computerScore);
//         if (round === 0 ) {computerScore += 1;}
//         else if (round === 1) {humanScore += 1;}        
//     }
//     if (humanScore > computerScore) {console.log("You won the game!"); }
//     else if (humanScore < computerScore) {console.log("You lose the game!");}
//     else {console.log("It's a draw!")}
//     return console.log(`Score is ${humanScore} to ${computerScore}`)
// }
// playGame();