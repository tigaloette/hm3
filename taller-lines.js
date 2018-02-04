var X = 0
var Y = 5

while (Y <= height){
line (X, 0, X, Y);
  X =  X + (width/2)/30;
  Y = Y + (height-5)/30;
}

while (X <= width) {
line (X, 0, X, height);
  X = X + (width/2)/30; 
}
