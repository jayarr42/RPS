// user input
//let playerSelection = prompt ("What is your choice?");

// assign variable to the comp select, used in comp play
let computerSelection = Math.floor(Math.random()*11);

console.log (computerSelection);
        
// computer's options, chosen at random
function computerPlay () {
    if (computerSelection <= 3) {
        return "Rock"
    } else if (computerSelection <= 6) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
console.log (computerPlay());

function playRound () {
    if (playerSelection = "rock")
    return computerPlay ();
}