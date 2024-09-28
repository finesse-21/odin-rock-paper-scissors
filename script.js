

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) { return "rock" };
    if (rand == 1) { return "paper"};
    return "scissors";
}
console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose your weapon!").trim().toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice; 
    }
    return alert("You entered wrong weapon :(");
}
