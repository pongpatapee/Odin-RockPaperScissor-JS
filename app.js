let choice = ["rock", "paper", "sissor"];
let winning = {"rock": "sissor", "paper":"rock", "sissor":"paper"};
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

function game() {
    let playerSelection = prompt("Input your move: ");
    let computerSelection = computerPlay();
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Score:`);
    console.log(`Player=${score["player"]} Computer=${score["computer"]}`);
}

for(let i = 0; i < 5; i++){
    game();
}

