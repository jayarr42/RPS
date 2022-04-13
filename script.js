// user input
let playerSelection = prompt ("What is your choice?");

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


// trying to create a single round of play
function playRound () {
    if (playerSelection === "rock" & computerPlay() === "Rock") {
    return "It's a tie!";
    } else if (playerSelection === "rock" & computerPlay() === "Paper") {
    return "You lose!";
    } else if (playerSelection === "rock" & computerPlay() === "Scissors") {
    return "You win!";
    }
}
console.log(playRound());
