var canvas;
var music;
var box
var surface1,surface2,surface3,surface4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
background(100)
    //create 4 different surfaces
 surface1 = createSprite(100,550,100,20)
 surface1.shapeColor = "green"
 surface2 = createSprite(300,550,100,20)
 surface2.shapeColor = "yellow"
 surface3 = createSprite(700,550,100,20)
 surface3.shapeColor = "red"
 surface4 = createSprite(500,550,100,20)
 surface4.shapeColor = "blue"
    //create box sprite and give velocity
    box = createSprite(400,300,50,50)
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges = createEdgeSprites();
    if(keyDown(LEFT_ARROW)){
        box.x=box.x-5
    }
    if(keyDown(RIGHT_ARROW)){
        box.x=box.x+5
        
    }
    if(keyDown(UP_ARROW)){
        box.y=box.y-5
        
    }
    if(keyDown(DOWN_ARROW)){
        box.y=box.y+5
        
    }
    box.bounceOff(edges)
drawSprites();
    //add condition to check if box touching surface and make it box
if(box.isTouching(surface1)){
    box.shapeColor = "green"
}
if(box.isTouching(surface2)){
    box.shapeColor = "yellow"
}
if(box.isTouching(surface3)){
    box.shapeColor = "red"
}
if(box.isTouching(surface4)){
    box.shapeColor = "blue"
}
}
