function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(225, 70, 70);
  } else if (key == 'G') {
    fill(150, 225, 110);
  } else if (key == 'B') {
    fill(50, 200, 215); 
  } else if (key == "Y") {
		fill(255, 211, 0)
	}	else if (key == "P") {
		fill(192, 5, 230)
	} else if (key == "X") {
		fill(random(255), random(255), random(255))
	}
}
