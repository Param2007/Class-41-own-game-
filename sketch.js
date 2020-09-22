var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var car1Image, car2Image, car3Image, car4Image, groundImage, trackImage, wall, wall2, wall3, wall4, wall5, wall6, wall7;

var wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23;

var point1, point2, point3;

function preload() {

  carRight1 = loadAnimation("player images/blue/right/sprite_0.png", "player images/blue/right/sprite_1.png", "player images/blue/right/sprite_2.png");
  carRight2 = loadAnimation("player images/green/right/sprite_0.png", "player images/green/right/sprite_1.png", "player images/green/right/sprite_2.png");
  carRight3 = loadAnimation("player images/orange/right/sprite_0.png", "player images/orange/right/sprite_1.png", "player images/orange/right/sprite_2.png");
  carRight4 = loadAnimation("player images/yellow/right/sprite_0.png", "player images/yellow/right/sprite_1.png", "player images/yellow/right/sprite_2.png");

  carLeft1 = loadAnimation("player images/blue/left/sprite_0.png", "player images/blue/left/sprite_1.png", "player images/blue/left/sprite_2.png");
  carLeft2 = loadAnimation("player images/green/left/sprite_0.png", "player images/green/left/sprite_1.png", "player images/green/left/sprite_2.png");
  carLeft3 = loadAnimation("player images/orange/left/sprite_0.png", "player images/orange/left/sprite_1.png", "player images/orange/left/sprite_2.png");
  carLeft4 = loadAnimation("player images/yellow/left/sprite_0.png", "player images/yellow/left/sprite_1.png", "player images/yellow/left/sprite_2.png");

  carUp1 = loadAnimation("player images/blue/up/sprite_0.png", "player images/blue/up/sprite_1.png", "player images/blue/up/sprite_2.png");
  carUp2 = loadAnimation("player images/green/up/sprite_0.png", "player images/green/up/sprite_1.png", "player images/green/up/sprite_2.png");
  carUp3 = loadAnimation("player images/orange/up/sprite_0.png", "player images/orange/up/sprite_1.png", "player images/orange/up/sprite_2.png");
  carUp4 = loadAnimation("player images/yellow/up/sprite_0.png", "player images/yellow/up/sprite_1.png", "player images/yellow/up/sprite_2.png");
  
  carDown1 = loadAnimation("player images/blue/down/sprite_0.png", "player images/blue/down/sprite_1.png", "player images/blue/down/sprite_2.png");
  carDown2 = loadAnimation("player images/green/down/sprite_0.png", "player images/green/down/sprite_1.png", "player images/green/down/sprite_2.png");
  carDown3 = loadAnimation("player images/orange/down/sprite_0.png", "player images/orange/down/sprite_1.png", "player images/orange/down/sprite_2.png");
  carDown4 = loadAnimation("player images/yellow/down/sprite_0.png", "player images/yellow/down/sprite_1.png", "player images/yellow/down/sprite_2.png");

  groundImage = loadImage("images/ground.png");

  trackImage = loadImage("images/track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
}