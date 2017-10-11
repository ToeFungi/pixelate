var width = 1;
var height = 1;
var colour = '#000';
var picking = false;
var table = document.getElementById('pixel_canvas');

document.getElementById('input_width').addEventListener('change', setWidth);
document.getElementById('input_height').addEventListener('change', setHeight);
document.getElementById('submit_button').addEventListener('click', makeGrid);
document.getElementById('colorPicker').addEventListener('change', setColour);
document.getElementById('colorSelector').addEventListener('click', function () {
	picking = true;
	table.style.cursor = 'crosshair';
});

function makeGrid(evt) {
	evt.preventDefault();
	table.innerHTML = '';

	for(var j = 0; j < height; j++) {
		var tr = document.createElement("tr");
		for (var i = 0; i < width; i++) {
			var td = document.createElement("td");
			td.setAttribute('onclick', 'setBlockColour(this)');
			td.setAttribute('oncontextmenu', 'resetBlockColour(this)');
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}

function setBlockColour(evt) {
	if(picking) {
		picking = false;
		colour = evt.style.backgroundColor;
		table.style.cursor = 'default';
		document.getElementById('colorPicker').value = colour;
	}
	else {
		evt.style.backgroundColor = colour;
	}
}

function resetBlockColour(evt) {
	evt.style.backgroundColor = null;
}

function setColour(evt) {
	colour = evt.target.value;
}

function setWidth(evt) {
	width = (parseInt(evt.target.value) > 0) ? parseInt(evt.target.value) : 1;
}

function setHeight(evt) {
	height = (parseInt(evt.target.value) > 0) ? parseInt(evt.target.value) : 1;
}