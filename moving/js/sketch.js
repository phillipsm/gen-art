var x, y, c1, c2;
var available_colors = ['de3d83', '00b8b8', 'e4bd0b', 'e0e5db', 'dfe0e2', 'a5a6a9', '2f292b', 'f45844'];

function setup() {
    createCanvas(windowWidth, windowHeight);
	frameRate();

	x = 0;
	y = get_random(0, windowHeight);

	get_next_colors();
}

function draw() {
	if (x <= windowWidth) {
	      var inter = map(x, 0, windowWidth, 0, 1);
    	  var c = lerpColor(c1, c2, inter);
      	stroke(c);
      	fill(c);

		ellipse(x, y, 5, 5);
		x += 2;
		y = get_random(y-4, y+4);
	} else {
		x = 0;
		y = get_random(0, windowHeight);
		get_next_colors();
	}
}

get_random = function(min, max) {
	return Math.random() * (max - min) + min;
}

get_random_int  = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

get_next_colors = function() {

	if (!c1) {
		c1 = color('#' + available_colors[get_random_int(0, available_colors.length - 1)]);
	} else {
		c1 = c2;
	}

	c2 = color('#' + available_colors[get_random_int(0, available_colors.length - 1)]);
}