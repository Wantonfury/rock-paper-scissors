/**
 * 0 - rock
 * 1 - paper
 * 2 - scissors
 */

let stringToInt = string => {
    switch (string) {
        case 'cancel': return -1;
        case 'rock': return 0;
        case 'paper': return 1;
        case 'scissors': return 2;
        default: return 4;
    }
}

let intToString = int => {
    switch (int) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

let computerPlay = () => Math.floor(Math.random() * 3);

let playerPlay = () => {
    let answer = prompt('Please choose between: rock, paper, scissors. Write or press Cancel to exit.', 'rock');
    if (!answer) answer = 'cancel';
    
    return stringToInt(answer.toLowerCase());
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) return 'Draw! ' + intToString(playerSelection) + ' and ' + intToString(computerSelection) + '.';
    
    let victory = 0;
    
    if (Math.abs(playerSelection - computerSelection) == 1) {
        if (playerSelection > computerSelection) victory = 1;
    }
    else {
        if (playerSelection < computerSelection) victory = 1;
    }
    
    if (victory) return 'You Win! ' + intToString(playerSelection) + ' and ' + intToString(computerSelection) + '.';
    else return 'You Lose! ' + intToString(playerSelection) + ' and ' + intToString(computerSelection) + '.';
}




game();
