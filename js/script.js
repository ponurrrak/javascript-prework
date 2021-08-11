document.getElementById('play-paper').addEventListener('click', function(e){
  playGame(1, e);
});

document.getElementById('play-scissors').addEventListener('click', function(e){
  playGame(2, e);
});

document.getElementById('play-stone').addEventListener('click', function(e){
  playGame(3, e);
});
