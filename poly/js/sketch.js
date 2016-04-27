var cx, cy, radius;
var x,y, a, offset;


function setup() {
	createCanvas(windowWidth, windowHeight);

	// center
	//point(cx, cy);

	stroke('#FF6C5D');
	strokeWeight(1);
	noLoop();
}

function draw() {
	for (var i = 0; i<70; i++) {
		draw_polygon();
	}
}

function draw_polygon() {

	cx = random(0, windowWidth);
	cy = random(0, windowHeight);
	radius = random(50, 200);

	var random_radians = [];

	for (var i = 0; i< 6; i++) {
		random_radians.push(random(0, 2) * PI);
	}
	random_radians.sort()

	beginShape();

	for (var i = 0; i< random_radians.length; i++){
		x = cx + radius  * cos(random_radians[i]);
		y = cy + radius * sin(random_radians[i]);
		vertex(x, y);
	}
	endShape(CLOSE);


}