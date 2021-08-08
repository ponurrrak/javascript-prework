function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	let moveNumber = parseInt(argMoveId);
  if (moveNumber === 1) {
    return 'kamień';
  } else if (moveNumber === 2) {
    return 'papier';
  } else if (moveNumber === 3) {
    return 'nożyce';
  } else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove) {
  if (argPlayerMove === 'nieznany ruch') {
    printMessage('Podałeś wartość inną niż 1, 2 lub 3. Dlatego gra nie może zostać rozstrzygnięta. Spróbuj jeszcze raz.');
    return;
  }
  if (argComputerMove === argPlayerMove) {
    printMessage('Mamy remis.');
    return;
  }
  let playerWins = (argPlayerMove === 'papier' && argComputerMove === 'kamień') || (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'papier');
  if (playerWins) {
    printMessage('Brawo. Wygrałeś!');
  } else {
    printMessage('Niestety, przegrałeś.');
  }
}
