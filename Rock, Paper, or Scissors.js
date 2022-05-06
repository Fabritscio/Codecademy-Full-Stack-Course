const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 'scissors' || 'paper') {
    return userInput;
  } else {
    console.log('Error, Incorrect input!');
  }
  }
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()* 3);
  
    if (randomNumber === 0) {
      return 'paper';
    } else if (randomNumber === 1) {
      return 'rock';
    } else if (randomNumber === 2) {
      return 'scissors';
    } else {
      console.log('Invalid input');
    }
  }
  
  console.log(getComputerChoice());
  
  const determineWinner = (userChoice,computerChoice) => {
     if (userChoice === computerChoice) {
       return 'The game was a tie.';
     }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'the computer won!';
    } else {
      return 'the user won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'the computer won!';
    } else {
      return 'the user won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'the computer won!';
    } else {
      return 'the user won!';
    }
  }
  }
  console.log(determineWinner('scissors', 'rock'));