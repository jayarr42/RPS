// user input
let playerSelection = prompt ("What is your choice?");

let computerSelection = Math.random();


        
// computer's options, chosen at random
function computerPlay () {
    if (computerSelection <= .33) {
        return "Rock"
    } else if (computerSelection <= .67) {
        return "Paper"
    } else {
        return "Scissors"
    }
}


function playRound () {
    if (playerSelection = "rock")
    return computerPlay ();
}