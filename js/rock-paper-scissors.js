/**
 * 0 - rock
 * 1 - paper
 * 2 - scissors
 */

let stringToInt = string => {
    switch (string) {
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

let playerPlay = () => stringToInt(prompt('Please choose between: rock, paper, scissors.', 'rock').toLowerCase());

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

let game = () => {
    let victories = 0;
    
    for (let i = 0; i < 5;) {
        let playerSelection = playerPlay();
        while (playerSelection == 4) {
            alert("Invalid choice.");
            playerSelection = playerPlay();
        }
        
        let result = playRound(playerSelection, computerPlay());
        
        if (result.search('Win') != -1) {
            ++victories;
            ++i;
        }
        else if (result.search('Lose') != -1) {
            ++i;
        }
        alert(result);
    }
    
    let message;
    if (victories >= 3) message = 'You won the match! ';
    else  message = 'You lost the match! ' ;
    
    message += victories + ' - ' + Math.abs(5 - victories);
    alert(message);
}

game();
