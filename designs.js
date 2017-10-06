var width = 1;
var height = 1;
var colour = '#000';

var table = document.getElementById('pixel_canvas');

$('#input_width').change(getWidth);
$('#input_height').change(getHeight);
$('#submit_button').click(clearGrid);
$('#colorPicker').change(getColour);

function getColour(evt) {
	colour = evt.target.value;
}

function getWidth(evt) {
	width = parseInt(evt.target.value);
}

function getHeight(evt) {
	height = parseInt(evt.target.value);
}

function makeGrid() {

	for(var j = 0; j < height; j++) {
		var tr = document.createElement("tr");

		for (var i = 0; i < width; i++) {
			var td = document.createElement("td");
			td.setAttribute('onclick', 'setColour(this)');

			tr.appendChild(td);
		}

		table.appendChild(tr);
	}
}

function clearGrid(evt) {
	evt.preventDefault();

	$("#pixel_canvas").empty();

	makeGrid();
}

function setColour(evt) {
	evt.style.background = colour;
}
