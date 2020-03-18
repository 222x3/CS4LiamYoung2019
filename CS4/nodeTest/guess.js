const randomModule = require('./testing.js')

let winningNumber = 0;

var generateWinningNumber(){
  var randomNumber = new randomModule(100,200)
  winningNumber = randomNumber.getValue()
  console.log(winningNumber)
}
