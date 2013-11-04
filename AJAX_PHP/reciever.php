<?php
	// Helps you debug your php script... 
	// Remove this when production time hits.
	ini_set('display_errors', 'On');
	error_reporting(E_ALL | E_STRICT);
	// Name of the file to write
	$file = 'poll_data.dat';
	// Get data sent from webpage and cast it as an integer.
	$decision = (int)$_GET["decision"];
	if(!isset($decision)) { die("What are you doing?"); }
	// Show your decision
	// There is a difference between "" quotes and '' quotes.
	echo "Your decision is $decision<br>";
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
	// to show how an array in PHP is structured.
	var_dump($selection_data);
	// 1) Select the element in the array by the decision made.
	// 2) int_val is another function that returns integers from strings and other things.
	//		Convert $selection_data to an integer to do arithmetic on it
	// 2) Increment the array element by 1
	// 3) Return that number as a string back into the element.
	$selection_data[$decision-1] = (intval($selection_data[$decision-1])+1) . "";
	// To see the change
	echo "<br>";
	var_dump($selection_data);
	// create a variable to hold the new data to be written to file.
	$update = "";
	// Hold the sum of the selections for averages.
	$sum = 0;
	// Normal for loop, but we reduce the loop length by 1 because the last element
	//		is a blank string
	for($i = 0; $i < sizeof($selection_data)-1; $i++) {
		$update .= $selection_data[$i] . "::";
		$sum += intval($selection_data[$i]);
	}
	// Print out averages.
	echo "<br>";
	for($i = 0; $i < sizeof($selection_data)-1; $i++) {
		if(intval($selection_data[$i]) != 0) {
			echo 'Votes for ' . ($i+1) . ') ' . round((intval($selection_data[$i])/$sum)*100, 2) . "%<br>";
		} else {
			echo "Votes for $i) 0%<br>";
		}
	}
	echo "<br>";
	var_dump($update);
	// Write the contents back to the file
	file_put_contents($file, $update);
	echo "<br><br><a href='index.html'>Go Back</a>";
?>