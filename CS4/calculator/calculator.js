function start(){
  var button = document.getElementById("submitButton")
  button.onclick = handleButtonClick;
}
function handleButtonClick(){
  var firstValueText = document.getElementById("firstValue")
  var secondValueText = document.getElementById("secondValue")
  var selectedOP = document.getElementById("operator")
  var firstValue = parseInt(firstValueText.value)
  var secondValue = parseInt(secondValueText.value)
  var returnString = document.getElementById("returnVal")
  console.log(selectedOP.value)
  if(!isNaN(firstValue) && !isNaN(secondValue)){
    if(selectedOP.value == "ADD"){
      returnString.innerHTML = (firstValue + secondValue)
    }
    else if(selectedOP.value == "SUB"){
      returnString.innerHTML = (firstValue - secondValue)
    }
    else if(selectedOP.value == "MUL"){
      returnString.innerHTML = (firstValue * secondValue)
    }
    else if(selectedOP.value == "DIV"){
      returnString.innerHTML = (firstValue / secondValue)
    }
  }
  else {
    returnString.innerHTML = "Invalid input"
  }
}
window.onload = start;
