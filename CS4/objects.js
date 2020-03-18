let obj1 = new Object();

obj1.name = "Bruh";
obj1.age = 17;
console.log(obj1);
console.log("======================")
obj1.isMale = true;
obj1.weight = 112;
console.log(obj1);
console.log("======================")
let obj2 = {name:"YoungBruh", lastName:"Minaj", age:17, weight:666, gradeLevel:"Dropout B)"}
console.log(obj2);
/////////////////////////////
console.log("======================")
let obj3 = {
name:"Rover",
address:{Coutry:"USA",State:"CA",City:"Vista"},
age:7
}
console.log(obj3)
console.log(obj3.address.State)
/////////////////////////////////////
console.log("======================")
function Car(make, model, year, sn){
  this.make = make;
  this.model = model;
  this.year = year;
  this.sn = sn;
}
let myCar = new Car("Rolls", "Royce", 3017, 12345678909876556);
console.log(myCar);
console.log(myCar.year);
let ptr = myCar;
console.log(ptr.model);
