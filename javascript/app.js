//Declaring all the varibales first
var scores, roundScore, activePlayer, gamePlaying, dice;
// Instead of creating 2 varibles for each player you can do the following below.
function initialize() {

  scores = [0,0]; 
  // one value because we only have one round score at a time
  roundScore = 0;
  // this variable allows us to see which player's turn it is
  activePlayer = 0;
  // declaring our state varible
  gamePlaying = true;
  document.querySelector(".dice").style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
} 
initialize();
// gives us a random number from 1-6
// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);
//this selects elements from the web page
// document.querySelector('#current-' + activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// btn is call back function called by the event listener
document.querySelector('.btn-roll').addEventListener('click', function() {
  //
  if(gamePlaying) {

    // 1. You need a random number
    dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display the results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = './images/dice' + dice + '.png';
  
    // 3. Update the round score only if the dice that is rolled is NOT 1.
    if(dice !==1) {
      //add score
      roundScore += dice
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      // same thing as roundScore = roundScore + dice;
    }else{
      //next player
     nextPlayer();
    }
  }

})


// as soon as the user hits the hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying) {

    // add the current score to the global score
    scores[activePlayer] += roundScore;
    // then update the UI. Dynamically going to change.
    document.getElementById("score-" + activePlayer).textContent=scores[activePlayer];
    // check if the player won the game
    if(scores[activePlayer] >= 15) {
      document.getElementById("name-" + activePlayer).textContent = 'Winner'
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    }else{
      // document.getElementById("name-" + activePlayer).textContent = 'loser';
      nextPlayer();
    }
  }


})
// use this function to prevent repetitive code
function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector(".player-0-panel").classList.toggle('active');
  document.querySelector(".player-1-panel").classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', initialize);


