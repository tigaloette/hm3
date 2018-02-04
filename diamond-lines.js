var x1 = width/2
var y1 = 0
var x2 = width/2
var y2 = 0

line (x1, y1, x2, y2)

while (y2 <= width/2){
line (x1, y1, x2, y2); 
  x1 = x1 - width/40;
  y1 = y1 + height/40;
  x2 = x2 + width/40;
  y2= y2 + width/40;
}

while (y2 <= width){
line (x1, y1, x2, y2); 
  x1 = x1 + width/40;
  y1 = y1 + height/40;
  x2 = x2 - width/40;
  y2= y2 + width/40;
}
