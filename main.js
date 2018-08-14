const ness = {
    sprite: undefined,
    name: 'Ness',
    inventory: [],
    quests: {
        basket: false
    }
};

const paula = {
    sprite: undefined,
    name: 'Paula',
    dialogue: 'baskets are the latest fad. I sure wish I had one. I know! If you get me a basket you can be my boyfriend!'
};

const jeff = {
    sprite: undefined,
    name: 'Jeff'
};

const poo = {
    sprite: undefined,
    name: 'Poo'
};

const basket = {
    sprite: undefined,
    name: 'basket'
}

const npcs = [paula, jeff, poo];
let objects = [];

function setup() {
    createCanvas(650, 650);
    rectMode(CENTER);
    initializeSprites();
}

function draw() {
    background("yellow");
    fill("grey");
    drawSprites();
    detectCollisionWithNPCs();
    detectCollisionWithObjects();
    handleMovement();
}

function didCollideWithNPC() {
    console.log('collided');
    textAlign(CENTER);
    text(`Hi, I'm ${this.name}`, width / 2, height / 2);
    text(this.dialogue, (width / 2) + 10, (height / 2) + 15);
    
}

function detectCollisionWithNPCs() {
    for (const npc of npcs) {
        ness.sprite.collide(npc.sprite, didCollideWithNPC.bind(npc));
    }
}

function didCollideWithObject() {
    console.log('collided');
    textAlign(CENTER);
    text(`You found ${this.name}`, width / 2, height / 2);

    if (this.name === 'basket') {
        ness.quests.basket = true;
        paula.dialogue = 'Thank you for finding my basket!';
    }

    objects = objects.filter(object => object.name !== this.name);
    this.sprite.remove();
}

function detectCollisionWithObjects() {
    for (const object of objects) {
        ness.sprite.collide(object.sprite, didCollideWithObject.bind(object));
    }
}

function handleMovement() {
    if(keyIsDown(LEFT_ARROW)) {
        ness.sprite.setSpeed(3, 180);
    } else if(keyIsDown(RIGHT_ARROW)) {
        ness.sprite.setSpeed(3, 0);
    } else if(keyIsDown(UP_ARROW)) {
        ness.sprite.setSpeed(3, 270);
    } else if(keyIsDown(DOWN_ARROW)) {
        ness.sprite.setSpeed(3,90);
    } else {
        ness.sprite.setSpeed(0);
    }
}

function initializeSprites() {
    ness.sprite = createSprite(width / 2, height / 2, width / 20, height / 20);

    for (let i = 0; i < npcs.length; i++) {
        npcs[i].sprite = createSprite((i + 1) * 50, (i + 1) * 50, width / 20, height / 20);
    }

    for (let i = 0; i < objects.length; i++) {
        objects[i].sprite = createSprite((i + 1) * 500, (i + 1) * 500, width / 30, height / 30);
    }
}
