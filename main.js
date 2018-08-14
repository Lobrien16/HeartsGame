const ness = {
    width : 50,
    height : 50,
    x : 0,
    y : 0,
    speed: 3
}

const paula = {
    width : 50,
    height : 50,
    x : 200,
    y : 300,
    speed: 3
}

const jeff = {
    width : 50,
    height : 50,
    x : 40,
    y : 60,
    speed: 3
}

const poo = {
    width : 50,
    height : 50,
    x : 550,
    y : 120,
    speed: 3
}

const npcs = [paula, jeff, poo];

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
    const collided = detectCollision();

    if (!collided) {
        handleMovement();  
    } else {
        text('You collided!', width / 2, height / 2);
    }
}

function detectCollision() {
    for (const npc of npcs) {
        const distance = dist(ness.x, ness.y, npc.x, npc.y);

        if (distance <= (ness.width / 2) + npc.width / 2) {
            return true;
        }
    }

    return false;
}

function handleMovement() {
    if(keyIsDown(LEFT_ARROW)) {
        ness.x -= ness.speed;
    } 

    if(keyIsDown(RIGHT_ARROW)) {
        ness.x += ness.speed;
    }

    if(keyIsDown(UP_ARROW)) {
        ness.y -= ness.speed;
    }

    if(keyIsDown(DOWN_ARROW)) {
        ness.y += ness.speed;
    }
}

function drawSprites() {
    //draw ness
   rect(ness.x, ness.y, ness.width, ness.height);

   for (const npc of npcs) {
       rect(npc.x, npc.y, npc.width, npc.height);
   }
}

