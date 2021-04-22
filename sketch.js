




function preload() {

bg =loadImage("images/garden.png");
tomImage = loadImage("images/cat1.png");
catAni = loadAnimation("images/cat2.png","images/cat3.png");
cat4 = loadImage("images/cat4.png");
jerryImage = loadImage("images/mouse1.png");
mouse4 = loadImage("images/mouse4.png");
mouseAni = loadAnimation("images/mouse2.png","images/mouse3.png");
 
}

function setup(){
    createCanvas(1200,1200);
//cat/jerry//
 tom = createSprite(900,1000,40,40);
 tom.addImage("tom",tomImage);
 tom.scale = 0.2;

 //mouse/jerry//
 jerry = createSprite(200,1000,60,60);
 jerry.addImage("jerry",jerryImage);
 jerry.scale = 0.2;
    
}

function draw() {

    background(bg);
    

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
   tom.velocityX = -4;
    tom.addAnimation("catRunning",catAni);
   tom.changeAnimation("catRunning");
}

   if(keyCode===LEFT_ARROW){
       jerry.addAnimation("happyRat",mouseAni);
       jerry.changeAnimation("happyRat");
   }

   if(jerry.isTouching(tom)){
       tom.velocity = 0;
       tom.addImage("tomStop",tom4);

       jerry.addImage("ratStop",mouse4);

   }


  


}
