var num_lines = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(100);
	frameRate(30);
}

function draw() {

	var x, y, x2, y2;

	
	x = getRandomArbitrary(-30, windowWidth);
	y = getRandomArbitrary(-30, windowHeight);

	x2 = getRandomArbitrary(x-25, x+25);
	y2 = getRandomArbitrary(y-25, y+25);

	line(x, y, x2, y2);

	num_lines++;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}