function getComputerChoice(){
    const valComputerChoice = Math.floor(Math.random()*100);
    console.log(valComputerChoice);
    if (valComputerChoice <= 33) {
        computerChoice = "rock";
    }
    else if (valComputerChoice > 33 && valComputerChoice <= 66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice; 
}


function playRound(computerChoice, playerChoice) {
    if (computerChoice == playerChoice.toLowerCase()) {
        result = "You Draw! Play again";
    }
    if (computerChoice == "rock") {
        if (playerChoice.toLowerCase() == "scissors") {
            result = "You lose! Rock beats Scissors";
        }
        if (playerChoice.toLowerCase() == "paper") {
            result = "You win! Paper beats Rock";
        }
    }
    if (computerChoice == "paper") {
        if (playerChoice.toLowerCase() == "rock") {
            result = "You lose! Paper beats Rock";
        }
        if (playerChoice.toLowerCase() == "scissors") {
            result = "You win! Scissors beats Paper";
        }
    }
    if (computerChoice == "scissors") {
        if (playerChoice.toLowerCase() == "rock") {
            result = "You win! Rock beats Scissors";
        }
        if (playerChoice.toLowerCase() == "paper") {
            result = "You lose! Scissors beats Paper"
        }
    }
    return result;
}


function game() {
    for (let i = 0; i < 5; i++) {
        var playerScore = 0;
        var computerScore = 0;
        computerSelection = getComputerChoice();
        playerSelection = window.prompt("Enter guess here!") //document.getElementById("inp1");
        console.log(playRound(computerSelection, playerSelection));

        if (result.slice(0,6) == "You win") {
            playerScore++;
        }
        else {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`Player ${playerScore} Computer ${computerScore}, You Win!`);
    }
    else {
        console.log(`Player ${playerScore} Computer ${computerScore}, You Lose!`)
    }
}

game();
//const computerSelection = getComputerChoice();
//const playerSelection = window.prompt("Enter guess here!") //document.getElementById("inp1");

//console.log(playRound(computerSelection, playerSelection));