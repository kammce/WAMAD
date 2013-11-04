$("#ajax_sub").on("click", function() {
	// Take the value from the input field with the only div that has one :P
	// Get the value only from the checked value.
	var value = $("input[name='decision']:checked", "div").val();
	// Format the message to be sent.
	//		Check url for the format for sending http requests
	var message = "ajax=false&decision="+value;
	$("#poll_results").html("<h2>Poll Results from AJAX</h2>Try and do something on this page! I dare you!");
	setTimeout(function() {
		$.ajax({
			//Using post to have the data be hidden
			type: 'POST',
			//Url to the file you want to process your AJAX request
			url: "a_reciever.php",
			//Message to be sent
			data: message,
			//On Success, do this!
			success: function (data) {
				showPolls(data);
			},
			//On error do this!
			error: function(e) {
				alert("There was a problem contacting the SERVER!!!\nThe WORLD IS GOING TO END!!!");
			},
			//What data you want back... other options are JSON and XML
			dataType: "text",
			//Wait until this guy stops before you do anything else.
			async:false
		});
	}, 500);
});
$("#ajax_sub_a").on("click", function() {
	// Take the value from the input field with the only div that has one :P
	// Get the value only from the checked value.
	var value = $("input[name='decision']:checked", "div").val();
	// Format the message to be sent.
	//		Check url for the format for sending http requests
	var message = "ajax=false&decision="+value;
	$("#poll_results").fadeOut(1, function() {
		$("#poll_results").html("<h2>Poll Results from AJAX</h2><img src='ajax-loader.gif'>");
		$("#poll_results").fadeIn(500);
	});
	$.ajax({
		//Using post to have the data be hidden
		type: 'POST',
		//Url to the file you want to process your AJAX request
		url: "a_reciever.php",
		//Message to be sent
		data: message,
		//On Success, do this!
		success: function (data) {
			showPolls(data);
		},
		//On error do this!
		error: function(e) {
			alert("There was a problem contacting the SERVER!!!\nThe WORLD IS GOING TO END!!!");
		},
		//What data you want back... other options are JSON and XML
		dataType: "text",
		//Wait until this guy stops before you do anything else.
		async:true
	});
});
function showPolls(data) {
	var splitter = data.split("::");
	//TODO: Talk about undefined here!
	var html = "";
	var sum = 0;
	for(var i = 0; i < splitter.length-1; i++) {
		sum += parseInt(splitter[i]);
	}
	for(var i = 0; i < splitter.length-1; i++) {
		if(parseInt(splitter[i]) != 0) {
			html += 'Votes for ' + (i+1) + ') ' + (((splitter[i])/sum)*100).toPrecision(3) + "%<br>";
		} else {
			html += "Votes for "+i+") 0%<br>";
		}
	}
	html = "<h2>Poll Results from AJAX</h2>"+html;
	$("#poll_results").fadeOut(1, function() {
		$("#poll_results").html(html);
		$("#poll_results").fadeIn(500);
	});
}