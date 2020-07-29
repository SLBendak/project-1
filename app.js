// console.log('hello');
// let movementDisplay;
// let ctx;
// let game;
// let hero;
// let ogre;

// const gameLoop = () => {
//     // clear the canvas
//     ctx.clearRect(0,0, game.width, game.height);
//     // display our x, y coordinates of our hero onto the DOM
//     movementDisplay.textContent = `x:${hero.x}\nY:${hero.y}`;
//     // check if the ogre is alive and
//     if (ogre.alive) {
//         //render the ogre
//         ogre.render();
//         // check for collision
//         // TODO detectHit()
//     }   
//         //render the hero
//         hero.render();
// }

// const movementHandler = e => {
//     console.log(e);
//     // w(87), a(65), s(83), d(68)

//     switch (e.keyCode) {
//         case (87):// w up
//             if (hero.y > 0) hero.y -= 20;
//             break;
//         case (83):// S down
//             if (hero.y + hero.height < game.height) hero.y += 20;
//             break;
//         case (65):// A left
//             if (hero.x > 0) hero.x -= 20;
//             break;
//         case (68):// D right
//             if (hero.x + hero.width < game.width) hero.x += 20;
//             break;
//         default:
//             console.log('no');
        
//     }
// }
    

// document.addEventListener('DOMContentLoaded', () => {
//     //                     DOM REFS
//     // the movement tag
//     let movementDisplay = document.getElementById('movement');
//     // canvas
//     let game = document.getElementById('game');

//     //                  CANVAS CONFIGS
//     // set some canvas configs
//     game.setAttribute('height', 400)
//     game.setAttribute('width', 800)
//     let ctx = game.getContext('2d');
   

//     function Crawler(x, y, width, height, color) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.color = color;
//         this.alive = true
//         this.render = function(){
//             ctx.fillStyle = this.color;
//             ctx.fillRect(this.x, this.y, this.width, this.height);
//         }
//     }

//     //              CHARACTER REFS
//     ogre = new Crawler(300, 100, 80, 120, '#bada55');
//     hero = new Crawler(20, 100, 50, 50, 'orange')

   

    
        
        

    

//     document.addEventListener('keydown', movementHandler);
    
//     game.addEventListener('click', (e) => {
//         // clear the gameboard
//         ctx.clearRect(0, 0, game.width, game.height);
//         // render our hero
//         hero.render();
//         //  move our ogre
//         ogre.x = e.offsetX;
//         ogre.y = e.offsetY;
//         // render ogre
//         ogre.render();
//     })

//     let runGame = setInterval(gameLoop, 60);

    

// });



////////////////////////
console.log("ehllo!")
let movementDisplay;
let ctx;
let game;
let hero;
let enemy;
let edge;
let btm;
let status = 'ESCAPE THE CAVE';
yVelocity=xVelocity=0;
holdLeft=holdRight=false;

gravity=.5;
grounded=true;


let key = 0;
let plat = [];
let tite = [];
let exit;


let health = 100;



plat.push({
    x: 100,
    y: 380,
    width: 120,
    height: 20,
    color: '#1d7a63'
});
plat.push({
    x: 280,
    y: 360,
    width: 80,
    height: 40,
    color: '#1d7a63'
});
plat.push({
  x: 430,
  y: 350,
  width: 60,
  height: 50,
  color: '#1d7a63'
});
plat.push({
  x: 590,
  y: 380,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
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
plat.push({
  x: 640,
  y: 270,
  width: 50,
  height: 20,
  color: '#1d7a63'
});
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
plat.push({
  x: 470,
  y: 250,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
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
plat.push({
  x: 20,
  y: 260,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 0,
  y: 210,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 100,
  y: 170,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 220,
  y: 180,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
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
plat.push({
  x: 580,
  y: 130,
  width: 80,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 720,
  y: 100,
  width: 60,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 640,
  y: 70,
  width: 40,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 550,
  y: 40,
  width: 40,
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
  width: 40,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 200,
  y: 100,
  width: 40,
  height: 20,
  color: '#1d7a63'
});
plat.push({
  x: 100,
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
// plat.push({
//   x: 0,
//   y: 60,
//   width: 60,
//   height: 20,
//   color: '#1d7a63'
// });
// key = 1;
// console.log(key)



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
    if (hero.x + hero.width > enemy.x &&
        hero.x < enemy.x + enemy.width &&
        hero.y + hero.height > enemy.y &&
        hero.y < enemy.y + enemy.height)
    {
        // enemy = false;
        health -= 50;
        hero.y = enemy.y;
        console.log('collision!')
        yVelocity=-2;
    }
    

}

function gameEdge() {
  if (hero.y > game.height+15){
    
    health = 0;
    xVelocity=0;
    yVelocity=0;
    gravity=0;
  }
  
}

function lose(){
  if (health == 0){

    for (var i = 0; i < plat.length; i++) {
      ctx.fillStyle = (plat[i].color);
      ctx.fillRect(plat[i].x, plat[i].y, plat[i].width, plat[i].height);
    } 

    status = 'YOU DIED!';
    clearInterval(runGame);
    xVelocity=0;
    yVelocity=0;
    gravity=0;
    message.style.display = 'block';
    restartButton.style.display = 'block';
    
  }
}
function win(){
  if (hero.x <= 30 && hero.y <= 60){
    status = 'YOU ESCAPED!'
    xVelocity=0;
    clearInterval(runGame);
    // yVelocity=0;
  }
}

function startGame(){
  runGame = setInterval(gameLoop, 60);
}





const gameLoop = () => {
 
  hero.x+=xVelocity;
  hero.y+=yVelocity;

  if (grounded) {
      xVelocity *= 1;
  } else {
      yVelocity += gravity;
     
  }

  grounded=false;
  for (i=0;i<plat.length;i++){
    if (hero.x+10 > plat[i].x && 
        hero.x < plat[i].x + plat[i].width &&
        hero.y > plat[i].y && 
        hero.y < plat[i].y + plat[i].height) {
          hero.y = plat[i].y;
          grounded=true;
          
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


   

    if (enemy.alive) {
  
    enemy.render()
   
    }
  
    hero.render()
    exit.render()
    // plat.render()
    gameEdge();
    detectHit(); 
    lose();
    win();

    // print walls
    for (var i = 0; i < plat.length; i++) {
      ctx.fillStyle = (plat[i].color);
      ctx.fillRect(plat[i].x, plat[i].y, plat[i].width, plat[i].height);
    } 


}

function keyDown(e) {
  switch (e.keyCode) {
      case 37:
          holdLeft=true;
          xVelocity=-5;
          break;
      case 38:
          if (grounded) {
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
  
  // CANVAS CONFIG
  game.setAttribute('height', 400);
  game.setAttribute('width', 800);
  ctx = game.getContext('2d');
  // CHARACTER REFS
  // btm = new Crawler(0, 10, 800, 5, 'black')
  enemy = new Crawler(300, 340, 10, 20+15, 'lightblue');
  hero = new Crawler(120, 40, 15, -15, 'white');
  exit = new Crawler(0, 0, 40, 60, 'orange')
  // 120, 380 START POINT
  // plat = new Platform(plat[i].x, plat[i].y, plat[i].width, plat[i].height, plat[i].color);
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyUp', keyUp)
  restartButton.addEventListener('click', startGame)
  let runGame = setInterval(gameLoop, 60);
})