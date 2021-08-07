function getMoveName(argMoveId){
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove) {
  if (argPlayerMove == 'nieznany ruch') {
    printMessage('Podałeś wartość inną niż 1, 2 lub 3. Dlatego gra nie może zostać rozstrzygnięta. Spróbuj jeszcze raz.');
    return;
  }
  if (argComputerMove == argPlayerMove) {
    printMessage('Mamy remis.');
    return;
  }
  let playerWins = (argPlayerMove == 'papier' && argComputerMove == 'kamień');
  playerWins = playerWins || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce');
  playerWins = playerWins || (argPlayerMove == 'nożyce' && argComputerMove == 'papier');
  if (playerWins) {
    printMessage('Brawo. Wygrałeś!');
  } else {
    printMessage('Niestety, przegrałeś.');
  }
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

if (playerMove != 'nieznany ruch') {
  printMessage('Twój ruch to: ' + playerMove);
  printMessage('Mój ruch to: ' + computerMove);
}

displayResult(computerMove, playerMove);
