const seedrandom = require('seedrandom')
const myrandom = require('./random.js')

console.log(myrandom.getValue())
myrandom.setRange(0,10000)
console.log(myrandom.getRange())
console.log(myrandom.getValue())
