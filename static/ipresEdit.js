    $(document).ready(function(){
	    var counter = 1;
		
	    $("#addButton").click(function () {
		var newTextBoxDiv = $(document.createElement('div')).attr("id", 'Slide' + counter);
                newTextBoxDiv.after().html('<label>Slide #'+ counter + ': </label>' + '<br>'+
			'<textarea rows="6" style="background-color: #f3f3f3; resize: none; width: 95%;" name="textbox' + counter + 
			'" id="textbox' + counter + '" value="" >'+ "\n"+ '<section class="mySlide">' + "\n\n" + '</section>' + '\n'+ '</textarea>');
		newTextBoxDiv.appendTo("#TextBoxesGroup");
		counter++;
	    });

	    $("#removeButton").click(function () {
		if(counter==1){
		        alert("No slide to remove");
		        return false;
		}   
	        counter--;
	        $("#Slide" + counter).remove();
	    });

	    $("#getCode").click(function () {
		var msg = $("#boxHead").val();
		for(i=1; i<counter; i++){
			msg += "\n" + $('#textbox' + i).val();
		}
			msg += "\n" + $("#boxFoot").val();
		alert(msg);
	    });

	    $("#previewButton").click(function () {
		var msg = $("#boxHead").val();
		for(i=1; i<counter; i++){
			msg += "\n" + $('#textbox' + i).val();
		}
			msg += "\n" + $("#boxFoot").val();
		$('#preview').html(msg);
	    });
  });
