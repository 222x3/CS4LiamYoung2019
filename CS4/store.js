function Store(){
  this.products = [];
  this.peopleInStore = [];
  this.addProduct = function(product,stock = null){
    this.products.push(product)
    if(stock!=null)
      product.stock = stock
    else
      product.stock = 0
  }
  this.addPerson = function(person){
    this.peopleInStore.push(person)
  }
  this.printAllProductStock = function(){
    for(let i of this.products){
      console.log(i.name + " has " + i.stock + " items left in the store.")
    }
  }
}
let prodTypes = {drink:"drink",meat:"meat",snack:"snack",fruit:"fruit"};
function Product(name,cost,prodType){
  this.name = name;
  this.cost = cost;
  this.prodType = prodTypes.drink;
  this.quantity = 1;
  this.stock = null;
}
function Person(name,age){
  this.name = name
  this.age = age;
  this.productsInCart = [];
  this.addToCart = function(product,quantity = 1){
    if(quantity > 0 && product.stock > 0){
      product.stock -= quantity
      if(!this.isInCart(product)){
        this.productsInCart.push(product)
        this.productsInCart[this.productsInCart.length-1].quantity = quantity
      }
      else
        quantity > 1 ? this.changeQuantity(product,true,quantity):this.changeQuantity(product,true)
    }
  }
  this.removeFromCart = function(rProd){
    var count = 0;
    for(let i of this.productsInCart){
      if(i.cost == rProd.cost && i.name == rProd.name && i.prodType == rProd.prodType){
        this.productsInCart.splice(count,1)
      }
      count++;
    }
  }
  this.isInCart = function(rProd){
    for(let i of this.productsInCart){
      if(i.cost == rProd.cost && i.name == rProd.name && i.prodType == rProd.prodType){
        return true;
      }
    }
    return false;
  }
  this.changeQuantity = function(rProd,add,addBy = null){
    for(let i of this.productsInCart){
      if(i.cost == rProd.cost && i.name == rProd.name && i.prodType == rProd.prodType){
        if(add){
          if(addBy == null){
            i.quantity++
          }
          else if(typeof addBy === typeof 1){
            i.quantity += addBy
          }
        }
        else if(!add && i.quantity > 1){
          if(addBy == null)
            i.quantity--
          addBy > 0 ? i.quantity -= addBy : i.quantity += addBy
        }
        else if(!add && i.quantity === 1){
          this.removeFromCart(rProd)
        }
      }
    }
  }
  this.allItemsInCart =  function(product){
    console.log(this.name + " has the following in his cart:")
    let total = 0;
    for(let i of this.productsInCart){
      console.log(i.quantity + " " + i.name + " -  $" + i.cost + " each -  $" + i.quantity * i.cost + " total")
      total += (i.cost * i.quantity)
    }
    console.log("Total:  $"+total)
  }
}
mainStore = new Store();
Coca_Cola = new Product("Coke",1.50,prodTypes.drink)
mainStore.addProduct(Coca_Cola,1000)
Water = new Product("Water",0.80,prodTypes.drink)
mainStore.addProduct(Water,1000)
Apple = new Product("Apple",0.50,prodTypes.fruit)
mainStore.addProduct(Apple,500)
Banana = new Product("Banana",0.89,prodTypes.fruit)
mainStore.addProduct(Banana,660)
Steak = new Product("Steak",16.70,prodTypes.meat)
mainStore.addProduct(Steak,150)
Ham = new Product("Ham",12.10,prodTypes.meat)
mainStore.addProduct(Ham,125)

liamYoung = new Person("Liam Young",18)
mainStore.addPerson(liamYoung)
mainStore.printAllProductStock()
liamYoung.addToCart(Coca_Cola,4)
liamYoung.addToCart(Apple,1)
liamYoung.addToCart(Apple,2)
liamYoung.addToCart(Steak,2)
liamYoung.allItemsInCart()
mainStore.printAllProductStock()
liamYoung.changeQuantity(Apple,false,2)
liamYoung.allItemsInCart()
liamYoung.changeQuantity(Apple,false)
liamYoung.allItemsInCart()
liamYoung.addToCart(Apple,5)
liamYoung.allItemsInCart()
