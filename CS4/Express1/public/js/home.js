function serverResponse(data){
  alert("Changed to: " + data)
  $("#serverNum").html(data);
}
$("#buttonPress").click(function(){
  $.get("/serverResponse",{num:$("#changeInput").val()},serverResponse)
})
$(document).ready(function(){

})
