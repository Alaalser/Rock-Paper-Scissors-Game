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

const resetScores = () => {
  computerScore = 0;
  computerScoreSpan.innerHTML = computerScore
  userScore = 0;
  userScoreSpan.innerHTML = userScore;
};

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
    return result = 'You win! 💃', computerChosen = "Rock" , userChosen = "Paper"
  } else if (computerChosen === 'rock' && userChosen === 'scissors') {
    return result = 'You lost 😥', computerChosen = "Rock" , userChosen = "Scissors"
  } else if (computerChosen === 'paper' && userChosen === 'rock') {
    return result = 'You lost 🤦', computerChosen = "Paper" , userChosen = "Rock"
  } else if (computerChosen === 'paper' && userChosen === 'scissors') {
    return result = 'You win! 💃', computerChosen = "Paper" , userChosen = "Scissors"
  } else if (computerChosen === 'scissors' && userChosen === 'rock') {
    return result = 'You win! 😎', computerChosen = "Scissors" , userChosen = "Rock"
  } else if (computerChosen === 'scissors' && userChosen === 'paper') {
    return result = 'You lost 😥', computerChosen = "Scissors" , userChosen = "Paper"
  }
}

function score() {
  if (computerChosen === 'Rock' && userChosen === 'Paper') {
    return  userScore++
  } else if (computerChosen === 'Rock' && userChosen === 'Scissors') {
    return  computerScore++
  } else if (computerChosen === 'Paper' && userChosen === 'Rock') {
    return  computerScore++
  } else if (computerChosen === 'Paper' && userChosen === 'Scissors') {
    return  userScore++
  } else if (computerChosen === 'Scissors' && userChosen === 'Rock') {
    return  userScore++
  } else if (computerChosen === 'Scissors' && userChosen === 'Paper') {
    return  computerScore++
  }
}

