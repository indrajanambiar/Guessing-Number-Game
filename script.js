// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of the number of guesses
let numberOfGuesses = 0;

// Get the user's guess and check if it's correct
function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);
  const output = document.getElementById("output");
  
  if (userGuess === randomNumber) {
    output.innerHTML = "Congratulations! You guessed the correct number.";
    numberOfGuesses++;
    document.getElementById("guessButton").disabled = true;
  } else if (userGuess > randomNumber) {
    output.innerHTML = "Too high! Guess again.";
    numberOfGuesses++;
  } else {
    output.innerHTML = "Too low! Guess again.";
    numberOfGuesses++;
  }
  
  // Display the number of guesses
  document.getElementById("guesses").innerHTML = `Number of Guesses: ${numberOfGuesses}`;
}

// Reset the game
function resetGame() {
  location.reload();
}
