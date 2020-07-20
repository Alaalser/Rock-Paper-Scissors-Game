let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
let userChosen
let computerChosen
const displayResult = document.getElementById('result')
const userChoice = document.getElementById('user-choice')
var result = results()
const possibleChoices = document.querySelectorAll('.choices')
const computerChoice = document.getElementById('computer-choice')
const resetButton = document.getElementById("reset-button")

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id;
  generatedComputerChoice()
  results()
  score()
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
  userScoreSpan.innerHTML = userScore
  computerScoreSpan.innerHTML= computerScore
}));

const rest = () => {
resetButton.addEventListener('click', () => resetScores());
};
rest();


function generatedComputerChoice() {
  const choicess = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return computerChosen = choicess[randomNumber];
}

function results() {
  if (computerChosen == userChosen) {
    return result = 'It is a tie 🙈 '
  } else if (computerChosen === 'rock' && userChosen === 'paper') {
    return result = 'You win! 💃'
  } else if (computerChosen === 'rock' && userChosen === 'scissors') {
    return result = 'You lost 😥'
  } else if (computerChosen === 'paper' && userChosen === 'rock') {
    return result = 'You lost 🤦'
  } else if (computerChosen === 'paper' && userChosen === 'scissors') {
    return result = 'You win! 💃'
  } else if (computerChosen === 'scissors' && userChosen === 'rock') {
    return result = 'You win! 😎'
  } else if (computerChosen === 'scissors' && userChosen === 'paper') {
    return result = 'You lost 😡'
  }
}

function score() {
  if (computerChosen === 'rock' && userChosen === 'paper') {
    return  userScore++
  } else if (computerChosen === 'rock' && userChosen === 'scissors') {
    return  computerScore++
  } else if (computerChosen === 'paper' && userChosen === 'rock') {
    return  computerScore++
  } else if (computerChosen === 'paper' && userChosen === 'scissors') {
    return  userScore++
  } else if (computerChosen === 'scissors' && userChosen === 'rock') {
    return  userScore++
  } else if (computerChosen === 'scissors' && userChosen === 'paper') {
    return  computerScore++
  }
}

const resetScores = () => {
  computerScore = 0;
  computerScoreSpan.innerHTML = computerScore
  userScore = 0;
  userScoreSpan.innerHTML = userScore;
};