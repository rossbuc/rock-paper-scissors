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
            computerScore ++;
        }
        if (playerChoice.toLowerCase() == "paper") {
            result = "You win! Paper beats Rock";
            playerScore ++;
        }
    }
    if (computerChoice == "paper") {
        if (playerChoice.toLowerCase() == "rock") {
            result = "You lose! Paper beats Rock";
            computerScore ++;
        }
        if (playerChoice.toLowerCase() == "scissors") {
            result = "You win! Scissors beats Paper";
            playerScore ++;
        }
    }
    if (computerChoice == "scissors") {
        if (playerChoice.toLowerCase() == "rock") {
            result = "You win! Rock beats Scissors";
            playerScore ++;
        }
        if (playerChoice.toLowerCase() == "paper") {
            result = "You lose! Scissors beats Paper"
            computerScore ++;
        }
    }
    document.getElementById("rndResult").innerText = result;
    
    if (computerScore >= 5) {
        document.getElementById("score").innerText = `You Lose! Computer ${computerScore} Player ${playerScore}`;
    }
    if (playerScore >= 5) {
        document.getElementById("score").innerText = `You Win! Computer ${computerScore} Player ${playerScore}`;
    }
}

const options = document.querySelectorAll('.rock, .paper, .scissors');
var playerScore = 0;
var computerScore = 0;
options.forEach(option => {
    console.log(option.className);
    option.addEventListener('click',() => playRound(getComputerChoice(), option.className));
})