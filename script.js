//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(1910, 1000); /*600 or 400*/
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("lavender");
   fill(197,180,227);
  strokeWeight(1.5);
  stroke("black");
  text("Welcome to Eternal Breakout. \n You are a toy in an arcade machine trying to escape!",
    width / 2,
    height / 2 - 100);
  textSize(25);
  text("Are you ready?", 
       width / 2,
       height / 2 - 10);
  

  // Create buttons for all screens
  enterButton = new Sprite(width /2, height /2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-200, -200);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 150;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "lightblue";
  enterButton.text = "Play";
  strokeWeight(1);
  stroke("Cream");

  // Check enter button
  if (enterButton.mouse.presses()) {
    print("pressed");
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
     print("Display Screen 2");
     showScreen2();
     screen = 2;
  } else if (a2Button.mouse.presses()) {
     print("Display Screen 5");
     showScreen5();
     screen = 5;
 }
  }
  
  if (screen == 2) {
    if (b1Button.mouse.presses()){
    print("Display Screen 3");
    showScreen3();
    screen = 3;
  } else if (b2Button.mouse.presses()) {
    print("Display Screen 4");
    showScreen4();
    screen = 4;     
    }
  }
    

  print(screen);
  
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1(){
  background("beige");
  strokeWeight(1.5);
  stroke("black");
    text("Quick! No one is watching! \n Look for an escape!",
         width/2,
         height/2 - 100);
  textSize(18);
   text("Climb through the \n old back panel \n that has a hole?",
         width/2 -125 ,
         height/2);
  textSize(18);
   text("Jump through \n the prizes drop?",
         width/2 + 125,
         height/2);
    enterButton.pos = { x: -100, y: -100};

  // Add A1 button
  a1Button.pos ={ x: width / 2 - 50, y: height / 2 + 100};
  a1Button.w = 95;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "lightblue";
  a1Button.text = "Climb?";

 // Add A2 button
  a2Button.pos = { x: width /2 + 50, y: height / 2 + 100};
  a2Button.w = 95;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "lightblue";
  a2Button.text = "Jump?";
}

function showScreen2(){
   background("beige");
  strokeWeight(1.5);
  stroke("black");
  textSize(25)
     text("You made it! \n what route should you \n take to leave?",
          width / 2, 
          height / 2 - 100); 
   textSize(18);
      text("Follow the wire \n plugged into the machine?",
         width/2 -150 ,
         height/2);
  textSize(18);
      text("Jump on the shoe of the \n kid that is walking by?",
          width / 2 + 125,
          height / 2 );
          

      // Move extra buttons off screen
     a1Button.pos = { x: -200, y: -200 };
     a2Button.pos = { x: -50, y: -50 };
     
      // Add b1 Button
     b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
     b1Button.w = 95;
     b1Button.h = 50;
     b1Button.collider = "k";
     b1Button.color = "plum";
     b1Button.text = "Follow" ;
     
     // Add b2 Button
     b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
     b2Button.w = 95;
     b2Button.h = 50;
     b2Button.collider = "k";
     b2Button.color = "plum";
     b2Button.text = "Jump?";
}

function showScreen5(){
   background("Black");
  textSize(20);
     text("You fell and couldn't get back up \n You were stuck in the bottom of the machine for \n ETERNITY...", 
          width / 2, 
          height / 2 - 100);
     
     // Move extra buttons off screen
     a1Button.pos = { x: -200, y: -200 };
     a2Button.pos = { x: -50, y: -50 };
}

function showScreen3() {
 background("lavender");
 text("You managed to not get caught! \n and you safely left the arcade!", width / 2, height / 2 - 100);
 // Move extra buttons off screen
 b1Button.pos = { x: -100, y: -100 };
 b2Button.pos = { x: -150, y: -150 };
}

function showScreen4() {
 background("Black");
 text("You got stepped \n on by the kid :(", 
      width / 2, 
      height / 2 - 100);
  
 // Move extra buttons off screen
 b1Button.pos = { x: -100, y: -100 };
 b2Button.pos = { x: -150, y: -150 };
}