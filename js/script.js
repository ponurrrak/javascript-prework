let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove;

if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let whoWins = 'Niestety, przegrałeś.';

let playerWins = (playerMove == 'papier' && computerMove == 'kamień');
playerWins = playerWins || (playerMove == 'kamień' && computerMove == 'nożyce');
playerWins = playerWins || (playerMove == 'nożyce' && computerMove == 'papier');

if (playerMove == 'nieznany ruch') {
  whoWins = 'Podałeś wartość inną niż 1, 2 lub 3. Dlatego gra nie może zostać rozstrzygnięta. Spróbuj jeszcze raz.';
} else if (computerMove == playerMove) {
  whoWins = 'Mamy remis.';
} else if (playerWins) {
  whoWins = 'Brawo. Wygrałeś!';
}

printMessage(whoWins);
