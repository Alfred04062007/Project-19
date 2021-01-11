var ball,img,paddle;
var ball1,img,paddle1;

function preload() {
  /* preload your images here of the ball and the paddle */
  ball = loadImage  ("ball.png");
  paddle = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  /* create the Ball Sprite and the Paddle Sprite */
  ball1 = createSprite(100, 100, 10, 10);
  ball1.addImage(ball,"ball");
  
  paddle1 = createSprite(200, 100, 10, 10);
  paddle1.addImage(paddle,"paddle");
  /* assign the images to the sprites */
  
 
  
  /* give the ball an initial velocity of 9 in the X direction */
ball1.velocityX = 9 ;

}

function draw() {
  background(205, 153, 0);
  /* create Edge Sprites here */
 edges = createEdgeSprites();
 
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
 ball1.bounceOff(edges[0]);
  
  ball1.bounceOff(edges[2]);
  ball1.bounceOff(edges[3]);

  /* Allow the ball to bounceoff from the paddle */
  ball1.bounceOff(paddle1);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

if (ball1.bounceOff(edges[0])){
  ball1.velocityY = randomVelocity() ; 
    }
  if (keyDown(UP_ARROW)) {
    /* what should happen when you press the UP Arrow Key */
    paddle1.velocityY = -2;
  }
 if (keyWentUp(UP_ARROW))
 {
   paddle1.velocityY = 0 ;        
}

  if (keyDown(DOWN_ARROW)) {
    /* what should happen when you press the UP Arrow Key */
  paddle1.velocityY = 2;
  }
  if (keyWentUp(DOWN_ARROW)) 
 {
   paddle1.velocityY = 0 ;        
}
  drawSprites();

}

function randomVelocity() {
  /* this function gets called when the ball bounces off the paddle */
  var rand = Math.round(random(6,12));
  switch(rand )
  {
    case 6 : ball1.velocityY = 6 ;   
     break ;
     
     case 7: ball1.velocityY = 7 ;   
     break 
     case 8 : ball1.velocityY = 8 ;   
     break ;
     case 9 : ball1.velocityY = 9 ;   
     break ;
     case 10 : ball1.velocityY = 10 ;   
     break ;
     
     case 11: ball1.velocityY = 11 ;   
     break ;
     case 12 : ball1.velocityY = 12 ;
      break;
      
    default:
     
  }/* assign the ball a random vertical velocity, so it bounces off in random direction */
     ball.velocityY = randomVelocity();
}