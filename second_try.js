let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// console.log(secrectNumber);

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);
  if (guessNumber == 0) {
    displayMessage('Hey No number');
  } else if (secretNumber === guessNumber) {
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct number';
    displayMessage('Correct Number');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guessNumber > secretNumber ? 'Too High' : 'Too Low';
      displayMessage(guessNumber > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Lose the Game';
      displayMessage('You Lose the Game');
      document.querySelector('.score').textContent = 0;
    }
    //   } else if (guessNumber > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too High';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You Lose the Game';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //   } else if (guessNumber < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too low';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You Lose the Game';
    //       document.querySelector('.score').textContent = 0;
    //     }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start Guessing....';
  displayMessage('Start Guessing....');
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
