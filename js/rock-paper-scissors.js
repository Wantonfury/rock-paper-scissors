/**
 * 0 - rock
 * 1 - paper
 * 2 - scissors
 */
const PLAYER_ID = 0;
const AI_ID = 1;

let score = [0, 0];
let logData = [];

let idToChoice = id => {
    switch (id) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

let computerPlay = () => Math.floor(Math.random() * 3);

let playRound = e => {
    let playerSelection = e.target.dataset.selection === null ? e.target.parentNode.dataset.selection : e.target.dataset.selection;
    let computerSelection = computerPlay();
    
    if (Math.abs(playerSelection - computerSelection) == 1) ;
    else ;
    
    console.log(playerSelection);
}

let init = () => {
    const btn = document.querySelectorAll('#game-buttons button');
    const scores = document.querySelectorAll('#results h3');
    const logList = document.querySelectorAll('#results-log li');
    
    scores.forEach(s => s.textContent = 0);
    logList.forEach(l => l.textContent = '');
    
    btn.forEach(b => {
        b.addEventListener('click', playRound);
        const img = b.querySelector('img');
        img.dataset.selection = b.dataset.selection;
    });
}

init();