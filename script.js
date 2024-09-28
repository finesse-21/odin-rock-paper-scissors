

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) { return "Rock" };
    if (rand == 1) { return "Paper"};
    return "Scissors";
}
console.log(getComputerChoice());