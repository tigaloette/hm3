//tigerPatch

function TigerPatch (x,y) {
stroke(238);
strokeWeight(1);
rect(x, y, 100, 100)
 
  noStroke(); fill(0); ellipse(x+50, y+50, 80, 80);
  fill(255); ellipse(x+50, y+50, 70, 70);
  stroke(0); strokeWeight(5); line(x+18, y+65, x+82, y+35);
  stroke(0); strokeWeight(5); line(x+35, y+16, x+35, y+82);
  stroke(255); strokeWeight(5); line(x+18-5.5, y+65-3, x+82-5.5, y+35-3);
  stroke(255); strokeWeight(5); line(x+18+5.5, y+65+3, x+82+5.5, y+35+3);
  stroke(255); strokeWeight(5); line(x+50, y+0, x+50, y+30);
  
}

background (255);

TigerPatch(0,0);
TigerPatch(width-100, height-100);
