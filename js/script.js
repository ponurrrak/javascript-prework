let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

if (playerMove !== 'nieznany ruch') {
  printMessage('Twój ruch to: ' + playerMove);
  printMessage('Mój ruch to: ' + computerMove);
}

displayResult(computerMove, playerMove);
