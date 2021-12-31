let choice = ["rock", "paper", "scissor"];
let winning = {"rock": "scissor", "paper":"rock", "scissor":"paper"};
let score = {"player": 0, "computer": 0};

function computerPlay() {
    let rand_ind = Math.floor(Math.random() * choice.length);
    return choice[rand_ind];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (computerSelection == winning[playerSelection]) {
        score["player"]++;
        return `Congrats, you won! ${playerSelection} beats ${computerSelection}`
    }
    else if (computerSelection == playerSelection) {
        return `It was a Tie!`
    }     
    else {
        score["computer"]++;
        return `Sorry, you lost! ${computerSelection} beats ${playerSelection}`
    }
}

function capitalize(str){
    let firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1);
}

function game() {
    // let playerSelection = prompt("Input your move: ");

    const playerChoiceDisplay = document.querySelector('.player-choice');
    const computerChoiceDisplay = document.querySelector('.computer-choice');
    const playerScoreDisplay = document.querySelector('.player-score');
    const computerScoreDisplay = document.querySelector('.computer-score');
    const displayMessage = document.querySelector('.message');

    const playerBtns = document.querySelectorAll('.player-btn');
    playerBtns.forEach(btn => btn.addEventListener('click', (e)=>{
        let playerSelection = btn.id;
        let computerSelection = computerPlay();

        playerChoiceDisplay.innerText = capitalize(playerSelection);
        computerChoiceDisplay.innerText = capitalize(computerSelection);

        let message = playRound(playerSelection, computerSelection);

        displayMessage.innerText = message;
        playerScoreDisplay.innerText = `Player: ${score["player"]}`
        computerScoreDisplay.innerText = `Computer: ${score["computer"]}`

        console.log(`Player: ${playerSelection} Computer: ${computerSelection}`)
        console.log(message);
        console.log(`Player=${score["player"]} Computer=${score["computer"]}`);
    }));

}

// window.addEventListener('click', game);

const playerBtns = document.querySelectorAll('.player-btn');
playerBtns.forEach(btn => btn.addEventListener('click', (e)=>{
    const playerChoiceDisplay = document.querySelector('.player-choice');
    const computerChoiceDisplay = document.querySelector('.computer-choice');
    const playerScoreDisplay = document.querySelector('.player-score');
    const computerScoreDisplay = document.querySelector('.computer-score');
    const displayMessage = document.querySelector('.message');
    let playerSelection = btn.id;
    let computerSelection = computerPlay();

    playerChoiceDisplay.innerText = capitalize(playerSelection);
    computerChoiceDisplay.innerText = capitalize(computerSelection);

    let message = playRound(playerSelection, computerSelection);

    displayMessage.innerText = message;
    playerScoreDisplay.innerText = `Player: ${score["player"]}`
    computerScoreDisplay.innerText = `Computer: ${score["computer"]}`

    console.log(`Player: ${playerSelection} Computer: ${computerSelection}`)
    console.log(message);
    console.log(`Player=${score["player"]} Computer=${score["computer"]}`);
}));