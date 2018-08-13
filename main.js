const ness = {
    width : 50,
    height : 50,
    x : 0,
    y : 0,
    speed: 5
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    ness.x = width / 2;
    ness.y = height / 2;
}

function draw() {
    background("yellow");
    fill("grey");
    drawSprites();
    handleMovement();
}

function handleMovement() {
    if(keyIsDown(LEFT_ARROW)) {
        ness.x += ness.speed
    } 
    if(keyIsDown(RIGHT_ARROW)) {
        ness.x += ness.speed
    }
}

function drawSprites() {
    // draw ness
    rect(ness.x, ness.y, ness.width, ness.height);
}
