/**
 * 0 - rock
 * 1 - paper
 * 2 - scissors
 */
const ID_PLAYER = 0;
const ID_AI = 1;

let score = [0, 0];
let scoreResult = ['win', 'lose'];

let computerPlay = () => Math.floor(Math.random() * 3);

let scorePoint = id => {
    ++score[id];
    console.log('You ' + scoreResult[id]);
}

let draw = () => {
    console.log('Draw!');
}

let playRound = (e) => {
    let playerSelection = +e.target.dataset.selection;
    let computerSelection = computerPlay();
    
    if (playerSelection == computerSelection) draw();
    else if (Math.abs(playerSelection - computerSelection) == 1) {
        if (playerSelection > computerSelection) scorePoint(ID_PLAYER);
        else scorePoint(ID_AI);
    }
    else {
        if (playerSelection < computerSelection) scorePoint(ID_PLAYER);
        else scorePoint(ID_AI);
    }
}




const choices = document.querySelectorAll('button');

choices.forEach(choice => choice.addEventListener('click', playRound));