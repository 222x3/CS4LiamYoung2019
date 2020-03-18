$(document).ready(function(){
  $("#submitButton").click(function(){
    var vals = [parseInt($("#firstValue").val()),parseInt($("#secondValue").val()),parseInt($("#thirdValue").val())]
    var applyToVals = []
    var allN = true;
    for(let i of vals)
        allN = !isNaN(i);
    if(allN){
      switch($("#compareBy").val()){
        case "NEG":
          for(let i of vals){
            if(i < 0){
              applyToVals.push(i)
            }
          }
          break;
        case "SMA":
          var s = vals[0];
          for(let i of vals)
            if(i < s)
              s = i;
          applyToVals.push(s)
          break;
        case "LAR":
          var l = vals[0]
          for(let i of vals)
            if(i > l)
              l = i;
          applyToVals.push(l)
          break;
        case "DUP":
          if(vals[0] == vals[1]){
            applyToVals.push(vals[0])
            applyToVals.push(vals[0])
            if(vals[0] == vals[2])
              applyToVals.push(vals[0])
          }
          else if(vals[1] == vals[2]){
            applyToVals.push(vals[1])
            applyToVals.push(vals[1])
          }
          else if(vals[0] == vals[2]){
            applyToVals.push(vals[0])
            applyToVals.push(vals[0])
          }
          break;
        case "AVE":
          applyToVals.push((vals[0] + vals[1] + vals[2])/3)
          break;
      }
      alert(applyToVals)
    }
    else{
      console.log("Not all numbers")
    }
  })
})
