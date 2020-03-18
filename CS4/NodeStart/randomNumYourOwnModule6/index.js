
const randommine = require('./randomMine');

//Script to pick a random number from 100 to 150
randommine.setRange(100,150);
console.log("min = " + randommine.getMin() + " max = " + randommine.getMax() + " range " + randommine.getRange());
console.log(randommine.getValue());

//Script to pick a random number from 0 to 3
randommine.setRange(0,3);
console.log("min = " + randommine.getMin() + " max = " + randommine.getMax() + " range " + randommine.getRange());
console.log(randommine.getValue());
