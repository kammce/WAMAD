/* A function that the HTML button tag will use to get information from the document */

function toldme() {
	//return the value from an element whose id is 'name' to the variable name
	var name = document.getElementById("name").value;
	//return the value from an element whose id is 'location' to the variable name
	var location = document.getElementById("location").value;
	//return the value from an element whose id is 'time' to the variable name
	var time = document.getElementById("time").value;

	//now set the data within a tag whose id is 'result' to the string below.
	document.getElementById("result").innerHTML = 
	"Oh! I remember you! You are "
	+name+ //insert name
	". I remember meeting you at "
	+location+ //insert location
	" at "
	+time+"."; //insert time
}