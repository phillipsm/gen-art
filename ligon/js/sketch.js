var text_size = 150;
var x = 0;
var y = text_size;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(text_size);
	x = random(60, 90);
	background(22);
	fill(222);
	noLoop();
}

function draw() {
}

function keyTyped() {
	
	
	for (var i = 0; i < y; i+=150) {
		text(key, x + random((-1*y*.02), (y*.02)), y+ random((-1*y*.02), (y*.02)));	
	}

	x += textWidth(key);

	if (x + text_size > windowWidth) {
		y += text_size;
		x = random(60, 90);
	}


}