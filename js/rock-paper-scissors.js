/**
 * 0 - rock
 * 1 - paper
 * 2 - scissors
 */
const ID_PLAYER = 0;
const ID_AI = 1;

let score = [0, 0];
let scoreResult = ['win', 'lose'];
let logIndex = 0;
let logData = ['', '', '', '', '', ''];

const scores = document.querySelectorAll('#results h3');
scores.forEach(s => s.textContent = 0);

const logList = document.querySelectorAll('#results-log li');
logList.forEach(l => l.textContent = '');

let idToItem = id => {
    switch (id) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

let computerPlay = () => Math.floor(Math.random() * 3);

let logWrite = str => {
    scores[0].textContent = score[0]
    scores[1].textContent = score[1]
    
    for (let i = logList.length - 1; i > 0; --i)
        logList[i].textContent = logList[i - 1].textContent;
    
    logList[0].textContent = str;
}

let scorePoint = (winner, playerSelection, computerSelection) => {
    let message = 'You ' + scoreResult[winner] + '! ';
    let winnerWeapon = winner == ID_PLAYER ? idToItem(playerSelection) : idToItem(computerSelection);
    let loserWeapon = winner == ID_PLAYER ? idToItem(computerSelection) : idToItem(playerSelection);
    
    ++score[winner];
    
    message += winnerWeapon + ' beats ' + loserWeapon + '.';
    logWrite(message);
}

let draw = (selection) => {
    let weapon = idToItem(selection);
    logWrite('Draw! ' + weapon + ' beats ' + weapon);
}

let playRound = (e) => {
    let playerSelection = +e.target.dataset.selection;
    console.log(playerSelection);
    let computerSelection = computerPlay();
    
    if (playerSelection == computerSelection) draw(playerSelection);
    else if (Math.abs(playerSelection - computerSelection) == 1) {
        if (playerSelection > computerSelection) scorePoint(ID_PLAYER, playerSelection, computerSelection);
        else scorePoint(ID_AI, playerSelection, computerSelection);
    }
    else {
        if (playerSelection < computerSelection) scorePoint(ID_PLAYER, playerSelection, computerSelection);
        else scorePoint(ID_AI, playerSelection, computerSelection);
    }
}




const choices = document.querySelectorAll('button');

choices.forEach(choice => choice.addEventListener('click', playRound));