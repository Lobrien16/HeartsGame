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
    x : 0,
    y : 0,
    speed: 3
}

const jeff = {
    width : 50,
    height : 50,
    x : 0,
    y : 0,
    speed: 3
}

const poo = {
    width : 50,
    height : 50,
    x : 0,
    y : 0,
    speed: 3
}

const npc = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    ness.x = width / 2;
    ness.y = height / 2;
    paula.x = width / 2;
    paula.y = width / 2;
    jeff.x = width / 2;
    jeff.y = width / 2;
    poo.x = width / 2;
    poo.y = width / 2;
    for (let i = 0; i < 6; i++) {
        const array = [];

        for (let j = 0; j < 3; j++) {
            array.push(true);
        }

        npc.push(array);
    }
}

function draw() {
    background("yellow");
    fill("grey");
    drawSprites();
    handleMovement();
    rect(50, 50, 50, 50);
    for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 3; j++) {
            fill("green");
            const x = (i * 100) + 50;
            const y = (j * 100) + 50;

            if (npc[i][j] === true) {
                rect(x, y, 50, 50);

                const distance = dist(bulletX, bulletY, x, y)

                if (distance <= (50/2) + (25/2)){
                    npc[i][j] = false;
                    bulletY = y2
                    bulletX = x2
                    bulletSpeed = 0
                }
             }
 }
    }
}

// function handleMovement() {
//     if(keyIsDown(LEFT_ARROW)) {
//         ness.x -= ness.speed;
//     } 
//     if(keyIsDown(RIGHT_ARROW)) {
//         ness.x += ness.speed;
//     }
//     if(keyIsDown(UP_ARROW)) {
//         ness.y -= ness.speed;
//     }
//     if(keyIsDown(DOWN_ARROW)) {
//         ness.y += ness.speed;
//     }
   

// }

//function drawSprites() {
    // draw ness
   // rect(ness.x, ness.y, ness.width, ness.height);
   // }

