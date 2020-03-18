
function Library(){
    this.books = [];
    //this.index = 0;
    this.addBook = function(book){
    this.books.push(book);
    this.index = this.books.length;
  }
  this.display = function(){
    for(let i of this.books)
    console.log(i)
  }
  this.ratedAbove = function(ratedAbove){
    for(let i of this.books){
      if(i.rating > ratedAbove){
        console.log(i.title + "|" + i.rating);
      }
    }
  }
  this.abovePages = function(pageNumber){
    for(let i of this.books){
      if(i.pages > pageNumber){
        console.log(i.title + " has more than " + pageNumber + " pages with " + i.pages + " pages.");
      }
    }
  }
  this.allCheck = function(){
    for(let i of this.books){
      i.checkedOut==null ? console.log(i.title + " is not checked out") : console.log(i.title + " is checked out to " + i.checkedOut.name)
    }
  }
  this.checkedBooks = function(){
    console.log("-----Checked books-----")
    for(let i of this.books){
      if(i.checkedOut != null)
        console.log(i.title)
    }
    console.log("-------------------------")
  }
  this.uncheckedBooks = function(){
    console.log("-----Unchecked Books-----")
    for(let i of this.books){
      if(i.checkedOut == null){
        console.log(i.title)
      }
    }
    console.log("-------------------------")
  }
  this.ratingAndAge = function(age,rating){
    for(let i of this.books){
      (i.checkedOut!=null && i.checkedOut.age > age && i.rating > rating) ? console.log(i.title) : null
    }
  }
}
///////////////////////////////
let address = {
  number : null,
  street : null,
  city : null,
  getInfo : function(){
    return("Address " + this.number + " " + this.street+ " " + this.city)
  }

}

function Address(streetNum,city,state,zipCode){
  this.streetNum = streetNum;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
}

///////////////////////////////////
function Person(name,age,address){
  this.name = name;
  this.age = age;
  this.address = address;
  this.getInfo = function(){
    return("Person " + this.name + " " + this.age + " " + this.address.number)
  }
}
//////////////////////////////////////
function Book(title,pages,rating,checkedOut = null){
  this.title = title;
  this.pages = pages;
  this.rating = rating;
  this.checkedOut = checkedOut;
  this.getInfo = function(){
    return("Book " + this.title + " " + this.pages + " " + this.rating, + " " + this.checkedOut);
  }
  this.borrow = function(person){
    this.checkedOut = person;
  }
  this.unborrow = function(){
    this.checkedOut = null;
  }
  this.holderAboveAge = function(ageLimit){
    return(this.checkedOut != null && this.checkedOut.age > ageLimit)
  }
}

//let Noah = new Person(Noah,17,new Address(1907,"Fallbrook",CA,92028))
///////////////////////////////////////////////
let annieMayAddress = Object.create(address);
let annieMay = new Person("Annie May",14,annieMayAddress);
annieMayAddress.number = 231;
annieMayAddress.street = "Lake Drive";
annieMayAddress.city = "Oceanside";
console.log(annieMayAddress.getInfo())
let liamYoungAddress = Object.create(address);
liamYoungAddress.number = 922;
liamYoungAddress.street = "Marlin Drive";
liamYoungAddress.city = "Vista"
let liamYoung = new Person("Liam Young",18,liamYoungAddress);
console.log(liamYoung.getInfo());
//////////////////////////////////////////////
let noahAddress = Object.create(address);
let noahSilva = new Person("Noah Silva ",17,noahAddress);
noahAddress.number = 1907;
noahAddress.street = "Green Vista Ln";
noahAddress.city = "Fallbrook";
console.log(noahAddress.getInfo())
/////////////////////////////////////////////

let theLibrary = new Library();

let theHobbit = new Book("The Hobbit",348,9.5);
let endersGame = new Book("Enders Game",278,9.7);
let theBiebs = new Book("Justin Bieber: His world",123,4.3);
let hungerGames = new Book("Hunger Games",456,7.9);
theLibrary.addBook(hungerGames);
theLibrary.addBook(theHobbit);
theLibrary.addBook(endersGame);
theLibrary.addBook(theBiebs);

theHobbit.borrow(liamYoung);

console.log(theHobbit.holderAboveAge(15))
theLibrary.ratedAbove(7);
theLibrary.abovePages(200);
theLibrary.allCheck();
theLibrary.allCheck();
theLibrary.ratingAndAge(17,4)
console.log("There are " + theLibrary.index + " books in total.")

/////////////////////////////////////////////
