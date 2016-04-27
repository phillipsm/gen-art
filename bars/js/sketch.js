var rectangles = [];
var shimmering_rects = [];

var color_a = '#4FB477';
var color_b = '#FFC4EB';
var color_shimmer = '#ffd700';
var color_shimmer_transition = '#ffec88';
//var color_shimmer = '#6890E7';
//var color_shimmer_transition = '#b1c6f3';
var color_background = '#f3f5fb';


function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#f3f5fb');
	draw_grid();
	window.setInterval(function() {
		shimmer(get_rand_int(0, rectangles.length));},
		get_rand_int(2000, 4000)
	);

	window.setInterval(remove_shimmer, get_rand_int(2000, 4000));

	noLoop();
}

function draw() {
}

function shimmer(random_index) {
	// Turn the rectangle to a thrid color, but let it shimmer a little first

	var random_rect = rectangles[random_index];

	if (shimmering_rects.indexOf(random_rect.id) === -1) {

		shimmering_rects.push(random_rect.id);

		// Flicker at least once

		// And flicker up to two more times
		var flicker_times = get_rand_int(0, 3);

		if (flicker_times == 0) {

			set_shimmer_callback(color_shimmer, random_index, 0, 0);

		} else if (flicker_times == 1) {

			set_shimmer_callback(color_shimmer_transition, random_index, 0, 0);
			set_shimmer_callback(color_shimmer, random_index, 30, 70);

		} else if (flicker_times == 2) {
			set_shimmer_callback(color_shimmer_transition, random_index, 0, 0);
			set_shimmer_callback(color_shimmer, random_index, 30, 70);

			set_shimmer_callback(color_shimmer_transition, random_index, 70, 110);
			set_shimmer_callback(color_shimmer, random_index, 110, 140);

		} else if (flicker_times == 3) {

			set_shimmer_callback(color_shimmer_transition, random_index, 0, 0);
			set_shimmer_callback(color_shimmer, random_index, 30, 70);
			set_shimmer_callback(color_shimmer_transition, random_index, 70, 110);
			set_shimmer_callback(color_shimmer, random_index, 110, 140);
			set_shimmer_callback(color_shimmer_transition, random_index, 240, 280);
			set_shimmer_callback(color_shimmer, random_index, 340, 380);
			set_shimmer_callback(color_shimmer_transition, random_index, 380, 420);
			set_shimmer_callback(color_shimmer, random_index, 480, 600);

		}
	}
}

function set_shimmer_callback(fill_color, index, duration_min, duration_max) {
	// A little helper to aid us set the man callbacks we use
	// in the shimmer effect

	window.setTimeout(function() {
			fill(fill_color);
			stroke(fill_color);
			rect(rectangles[index].next_x, rectangles[index].next_y,
				 rectangles[index].w, rectangles[index].h);
		}, get_rand_int(duration_min, duration_max)
	);
}

function remove_shimmer() {
	// Once we get to 8% shimmering, let's remove some

	if (shimmering_rects.length > .01 * rectangles.length) {
		var random_shimmering_rect_index = get_rand_int(0, shimmering_rects.length);

		for (var i=0, len=rectangles.length; i < len; i++) {

			if (rectangles[i].id === shimmering_rects[random_shimmering_rect_index]) {
				fill(rectangles[i].fill_color);
				stroke(rectangles[i].fill_color);

				rect(rectangles[i].next_x, rectangles[i].next_y,
					 rectangles[i].w, rectangles[i].h);
			}

		}
		delete shimmering_rects[random_shimmering_rect_index];
	}
}

function draw_grid() {
	// Draw our sliced bars and calculate the padding on the right and left

	var padding = 30;
	var next_x = padding;
	var next_y = get_rand_int(30, 70);
	var next_height = get_rand_int(30, 70);

	var current_color = color_a;
	
	// Build our list of rectangles and store them
	while (next_x + padding < windowWidth) {
		while (next_y + next_height < windowHeight - get_rand_int(0, 30)) {

			if (current_color === color_a) {
				current_color = color_b;
			} else {
				current_color = color_a;
			}

			rectangles.push({'id': get_rand_int(0, 1000000), 'next_x': next_x,
							 'next_y': next_y, 'w': 20, 'h': next_height,
							 'fill_color': current_color});
			next_y += next_height;
			next_height = get_rand_int(30, 70);
		}

		next_x += padding;
		next_y = get_rand_int(30, 70);
	}


	// Draw all of our rectangles
	for (var i=0, len=rectangles.length; i < len; i++) {
		fill(rectangles[i].fill_color);
		stroke(rectangles[i].fill_color)
		rect(rectangles[i].next_x, rectangles[i].next_y, rectangles[i].w, rectangles[i].h);
	}

}


function get_rand_int(min, max) {
	// A helper function that returns an integer between
	// min and max

	return Math.floor(Math.random() * (max - min) + min);
}