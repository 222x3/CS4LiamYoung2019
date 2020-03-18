var myRandomNum = function(min,max){
  this.minimum = min;
  this.maximum = max;
}
myRandomNum.prototype.getMax = function(){
  return this.maximum;
}
myRandomNum.prototype.getMin = function(){
  return this.minimum;
}
myRandomNum.prototype.getValue = function(){
  return(Math.floor(Math.random() * this.getRange() + this.minimum))
}
myRandomNum.prototype.getRange = function(){
  return(this.maximum+1-this.minimum)
}
myRandomNum.prototype.setMinMax = function(min,max){
  this.minimum = min
  this.maximum = max
}




module.exports = myRandomNum;
