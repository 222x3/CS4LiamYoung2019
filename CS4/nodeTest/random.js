let minValue = 10;
let maxValue = 20;

exports.getValue = function(){
  return(Math.floor((Math.random() * (maxValue - minValue))) + minValue)
}

exports.setRange = function(minVal,maxVal){
  minValue = minVal
  maxValue = maxVal
}
exports.getMin = function(){
  return(minValue)
}
exports.getMax = function(){
  return(maxValue)
}
exports.getRange = function(){
  return(maxValue+1-minValue)
}
