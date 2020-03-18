function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

$(document).ready(function(){
  $("#submit").click(function(event){
    alert($("#col").val())
    var rgbVal = "R:" + hexToRgb($("#col").val()).r + " G:" + hexToRgb($("#col").val()).g + " B:" + hexToRgb($("#col").val()).b
    alert(rgbVal)
    $("#colorRGB").text(rgbVal)
    $("#colorHex").text($("#col").val())
  })
})
