var switches = [];
$(function(){
  console.log("Document loaded")
  $("#defaultAdd").prop("checked",true)
  $("#defaultRemove").prop("checked",true)
  $("#addButton").click(function(){
    if($("input[name='type']:checked").val() && $("#addText").val() != ""){
      $button = $('<input type="button" value="Change" id="changebut">', {buttonFor: $("#addText").val(), id: 'changeButton'});
      $($button).click(function() {
        $thisButton = $(this)
        $buttonTr = $(this).parent().parent()
        $nameTD = $buttonTr.find("td").eq(0)
        $typeTD = $buttonTr.find("td").eq(1)

        if($thisButton.val() == "Change"){ //When you click change
          var editName = $nameTD.html()
          var editType = $typeTD.html()
          $nameTD.html("")
          $typeTD.html(editType + " -> ")
          $thisButton.val("Confirm")
          $thisButton.attr('id',"confirmbut")
          $nameTD.append('<input type="text" value="' + editName + '">')
          if($typeTD.html().includes("Animal"))
            $typeTD.append('<select> <option value="Animal" selected="selected">Animal</option> <option value="Plant">Plant</option> <option value="Mineral">Mineral</option> <option value="Man Made">Man Made</option></select>')
          else if($typeTD.html().includes("Plant"))
            $typeTD.append('<select> <option value="Animal">Animal</option> <option value="Plant" selected="selected">Plant</option> <option value="Mineral">Mineral</option> <option value="Man Made">Man Made</option></select>')
          else if($typeTD.html().includes("Mineral"))
            $typeTD.append('<select> <option value="Animal">Animal</option> <option value="Plant">Plant</option> <option value="Mineral" selected="selected">Mineral</option> <option value="Man Made">Man Made</option></select>')
          else if($typeTD.html().includes("Man Made"))
            $typeTD.append('<select> <option value="Animal">Animal</option> <option value="Plant">Plant</option> <option value="Mineral">Mineral</option> <option value="Man Made" selected="selected">Man Made</option></select>')





          for(let i=0;i<$('#table tr').length;i++){
            $rowpointer = $('#table').find('tr').eq(i)
            for(let c=0;c<$('tr td').length;c++){
              $tdpointer = $rowpointer.find('td').eq(c)
              if($tdpointer.children('input').length > 0 && $tdpointer.children('input').attr('id') == "changebut")
                $tdpointer.children('input').toggle()
            }
          }
        }
        else{ //When you click confirm
          $row = $(this).parent().parent()
          $nameTD.html($nameTD.find("input").eq(0).val())
          $typeTD.html($typeTD.find("select").eq(0).val())
          $row.attr('objectName',$nameTD.html())
          $row.attr('objectType',$typeTD.html())

          for(let i=0;i<$('#table tr').length;i++){
            $rowpointer = $('#table').find('tr').eq(i)
            for(let c=0;c<$('tr td').length;c++){
              $tdpointer = $rowpointer.find('td').eq(c)
              if($tdpointer.children('input').length > 0 && $tdpointer.children('input').attr('id') == "changebut")
                $tdpointer.children('input').toggle()
            }
          }

          $thisButton.val("Change")
          $thisButton.attr('id',"changebut")
        }

      });
      var thisObjectName = $("#addText").val();
      var thisObjectType = $("input[name='type']:checked").val();
      $('#table').append('<tr objectName="' + thisObjectName + '" objectType="' + thisObjectType +'"><td>' + thisObjectName + '</td><td>' + thisObjectType + '</td><td></td></tr>')

      $row = null; //= $("#table > ")
      $("#table tr").each(function(){
          if($(this).attr('objectName') == thisObjectName){
            $thirdTD = $(this).find("td").eq(2)
            $thirdTD.append($button)
          }
      })
    }
    else
      console.log("No radio/textbox data")

    $('#addText').val("")
  })




  $("#removeObjectByNameButton").click(function(){
    if($("#removeObjectName").val() != "")
      $("#table tr").each(function(){
          if($(this).attr('objectName') != null){
            console.log("Name: " + $(this).attr('objectName') + " Type: " + $(this).attr('objectType'))
            if($(this).attr('objectName') == $("#removeObjectName").val()){
              console.log("Removed item with name: " + $(this).attr('objectName'))
              $(this).remove()
            }
          }
      })
      $('#removeObjectName').val("")
  })






  $("#removeObjectByTypeButton").click(function(){
    if($("input[name='rType']:checked").val())
      $("#table tr").each(
        function(){
          if($(this).attr('objectType') != null){
            console.log("Name: " + $(this).attr('objectName') + " Type: " + $(this).attr('objectType'))
            if($(this).attr('objectType') == $("input[name='rType']:checked").val()){
              console.log("Removed item(s) with type: " + $(this).attr('objectType'))
              $(this).remove()
            }
          }
        }
      )
  })





})
