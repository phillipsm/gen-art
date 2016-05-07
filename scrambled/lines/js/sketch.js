var radius = 55;
var x = 0;
var y = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke('#f64e07');
	noLoop();
}

function draw() {
	while (true) {
		if (x>windowWidth+radius) {
			x = 0;
			y+=radius+10;
		}

		if (y>windowWidth+height) {
			break;
		}

		for (var i =0; i<20; i++){
			ellipse(x+random(5,radius), y+random(5,radius), random(radius-60,radius+60), random(radius-60,radius+60));
		}
				
		x+=radius+10;
	}
}