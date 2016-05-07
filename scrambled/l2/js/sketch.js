var radius = 55;
var x = 0;
var y = 0;
var character_to_draw;

var message = 

function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke('#f64e07');
	strokeWeight(4);
	textSize(800);
	noLoop();
}

function draw() {
	line_it_up();
	window.setInterval(line_it_up, 10);
}

function line_it_up() {
	y=0;
	clear();

	if (character_to_draw) {
		strokeWeight(2);
		text(character_to_draw, windowWidth/2 - textWidth(character_to_draw)/2, windowHeight/2 + 200);
	}

	while (y <= windowHeight) {
		if (floor(random(1, 3)) == 2) {
			strokeWeight(1);
			line(0, y, windowWidth, y + random(.2, 1));
		}
		y+=2;
	}
}


function keyTyped() {
	character_to_draw = key;
}