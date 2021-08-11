const playGame = (function(){

	const dataForCounter = {
	  rounds: 0,
	  wins: 0,
	  losses: 0,
	  increment: function(whatToIncrement) {
	    this[whatToIncrement]++;
	  }
	};

	const printMessage = function(msg){
		const div = document.createElement('div');
		div.innerHTML = msg;
		const boxForText = document.getElementById('messages-text');
		boxForText.appendChild(div);
		if (msg === 'Niestety, przegrałeś.' || msg === 'Brawo. Wygrałeś!') {
			boxForText.classList.add('text-to-right');
			const boxForIcon = document.getElementById('messages-icon');
			const iForIcon = boxForIcon.querySelector('i');
			if (msg === 'Niestety, przegrałeś.') {
				iForIcon.classList.add('fa-thumbs-down');
				dataForCounter.increment('losses');
			} else {
				iForIcon.classList.add('fa-thumbs-up');
				dataForCounter.increment('wins');
			}
			boxForIcon.classList.remove('hidden');
		}
	};

	const clearMessages = function(){
		const boxForText = document.getElementById('messages-text');
		boxForText.innerHTML = '';
		boxForText.className = '';
		const boxForIcon = document.getElementById('messages-icon');
		boxForIcon.className= 'hidden';
		boxForIcon.querySelector('i').className = 'fas';
	};

	const refreshCounter = function(){
		const counter = document.getElementById('counter');
		counter.querySelector('h2 span').textContent = dataForCounter.rounds;
		const whoWins = counter.querySelector('h3');
		if (dataForCounter.wins > dataForCounter.losses) {
			whoWins.textContent = 'Prowadzisz';
		} else if (dataForCounter.wins === dataForCounter.losses) {
			whoWins.textContent = 'Remisujemy';
		} else {
			whoWins.textContent = 'Przegrywasz';
		}
		counter.querySelector('td:first-of-type').textContent = dataForCounter.wins;
		counter.querySelector('td:last-of-type').textContent = dataForCounter.losses;
	};

	const getMoveName = function(argMoveId){
		const moveNumber = parseInt(argMoveId);
	  if (moveNumber === 1) {
	    return 'papier';
	  } else if (moveNumber === 2) {
	    return 'nożyce';
	  } else {
	    return 'kamień';
	  }
	};

	const displayResult = function(argComputerMove, argPlayerMove){
	  if (argComputerMove === argPlayerMove) {
	    printMessage('Mamy remis.');
	    return;
	  }
	  const playerWins = (argPlayerMove === 'papier' && argComputerMove === 'kamień') || (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'papier');
	  if (playerWins) {
	    printMessage('Brawo. Wygrałeś!');
	  } else {
	    printMessage('Niestety, przegrałeś.');
	  }
	};

	const playGame = function(playerInput, e){
		const currentTarget = e.currentTarget;
		setTimeout(function(){
			currentTarget.blur(); // Pytanie do mentora: bezpośrednie odwołanie do e.currentTarget, tj. e.currentTarget.blur() - zwraca błąd. Dlaczego?
		}, 500);
		dataForCounter.increment('rounds');
	  clearMessages();
	  const playerMove = getMoveName(playerInput);
	  const randomNumber = Math.floor(Math.random() * 3 + 1);
	  const computerMove = getMoveName(randomNumber);
	  printMessage('Twój ruch to: ' + playerMove);
	  printMessage('Mój ruch to: ' + computerMove);
	  displayResult(computerMove, playerMove);
		refreshCounter();
	};
	
	return playGame;
})();
