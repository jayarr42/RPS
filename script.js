
function game() {
    for (let i = 0; i < 5; i++) {

    // user input
    let playerSelection = prompt ("What is your choice?").toLowerCase();

    // assign variable to the comp select, used in comp play
    let computerSelection = Math.floor(Math.random()*11);

    console.log (computerSelection);
            
    // computer's options, chosen at random
    function computerPlay() {
        if (computerSelection <= 3) {
            return "Rock"
        } else if (computerSelection <= 6) {
            return "Paper"
        } else {
            return "Scissors"
        }
    }


    // trying to create a single round of play
    function playRound() {
        if (playerSelection === "rock" & computerPlay() === "Rock") {
        return "It's a tie!";
        } else if (playerSelection === "rock" & computerPlay() === "Paper") {
        return "You lose! Paper beats Rock!";
        } else if (playerSelection === "rock" & computerPlay() === "Scissors") {
        return "You win! Rock beats Scissors!";
        } else if (playerSelection === "paper" & computerPlay() === "Paper") {
        return "It's a tie!";
        } else if (playerSelection === "paper" & computerPlay() === "Scissors") {
        return "You lose! Scissors beats Paper!";
        } else if (playerSelection === "paper" & computerPlay() === "Rock") {
        return "You win! Paper beats Rock!";
        } else if (playerSelection === "scissors" & computerPlay() === "Scissors") {
        return "It's a tie!";
        } else if (playerSelection === "scissors" & computerPlay() === "Rock") {
        return "You lose! Rock beats Scissors!";
        } else if (playerSelection === "scissors" & computerPlay() === "Paper") {
        return "You win! Scissors beats Paper!";
        }
    
    }
    console.log(playRound())
    }
}
console.log(game())


/* 
set variables for choices
Enter player choice
Select computer choice randomly
determine which choice is the winner/loser
let the player try 5 times
*/