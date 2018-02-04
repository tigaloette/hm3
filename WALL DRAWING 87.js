background (233,233,233);

var x = 0;
var y = 0;

while (x <= width) {
line(x, 0, x, height)
  x = x + 5;
}


while (y <= height/2) {
line (width/2, y, width, y)  
  y = y + 5;
}


while (x-width <= 1.5*width){
  
  line (x-width, height/2, 0, y);
    x = x + 5;
    y = y + 5;
  }
var x2 = width/2;
var y2 = height;

while (x2 < width)
  line (x2, height, width/2, y2)
    x2 = x2 + 5;
    y2 = y2 - 5;
}


var x2 = width/2;
var y2 = height/2; 

while (x2 < width)
  line (x2, height, width, y2)
    x2 = x2 + 5;
    y2 = y2 + 5;
}
