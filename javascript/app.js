//Declaring all the varibales first
var scores, roundScore, activePlayer, dice;
// Instead of creating 2 varibles for each player you can do the following below. 
scores = [0,0]; 
// one value because we only have one round score at a time
roundScore = 0;
// this variable allows us to see which player's turn it is
activePlayer = 0;
// gives us a random number from 1-6
// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);
//this selects elements from the web page
// document.querySelector('#current-' + activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector(".dice").style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// btn is call back function called by the event listener
document.querySelector('.btn-roll').addEventListener('click', function() {
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
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
  }

})