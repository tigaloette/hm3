noFill();
n = 0;

while (n<=10){

x = 30+n*60;
y = 30;
w = 5;
h = 5;

while (y >= 15){
  x -= 5;
  y -= 5;
  w += 10;
  h += 10;
 rect(x, y, w, h)
  
  }
  
  n = n+1;

}
