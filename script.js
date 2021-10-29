'use strict';
/*
console.log(document.querySelector('.label-score').textContent);
//document.querySelector('.label-score').textContent = 'Score Upgrade';
//console.log(document.querySelector('.label-score').textContent);
document.querySelector('.number').textContent = '100';
document.querySelector('.score').textContent = '50';
document.querySelector('.guess').value = '0';
console.log(document.querySelector('.guess').value);
*/

let score = 20;
let highScore = 0;

let randomNumber = Math.round(Math.random() * 20);
// randomNumber = Number(Math.trunc(Math.random() * 20) + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(randomNumber);

  if (!guess) {
    alert('Please! Enter any Input');
  } else {
    if (guess === randomNumber) {
      document.querySelector('.message').textContent = '🎉 Win Hurrah';
      //document.querySelector('.highscore').textContent = highScore;
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = 'Good';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      //Refactoring
    } else if (guess !== randomNumber) {
      if (score >= 1) {
        score--;
        document.querySelector('.message').textContent =
          guess > randomNumber ? '🤷‍♀️ Too High' : '🤷‍♀️ Too Low';
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '🤦‍♀️ You lost the game!';
      }
    }

    /*
    else if (guess > randomNumber) {
      if (score >= 1) {
        score--;
        document.querySelector('.message').textContent = 'Too High';
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
      }
    } else if (guess < randomNumber) {
      if (score >= 1) {
        score--;
        document.querySelector('.message').textContent = 'Too Loo';
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
      }
    }
  }
   */
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.round(Math.random() * 20);
  // randomNumber = Number(Math.trunc(Math.random() * 20) + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  //document.querySelector('.highscore').textContent = '0';
  document.querySelector('.guess').value = '';
});
