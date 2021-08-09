let dataForCounter = {
  rounds: 0,
  wins: 0,
  losses: 0,
  increment: function(whatToIncrement) {
    this[whatToIncrement]++;
  }
};

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-stone').addEventListener('click', function(){
  playGame(3);
});
