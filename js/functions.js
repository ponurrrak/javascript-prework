function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	let boxForText = document.getElementById('messages-text');
	boxForText.appendChild(div);
	if (msg === 'Niestety, przegrałeś.' || msg === 'Brawo. Wygrałeś!') {
		boxForText.classList.add('text-to-right');
		let boxForIcon = document.getElementById('messages-icon');
		let iForIcon = boxForIcon.querySelector('i');
		if (msg === 'Niestety, przegrałeś.') {
			iForIcon.classList.add('fa-thumbs-down');
			dataForCounter.increment('losses');
		} else {
			iForIcon.classList.add('fa-thumbs-up');
			dataForCounter.increment('wins');
		}
		boxForIcon.classList.remove('hidden');
	}
}

function clearMessages(){
	let boxForText = document.getElementById('messages-text');
	boxForText.innerHTML = '';
	boxForText.className = '';
	let boxForIcon = document.getElementById('messages-icon');
	boxForIcon.className= 'hidden';
	boxForIcon.querySelector('i').className = 'fas';
}

function refreshCounter() {
	let counter = document.getElementById('counter');
	counter.querySelector('h2 span').textContent = dataForCounter.rounds;
	let whoWins = counter.querySelector('h3');
	if (dataForCounter.wins > dataForCounter.losses) {
		whoWins.textContent = 'Prowadzisz';
	} else if (dataForCounter.wins === dataForCounter.losses) {
		whoWins.textContent = 'Remisujemy';
	} else {
		whoWins.textContent = 'Przegrywasz';
	}
	counter.querySelector('td:first-of-type').textContent = dataForCounter.wins;
	counter.querySelector('td:last-of-type').textContent = dataForCounter.losses;
}

function getMoveName(argMoveId){
	let moveNumber = parseInt(argMoveId);
  if (moveNumber === 1) {
    return 'papier';
  } else if (moveNumber === 2) {
    return 'nożyce';
  } else {
    return 'kamień';
  }
}

function displayResult(argComputerMove, argPlayerMove) {
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

function playGame(playerInput) {
	dataForCounter.increment('rounds');
  clearMessages();
  let playerMove = getMoveName(playerInput);
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  printMessage('Twój ruch to: ' + playerMove);
  printMessage('Mój ruch to: ' + computerMove);
  displayResult(computerMove, playerMove);
	refreshCounter();
}
