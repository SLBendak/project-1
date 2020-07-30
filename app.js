
let movementDisplay;
let ctx;
let game;
let hero;
let enemy;
let edge;
let btm;
let status = 'ESCAPE THE CAVE';
let yVelocity=0;
let xVelocity=0;
let holdLeft=holdRight=false;

let gravity=1.5;
let grounded=true;


let key = 0;
let plat = [];
let tite = [];
let exit;


let health = 100;


//plat 1
plat.push({
    x: 100,
    y: 380,
    width: 120,
    height: 20,
    color: '#1d7a63'
});
tite.push({
  x: 110,
  y: 360,
  width: 10,
  height: 20,
  color: 'lightblue'
});
//
//plat 2
plat.push({
    x: 280,
    y: 360,
    width: 80,
    height: 40,
    color: '#1d7a63'
});
tite.push({
  x: 310,
  y: 340,
  width: 10,
  height: 20,
  color: 'lightblue'
});
//
plat.push({
  x: 430,
  y: 350,
  width: 60,
  height: 50,
  color: '#1d7a63'
});
//plat 4
plat.push({
  x: 590,
  y: 380,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
tite.push({
  x: 610,
  y: 360,
  width: 10,
  height: 20,
  color: 'lightblue'
});
//
plat.push({
  x: 700,
  y: 350,
  width: 40,
  height: 50,
  color: '#1d7a63'
});
plat.push({
  x: 730,
  y: 300,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
//play 7
plat.push({
  x: 640,
  y: 270,
  width: 50,
  height: 20,
  color: '#1d7a63'
});
tite.push({
  x: 660,
  y: 250,
  width: 10,
  height: 20,
  color: 'lightblue'
});
//
plat.push({
  x: 740,
  y: 240,
  width: 50,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 630,
  y: 210,
  width: 70,
  height: 20,
  color: '#1d7a63'
});
//plat 10
plat.push({
  x: 470,
  y: 250,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
tite.push({
  x: 480,
  y: 230,
  width: 10,
  height: 20,
  color: 'lightblue'
});
//
plat.push({
  x: 330,
  y: 270,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 220,
  y: 240,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 80,
  y: 300,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
// plat 14
plat.push({
  x: 20,
  y: 260,
  width: 50,
  height: 20,
  color: '#1d7a63'
});
tite.push({
  x: 30,
  y: 240,
  width: 10,
  height: 20,
  color: 'lightblue'
});
//
plat.push({
  x: 0,
  y: 210,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
//plat 16
plat.push({
  x: 100,
  y: 170,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
tite.push({
  x: 120,
  y: 150,
  width: 10,
  height: 20,
  color: 'lightblue'
});
//
//plat 17
plat.push({
  x: 220,
  y: 180,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
tite.push({
  x: 270,
  y: 160,
  width: 10,
  height: 20,
  color: 'lightblue'
});
//
plat.push({
  x: 330,
  y: 160,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 470,
  y: 150,
  width: 50,
  height: 20,
  color: '#1d7a63'
});
//plat 20
plat.push({
  x: 580,
  y: 130,
  width: 80,
  height: 20,
  color: '#1d7a63'
});
tite.push({
  x: 620,
  y: 110,
  width: 10,
  height: 20,
  color: 'lightblue'
});
//
//plat 15
plat.push({
  x: 720,
  y: 100,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
tite.push({
  x: 760,
  y: 80,
  width: 10,
  height: 20,
  color: 'lightblue',
  img: "https://i.imgur.com/UrwoLS0.png",
  
});
//
plat.push({
  x: 640,
  y: 70,
  width: 30,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 550,
  y: 40,
  width: 30,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 400,
  y: 80,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 300,
  y: 60,
  width: 30,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 230,
  y: 100,
  width: 30,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 140,
  y: 60,
  width: 40,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 0,
  y: 60,
  width: 60,
  height: 20,
  color: '#1d7a63'
});

// Crawler Constructor function
function Crawler(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.alive = true;
  this.render = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const detectHit = () => {
    /////////////// ENEMY
    // check for collision on x axis
    // if (hero.x + hero.width > enemy.x &&
    //     hero.x < enemy.x + enemy.width &&
    //     hero.y + hero.height > enemy.y &&
    //     hero.y < enemy.y + enemy.height)
    // {
    //     // enemy = false;
    //     health -= 50;
    //     hero.y = enemy.y;
    //     console.log('collision!')
    //     yVelocity=-2;
    // }
   
    for (i=0;i<tite.length;i++){
      if (hero.x + hero.width > tite[i].x &&
        hero.x + 5 < tite[i].x + tite[i].width &&
        hero.y + hero.height > tite[i].y &&
        hero.y - 1< tite[i].y + tite[i].height)
      {
        health -= 5;
        console.log('collision!')
        yVelocity=-1;
        xVelocity*= -1;
      }
    }
}

function gameEdge() {
  if (hero.y > game.height+15){
    health = 0;
    xVelocity=0;
    yVelocity=0;
  }
  
}

function lose(){
  if (health == 0){
    currentStatus.textContent='YOU DIED!'

    for (var i = 0; i < plat.length; i++) {
      ctx.fillStyle = (plat[i].color);
      ctx.fillRect(plat[i].x, plat[i].y, plat[i].width, plat[i].height);
    } 

    clearInterval(runGame);
    
    message.style.display = 'block';
    restartButton.style.display = 'block';
    fail.style.display = 'block';
  }
}
function win(){

  for (var i = 0; i < plat.length; i++) {
    ctx.fillStyle = (plat[i].color);
    ctx.fillRect(plat[i].x, plat[i].y, plat[i].width, plat[i].height);
  } 

  if (hero.x <= 30 && hero.y <= 60){
    currentStatus.textContent='YOU ESCAPED!'
    xVelocity=0;
    clearInterval(runGame);
    hero.alive=false;

    message.style.display = 'block';
    restartButton.style.display = 'block';
    complete.style.display = 'block';
  }
  
}

function startGame(){
  runGame = setInterval(gameLoop, 60);
  message.style.display = 'none';
  playButton.style.display = 'none';
  restartButton.style.display = 'none';
  instructions.style.display = 'none';
  complete.style.display = 'none';
  fail.style.display = 'none';
  health = 100;
  xVelocity=0;
  currentStatus.textContent='ESCAPE THE CAVE'
  console.log('game started');

  hero = new Crawler(140, 380, 15, -15, 'white');
}





const gameLoop = () => {

  hero.x+=xVelocity;
  hero.y+=yVelocity;

  if (grounded) {
      xVelocity *= 1;
      gravity=0;
  } 
  else {
    gravity=.5;
    yVelocity += gravity;
  }

  grounded=false;
  for (i=0;i<plat.length;i++){
    if (hero.x+10 >= plat[i].x && 
      hero.x <= plat[i].x + plat[i].width &&
      hero.y >= plat[i].y && 
      hero.y <= plat[i].y + plat[i].height) {
        grounded=true;
        yVelocity=0;
        hero.y = plat[i].y;
        console.log('landing');   
    } 
  } 

  // clear the cavas
    ctx.clearRect(0, 0, game.width, game.height);
  // display the x, y coordinates of our hero onto the DOM
    movementDisplay.textContent = `X:${hero.x}\nY:${hero.y}`;
  // display health of hero on DOM
    currentHealth.textContent = `${health}`;
  // display status
    currentStatus.textContent = `${status}`;


    ctx.drawImage(exitCave, 0, 0, 80, 100)

    // print stalagtite
    for (var i = 0; i < tite.length; i++) {
      ctx.drawImage(rock, tite[i].x, tite[i].y, tite[i].width, tite[i].height);
      // ctx.fillStyle = (tite[i].color);
      // ctx.fillRect(tite[i].x, tite[i].y, tite[i].width, tite[i].height);
      
    } 
  
    ///////////////////////////////
    // if (enemy.alive) {
  
    // enemy.render()
   
    // }
    //////////////////////////////
    // exit.render();
    lose();
    win();
   
    gameEdge();
    detectHit(); 
  

    // print walls
    for (var i = 0; i < plat.length; i++) {
      // ctx.fillStyle = (plat[i].color);
      // ctx.fillRect(plat[i].x, plat[i].y, plat[i].width, plat[i].height);
      ctx.drawImage(ledge, plat[i].x, plat[i].y, plat[i].width, plat[i].height);
    } 

    hero.render();
}

function keyDown(e) {
  switch (e.keyCode) {
      case 37:
          holdLeft=true;
          xVelocity=-5;
          break;
      case 38:
        if (grounded == true) {
          yVelocity=-5;
        }
          break;
      case 39:
          holdRight=true;
          xVelocity=5;
          break;
  }
}
function keyUp(e) {
  switch (e.keyCode) {
      case 37:
          holdLeft=false;
          break;
      case 38:
          if (yVelocity<-3) {
              yVelocity-=3;
          }
          break;
      case 39:
          holdRight=false;
          break;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded')
  // DOM REFS
  movementDisplay = document.getElementById('movement');
  game = document.getElementById('game');
  currentHealth = document.getElementById('health');
  currentStatus = document.getElementById('status');
  message = document.getElementById('gameMessage');
  restartButton = document.getElementById('restartBtn');
  playButton = document.getElementById('playBtn');
  messageText = document.getElementById('messageText');
  fail = document.getElementById('deathMessage');
  instructions = document.getElementById('text');
  complete = document.getElementById('winMessage'); 

  rock = document.createElement('img');
  rock.setAttribute('src', "https://i.imgur.com/UrwoLS0.png");

  ledge = document.createElement('img');
  ledge.setAttribute('src', "https://i.imgur.com/qy3bsIJ.png");

  exitCave = document.createElement('img');
  exitCave.setAttribute('src', "https://i.imgur.com/sKb7XhR.png");

  // CANVAS CONFIG
  game.setAttribute('height', 400);
  game.setAttribute('width', 800);
  ctx = game.getContext('2d');
  // CHARACTER REFS
  hero = new Crawler(120, 340, 15, -15, 'white');
  // exit = new Crawler(0, 0, 40, 60, 'orange')
  // 120, 380 START POINT
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyUp', keyUp);
  restartButton.addEventListener('click', startGame);
  playButton.addEventListener('click', startGame);
  let runGame = clearInterval(gameLoop);
})