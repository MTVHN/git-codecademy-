//This project tasks to write JavaScript functions that are incorporated into a website (Codecademy provided the necessary HTML/CSS and JS files to make it interactive).
//The goal is to write four functions that would power a small guessing game. 

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9 + 1);

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  //Stores the difference of both computer and human guesses from target guess to determine closes number to target
  const humanDifference = Math.abs(humanGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber);

  //True represents human wins
  if (humanDifference <= computerDifference) {
    return true;
  }
  else {
    return false;
  }
}

//Keeps score 
const updateScore = str => {
  switch (str) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
    default:
      break;
  }
}
//Keeps rounds played
const advanceRound = () => currentRoundNumber += 1;
