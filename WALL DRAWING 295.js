background(0);

stroke(255); noFill();
ellipse(width/2, height/2, 300, 300);
rect(20, 20, 300, 300);
line(20, height-20, width/2, 20);
line(width-20, height-20, width/2, 20);
line(20+(width/2-20)/2, 20, 20+(width/2-20)/2, height-20);
line(width-20-(width/2-20)/2, 20, width-20-(width/2-20)/2, height-20);
line(20+(width/2-20)/2, 20, 20, height-20);
line(width-20-(width/2-20)/2, 20, width-20, height-20);
