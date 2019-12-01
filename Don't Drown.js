var playert = 500;
var playerm = 505;
var playerl = 515;
var playerr = 505;
var playera1 = 500;
var playera2 = 525;

let p1 = {
    x: 30,
    y: 440
  },
  p2 = {
    x: 70,
    y: 600
  },
  line1 = {
    x: 0,
    y: 540
  },
  line2 = {
    x: 80,
    y: 540
  };

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(225);

  //stable brick
  rect(150, 200, 100, 20);
  rect(250, 80, 80, 20);

  //moving brick
  rect(100, 500, 100, 20);
  rect(200, 400, 80, 20);
  rect(300, 300, 60, 20);
  rect(350, 140, 50, 20);

  //character
  rect(playert, 540, 30, 20);
  rect(playerm, 560, 20, 20);
  rect(playerl, 580, 10, 30);
  rect(playerr, 580, 10, 30);
  rect(playera1, 560, 5, 20);
  rect(playera2, 560, 5, 20);

  //player move
  //A key or LEFT_ARROW
  if (keyIsDown(65) || keyIsDown(37)) {
    playert -= 10;
    playerm -= 10;
    playerl -= 10;
    playerr -= 10;
    playera1 -= 10;
    playera2 -= 10;
  }

  //D key or RIGHT_ARROW
  if (keyIsDown(68) || keyIsDown(39)) {
    playert += 10;
    playerm += 10;
    playerl += 10;
    playerr += 10;
    playera1 += 10;
    playera2 += 10;
  }
  
  //stay screen
  //left
  if (playert < 0) {
    playert = 0;
    playerm = 5;
    playerl = 5;
    playerr = 15;
    playera1 = 0;
    playera2 = 25;
  }
  //right
  if (playert > 570) {
    playert = 570;
    playerm = 575;
    playerl = 575;
    playerr = 585;
    playera1 = 570;
    playera2 = 595;
  }
  
  //wave
  curve(p1.x, p1.y, line1.x, line1.y, line2.x, line2.y, p2.x, p2.y);
  
  //wave moving
  if (line1.x || line2.x < 600) {
  line1.x += 80;
  line2.x += 80;
  }
  
  if (line1.x || line2.x > 600) {
   line 
  }
  
  
  
  
  
  
  
  
  
}
