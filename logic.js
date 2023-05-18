const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resultContainer = document.getElementById('resultContainer');
const scoreContainer = document.getElementById('scoreContainer');
const winnerContainer = document.getElementById('winnerContainer');
let playerWins = 0;
let computerWins = 0;

//generating random choice for the current round
function getComputerChoice() {
    let computerChoiceArray = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    let randomNumber = Math.floor(Math.random() * computerChoiceArray.length);
    return computerChoiceArray[randomNumber];
}

//current round's game logic
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    resultContainer.innerHTML = "";
    
    //1 means player, 2 means computer, 0 means draw
    let whoWon;
    if (player == "rock" && computer == "paper") {
        const result = document.createElement("p");
        result.textContent = "✊ vs ✋";
        resultContainer.appendChild(result);
        whoWon = 2;
        return whoWon;
    } else if (player == "rock" && computer == "scissors") {
        const result = document.createElement("p");
        result.textContent = "✊ vs ✌";
        resultContainer.appendChild(result);
        whoWon = 1;
        return whoWon;
    } else if (player == "rock" && computer == "rock") {
        const result = document.createElement("p");
        result.textContent = "✊ vs ✊";
        resultContainer.appendChild(result);
        whoWon = 0;
        return whoWon;
    }

    if (player == "paper" && computer == "paper") {
        const result = document.createElement("p");
        result.textContent = "✋ vs ✋";
        resultContainer.appendChild(result);
        whoWon = 0;
        return whoWon;
    } else if (player == "paper" && computer == "scissors") {
        const result = document.createElement("p");
        result.textContent = "✋ vs ✌";
        resultContainer.appendChild(result);
        whoWon = 2;
        return whoWon;
    } else if (player == "paper" && computer == "rock") {
        const result = document.createElement("p");
        result.textContent = "✋ vs ✊";
        resultContainer.appendChild(result);
        whoWon = 1;
        return whoWon;
    }

    if (player == "scissors" && computer == "paper") {
        const result = document.createElement("p");
        result.textContent = "✌ vs ✋";
        resultContainer.appendChild(result);
        whoWon = 1;
        return whoWon;
    } else if (player == "scissors" && computer == "scissors") {
        const result = document.createElement("p");
        result.textContent = "✌ vs ✊";
        resultContainer.appendChild(result);
        whoWon = 0;
        return whoWon;
    } else if (player == "scissors" && computer == "rock") {
        const result = document.createElement("p");
        result.textContent = "✌ vs ✊";
        resultContainer.appendChild(result);
        whoWon = 2;
        return whoWon;
    }
}

//handling the clicks on the buttons & determines if it's the last round
function handleClick(playerSelection) {
    winnerContainer.innerHTML = "";
    const computerSelection = getComputerChoice();
    let whosPoint = playRound(playerSelection, computerSelection);
    if (whosPoint === 1) {
        playerWins++;
    } else if (whosPoint === 2) {
        computerWins++;
    }
    scoreContainer.textContent = `${playerWins} : ${computerWins}`;

    if(playerWins === 5 || computerWins === 5){
        scoreContainer.innerHTML = "";
        resultContainer.innerHTML = "";
        announceWinner(playerWins, computerWins);
        playerWins = 0;
        computerWins = 0;
    }
}

//announces the winner
function announceWinner(playerWins, computerWins){
    if(playerWins === 5){
    winnerContainer.textContent = `YOU ARE THE WINNER!`;
    }
    else if (computerWins === 5){
    winnerContainer.textContent = `YOU LOST AGAINST AN A.I.`;
    }
}

//event listeners
rockBtn.addEventListener('click', () => handleClick('ROCK'));
paperBtn.addEventListener('click', () => handleClick('PAPER'));
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'));