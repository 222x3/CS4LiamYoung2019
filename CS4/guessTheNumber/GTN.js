randomNumber = 0;
function onLoad(){
  var button = document.getElementById('guessButton')
  randomNumber = Math.floor(Math.random() * 100)
  button.onclick = handleButtonClick;
}
function handleButtonClick(){
  var texthandle = document.getElementById("guessNumber")
  var text = texthandle.value
  var value = parseInt(text)
  var list = document.getElementById('response')
  if(!(isNaN(value))){
    if(value > randomNumber){
      var li = document.createElement("li")
      li.innerHTML = "Guess lower!";
      list.appendChild(li);
      texthandle.value = "";
    }
    else if(value < randomNumber){
      var li = document.createElement("li")
      li.innerHTML = "Guess higher!";
      list.appendChild(li);
      texthandle.value = "";
    }
    else if(value == randomNumber){
      var li = document.createElement("li")
      li.innerHTML = "You got it right!";
      list.appendChild(li);
      texthandle.value = "";
    }
  }
  else{
    var li = document.createElement("li")
    li.innerHTML = "Not a valid input";
    list.appendChild(li);
    texthandle.value = "";
  }
}


window.onload = onLoad;
