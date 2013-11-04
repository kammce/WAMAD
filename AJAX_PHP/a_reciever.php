<?php
	// Name of the file to write
	$file = 'poll_data.dat';
	// Get USING POST data sent from webpage and cast it as an integer.
	$decision = (int)$_POST["decision"];
	if(!isset($decision)) { die("What are you doing?"); }
	// Check if the file exists
	if(!is_file($file)) {
		// Create a file with the following template.
		file_put_contents($file, "0::0::0::0::0::");
	}
	// Open the file to get existing content
	$file_data = file_get_contents($file);
	// Explode is like split from almost every other programming language...
	// PHP likes to be different... 
	// This splits up the string by another string.
	$selection_data = explode("::",$file_data);
	// 1) Select the element in the array by the decision made.
	// 2) int_val is another function that returns integers from strings and other things.
	//		Convert $selection_data to an integer to do arithmetic on it
	// 2) Increment the array element by 1
	// 3) Return that number as a string back into the element.
	$selection_data[$decision-1] = (intval($selection_data[$decision-1])+1) . "";
	// create a variable to hold the new data to be written to file.
	$update = "";
	// Normal for loop, but we reduce the loop length by 1 because the last element
	//		is a blank string
	for($i = 0; $i < 5; $i++) {
		$update .= $selection_data[$i] . "::";
	}
	// Write the contents back to the file
	file_put_contents($file, $update);
	sleep(10);
	echo $update;
?>