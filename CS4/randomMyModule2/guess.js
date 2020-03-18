const randomModule = require('./testing.js')

let winningNumber = 0;
let hasGuessedNum = false;
let numGuesses = 0;
let computer = null
var generateWinningNumber = function(min,max,comp){
  var randomNumber = new randomModule(min,max)
  winningNumber = randomNumber.getValue()
  computer = comp
  console.log("Winning number: " + winningNumber)
}

generateWinningNumber.prototype.input = function(input){
  if(input > winningNumber){
    numGuesses++;
    console.log("------------------------------------------")


    var oldProbability = "" + ((1/(computer.getMax()-computer.getMin()+1 ) * 100));
    oldProbability = oldProbability.slice(0,4)
    console.log("Old range: " + computer.getMin() + "-" + computer.getMax())
    console.log("Old Probability: " + oldProbability + "%")



    console.log(input + " is too high")
    computer.setMinMax(computer.getMin(),input-1)


    var newProbability = "" + (1/(computer.getMax()-computer.getMin()+1)* 100);
    newProbability = newProbability.slice(0,4)
    console.log("New range: " + computer.getMin() + "-" + computer.getMax())
    console.log("New Probability: " + newProbability + "%")
    console.log("------------------------------------------")
  }
  else if(input < winningNumber){
    numGuesses++;
    console.log("------------------------------------------")
    console.log("Old range: " + computer.getMin() + "-" + computer.getMax())
    var oldProbability = "" + ((1/(computer.getMax()-computer.getMin()+1 )* 100));
    oldProbability = oldProbability.slice(0,4)
    console.log("Old Probability: " + oldProbability + "%")
    console.log(input + " is too low")
    computer.setMinMax(input+1,computer.getMax())
    console.log("New range: " + computer.getMin() + "-" + computer.getMax())
    var newProbability = "" + ((1/(computer.getMax()-computer.getMin()+1)* 100));
    newProbability = oldProbability.slice(0,4)
    console.log("New Probability: " + newProbability + "%")
    console.log("------------------------------------------")
  }
  else if(input == winningNumber){
    numGuesses++;
    console.log("------------------------------------------")
    console.log(input + " is correct. You guessed " + numGuesses + " times.")
    console.log("With range of: " + computer.getMin() + "-" + computer.getMax())
    var probability = "" + (1/(computer.getMax()-computer.getMin()+1) * 100);
    probability = probability.slice(0,4)
    if(computer.getMax() - computer.getMin() != 0)
      console.log("Probability: " + probability + "%")
    else {
      console.log("Probability: " + "100" + "%")
    }
    console.log("------------------------------------------")
    hasGuessedNum = true;
  }
}
generateWinningNumber.prototype.getGuessedNum = function(){return hasGuessedNum}




module.exports = generateWinningNumber;
