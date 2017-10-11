/*
I was asked for more comments, so here they are xD
I do just want to point out though that in the previous review I was told I cannot use jQuery for core functionality. You
might then want to change the text on the Project Overview as it explicitly states that we are encouraged to use jQuery.

"Although not a requirement, you are encouraged to use jQuery to manipulate the DOM for this project."

If the .empty() function isn't DOM manipulation, then I really don't know what is.
 */

var width = 1; // Default width
var height = 1; // Default height
var colour = '#000'; // Default colour

// Table element to save having to type all that unnecessary gibberish later
var table = document.getElementById('pixel_canvas');

// All the event listeners bound to their specific targets
document.getElementById('input_width').addEventListener('change', setWidth);
document.getElementById('input_height').addEventListener('change', setHeight);
document.getElementById('submit_button').addEventListener('click', clearGrid);
document.getElementById('colorPicker').addEventListener('change', setColour);

// Simple setter colour
function setColour(evt) {
	colour = evt.target.value;
}

// Simple setter for width
function setWidth(evt) {
	width = (parseInt(evt.target.value) > 0) ? parseInt(evt.target.value) : 1; // Yes it is messy but effective /:
}

// Simple setter for height
function setHeight(evt) {
	height = (parseInt(evt.target.value) > 0) ? parseInt(evt.target.value) : 1; // Yes it is messy but effective /:
}

// Making the grid
function makeGrid() {

	// Loop height var
	for(var j = 0; j < height; j++) {

		// Instantiate table row
		var tr = document.createElement("tr");

		// Loop width var
		for (var i = 0; i < width; i++) {

			var td = document.createElement("td"); // Instantiate cell for row
			td.setAttribute('onclick', 'setBlockColour(this)'); // Set onclick
			td.setAttribute('oncontextmenu', 'resetBlockColour(this)'); // Set onclick

			tr.appendChild(td); // Append to row
		}

		table.appendChild(tr); // Append row to table
	}
}

// Clear current grid
function clearGrid(evt) {
	evt.preventDefault(); // Does exactly what it says... Prevents default action of form submission
	table.innerHTML = '';
	makeGrid(); // Make the grid
}

// Set background of selected cell
function setBlockColour(evt) {
	evt.style.background = colour;
}

function resetBlockColour(evt) {
	evt.style.background = null;
}
