const randomModule = require('./testing.js')
const guessModule = require('./guess.js')
const min = 0
const max = 1
var computerGuess = new randomModule(min,max)
var game = new guessModule(min,max,computerGuess)

console.log("Choose a number between " + computerGuess.getMin() + " to " + computerGuess.getMax())
while(!game.getGuessedNum()){
  game.input(computerGuess.getValue())
}
