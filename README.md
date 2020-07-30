# SLIME

#### For my game project i built a classic style platformer with a fun twist, much like my character there were many obstacles to overcome along the way to success. 


## Using DOM Contend Loaded event listener I assured nothing would start until all required resources were loaded
```
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
/////// MOVEMENT
  moveLeft = document.createElement('img');
  moveLeft.setAttribute('src', "./assets/images/walkLeft.png");

  moveRight = document.createElement('img');
  moveRight.setAttribute('src', "./assets/images/walkRight.png");

  moveUp = document.createElement('img');
  moveUp.setAttribute('src', "./assets/images/groundedFalse.png");

  noMove = document.createElement('img');
  noMove.setAttribute('src', "./assets/images/idle.png");
///////
  rock = document.createElement('img');
  rock.setAttribute('src', "https://i.imgur.com/UrwoLS0.png");

  ledge = document.createElement('img');
  ledge.setAttribute('src', "https://i.imgur.com/6LqdT7Z.png");

  exitCave = document.createElement('img');
  exitCave.setAttribute('src', "https://i.imgur.com/sKb7XhR.png");

  // CANVAS CONFIG
  game.setAttribute('height', 400);
  game.setAttribute('width', 800);
  ctx = game.getContext('2d');
  // CHARACTER REFS
  hero = new Crawler(120, 340, 15, -15);
  // 120, 380 START POINT
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyUp', keyUp);
  restartButton.addEventListener('click', startGame);
  playButton.addEventListener('click', startGame);
  let runGame = clearInterval(gameLoop);
})
```
## Start game
This is the function used to start the game loop function as well as hide all display windows and buttons that appear depending on a win or lose using DOM manipulation.
```
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

  hero = new Crawler(140, 380, 15, -15, 'red');
  
}
```
## Win game
Only shows message for winning and a button pops up which starts the start game function again
```
function win(){
  if (hero.x <= 30 && hero.y <= 80){
    currentStatus.textContent='YOU ESCAPED!'
    xVelocity=0;
    clearInterval(runGame);
    hero.alive=false;

    message.style.display = 'block';
    restartButton.style.display = 'block';
    complete.style.display = 'block';
  }
  
}
```
## Lose game
```
function lose(){
  if (health == 0){
    currentStatus.textContent='YOU DIED!'
    clearInterval(runGame);
    
    message.style.display = 'block';
    restartButton.style.display = 'block';
    fail.style.display = 'block';
  }
}
```

## Gravity
Initial definition
```
let gravity=1.5;
```
Redefining the changes made depending on if character is standing or falling
```
if (grounded) {
      xVelocity *= 1;
      gravity=0;
  } 
  else {
    gravity=.5;
    yVelocity += gravity;
  }
```
## Velocity
Initial definition
```
let yVelocity=0;
let xVelocity=0;
```
Redefining the changes within my game loop depending on if character is standing or falling.
The x velocity being multiplied by 1 allows for a never ending momentum which is a quirk I used to make the game not only unique but significantly more difficult.
```
 if (grounded) {
      xVelocity *= 1;
      gravity=0;
  } 
  else {
    gravity=.5;
    yVelocity += gravity;
  }
```
Switch statement which makes the velocity on both the X and Y axis feel more realistic
```
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
```
## Collision Detection
This is how I defined what would happen if my character collided with a stalagmite.
The player gets tossed up making them temporarily unable to jump as well as Being knocked back by multiplying the X velocity by -1.
```
const detectHit = () => {
   
    for (i=0;i<tite.length;i++){
        if (hero.x + hero.width > tite[i].x && 
        hero.x< tite[i].x + tite[i].width && 
        hero.y + hero.height + 5 > tite[i].y &&
        hero.y - 15< tite[i].y + tite[i].height) {
            health -= 5;
            console.log('collision!')
            yVelocity=-1;
            xVelocity*= -1;
        }
    }
}
```
Here is the code for collision detection of platforms.
In both this and the above mentioned snippet I used a for loop because the platforms and stalagmites were being defined with an array of objects. The loop assures all would have the same rules on collision within every frame.
```
for (i=0;i<plat.length;i++){
    if (hero.x+10 >= plat[i].x && 
      hero.x <= plat[i].x + plat[i].width - 10 &&
      hero.y >= plat[i].y + 2 && 
      hero.y <= plat[i].y + plat[i].height) {
        grounded=true;
        yVelocity=0;
        hero.y = plat[i].y + 2;
        // console.log('landing');   
    } 
  } 
```
## drawImage () Method
### drawImage is how I had realistic images rendered inside the coordinates of all objects in game.
This is code for stalagmites
```
for (var i = 0; i < tite.length; i++) {
      ctx.drawImage(rock, tite[i].x, tite[i].y, tite[i].width, tite[i].height);
    } 
```
This is code for platforms
```
for (var i = 0; i < plat.length; i++) {
      ctx.drawImage(ledge, plat[i].x, plat[i].y, plat[i].width, plat[i].height);
    } 
```
Finally the code for my exit
```
ctx.drawImage(exitCave, 0, 0, 80, 100)
```