# Guessing-Number-Game
The guessing  number game is created in javascript. Player have to guess a number between 1 and 100
This code is an implementation of a simple number guessing game in JavaScript.

The game generates a random number between 1 and 100 and asks the user to guess the number. 
The user inputs their guess, and the code checks whether the guess is correct, too high, or too low. 
The code also keeps track of the number of guesses the user has made.

Here's a breakdown of the code:

1] const randomNumber = Math.floor(Math.random() * 100) + 1;: This line generates a random number between 1 and 100 using the Math.random() function, which returns a random number between 0 (inclusive) and 1 (exclusive). The number is then multiplied by 100 to get a number between 0 and 99.99 and then Math.floor() function is used to round the number down to the nearest integer. Finally, 1 is added to the result to get a number between 1 and 100.

2] let numberOfGuesses = 0;: This line initializes a variable to keep track of the number of guesses the user has made. The variable is set to 0 at the beginning of the game.

3] function checkGuess() { ... }: This is the function that checks the user's guess and provides feedback on whether the guess is correct, too high, or too low. It first gets the user's guess from the input field with the ID "guess". Then it checks whether the guess is equal to the random number. If it is, the user is congratulated and the number of guesses is incremented by 1. The "Guess" button is also disabled using document.getElementById("guessButton").disabled = true;. If the guess is too high or too low, the user is given feedback and the number of guesses is incremented. The number of guesses is then displayed using document.getElementById("guesses").innerHTML = ...;.

4]function resetGame() { ... }: This function is called when the user clicks the "Reset" button. It reloads the page using location.reload(), which resets the game to its initial state.
