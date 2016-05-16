var radius = 55;
var x = 0;
var y = 0;

var message_to_draw = 'OPULENCE';
var position_in_message = 0;

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
	window.setInterval(walk_through_message, 1000);
}

function line_it_up() {
	y=0;
	clear();

	while (y <= windowHeight) {
		if (floor(random(1, 3)) == 2) {
			strokeWeight(1);
			line(0, y, windowWidth, y + random(.2, 1));
		}
		y+=2;
	}

	strokeWeight(2);
	text(message_to_draw[position_in_message], windowWidth/2 - textWidth(message_to_draw[position_in_message])/2, windowHeight/2 + 200);
}




function walk_through_message() {
	character_to_draw = message_to_draw[position_in_message];
	position_in_message++;

	if (position_in_message > message_to_draw.length) {
		position_in_message = 0;
	}

}

