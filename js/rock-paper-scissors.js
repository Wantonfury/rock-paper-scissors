/**
 * 0 - rock
 * 1 - paper
 * 2 - scissors
 */

const PLAYER_ID = 0;
const PLAYER_VICTORY = 0;

const COMPUTER_ID = 1;
const COMPUTER_VICTORY = 1;

const DRAW = 2;

const btn = document.querySelectorAll('#game-buttons button');
const scores = document.querySelectorAll('#results .results-score');
const logContent = document.querySelector('#results-log h3');
const btnRetry = document.querySelector('#roundEnd-btn');

let selectionToWeapon = id => {
    switch (id) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

let computerPlay = () => Math.floor(Math.random() * 3);

let log = str => {
    logContent.textContent = str;
}

let endRound = result => {
    window.confirm("TEST");
}

let decideRound = (result, winnerWeapon, loserWeapon) => {
    let message = '';
    
    switch (result) {
        // Player wins
        case PLAYER_VICTORY:
            message = "You win!";
            scores[PLAYER_ID].textContent = +scores[PLAYER_ID].textContent + 1;
            break;
        
        // AI wins
        case COMPUTER_VICTORY:
            message = "You lose!";
            scores[COMPUTER_ID].textContent = +scores[COMPUTER_ID].textContent + 1;
            break;
        
        // Draw
        default:
            message = "It's a draw!";
            break;
    }
    
    if (result != DRAW) message += " " + winnerWeapon + ' beats ' + loserWeapon + ".";
    log(message);
    
    if (scores[PLAYER_ID].textContent >= 5) endRound(PLAYER_VICTORY);
    else if (scores[COMPUTER_ID].textContent >= 5) endRound(COMPUTER_VICTORY);
}

let playRound = e => {
    let playerSelection = +e.target.dataset.selection;
    let computerSelection = computerPlay();
    
    if (playerSelection == computerSelection) {
        decideRound(DRAW, selectionToWeapon(playerSelection), selectionToWeapon(computerSelection));
    }
    else if (Math.abs(playerSelection - computerSelection) == 1) {
        if (playerSelection > computerSelection)
            decideRound(PLAYER_VICTORY, selectionToWeapon(playerSelection), selectionToWeapon(computerSelection));
        else decideRound(COMPUTER_VICTORY, selectionToWeapon(computerSelection), selectionToWeapon(playerSelection));
    }
    else {
        if (playerSelection < computerSelection)
            decideRound(PLAYER_VICTORY, selectionToWeapon(playerSelection), selectionToWeapon(computerSelection));
        else decideRound(COMPUTER_VICTORY, selectionToWeapon(computerSelection), selectionToWeapon(playerSelection));
    }
}

let retry = () => {
    window.alert("TEST");
}

let init = () => {
    scores.forEach(s => s.textContent = 0);
    logContent.textContent = '';
    
    btnRetry.addEventListener('click', retry);
    btn.forEach(b => {
        b.addEventListener('click', playRound);
        const img = b.querySelector('img');
        img.dataset.selection = b.dataset.selection;
    });
}

init();