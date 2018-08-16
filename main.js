const size = 650;
const characterSize = 48;
const objectSize = 32;
const viewSize = 250;

const ness = {
    sprite: undefined,
    name: 'Ness',
    inventory: [],
    quests: {
        basket: false,
        protractor: false,
        crown: false,
        lardna: false
    }
};

const paula = {
    sprite: undefined,
    name: 'Paula',
    dialogue:   'baskets are the latest fad. I sure wish I had one. I know! If you get me a basket you can be my boyfriend! Cmon pleeeeaasseee? I know youve always liked me anyhow. Im so desperate for a basket, Ill even dig through a garbage can for one!'
};

const jeff = {
    sprite: undefined,
    name: 'Jeff',
    dialogue: 'I am an A plus student and every teacher loves me! I am so smart, I make sure to ask for extra EXTRA credit. I have never forgotten a homework assignment. Geometry is proving to be quite the challenge however. It sure would be easier if I had a protractor. Please find me one or else I will not be able to complete my homework! My flawless permenant record....RUINED!!!! A perfect item like that deserves to be wrapped up in present box in a neat little bow...what are the odds of that huh?'
};

const poo = {
    sprite: undefined,
    name: 'Poo',
    dialogue: 'I am a mystical prince. Whats that? You do not believe me!? Okay fine I shall prove my royal princely status to you peasant! If I am not a prince, than how come I have this crown!.....HUH?! i-its not in my pocket! I LOST MY PRECIOUS CROWN!! Mother and Father will be so disappointed...a precious famiy hierloom...lost to the irresponsibility of an incompentent, bald prince..I have no clue where I could have lost it either. Who knows where It could be! Some chubby little punk probably stole it and is on their way to sell it right now!'
};

const pokey = {
    sprite: undefined,
    name: 'Pokey',
    dialogue: 'Hey Ness! Nice baseball cap! It doesnt do a great job distracting from youre big ugly forehead though if thats what you were tryna accomplish! HYORK HYORK HYORK WHEEZEE! Jokes aside, what the heck do you want anyway?....a crown? Yeah Ive got one I was just about pawn it at the front counter for BIIIIIIGGG cash money HYUK! It belongs to some kid named Poo and he wants it back? HA! FAT CHANCE! AS IF ID GIVE UP MY TICKET TO THE SWEEEEET LIFE TO MAKE SOME KID HAPPY! ID HAVE TO EVEN DUMBER THAN YOU NESS! Tell that dork Poo that instead of whining over some dumb ol crown, he should instead be rushing over to town hall to get his name changed! Besides I dont have to listen to you! The only person I take orders from is my mommy! Her blond hair and bright red lipstick sure do radiate power....HYORK!'
}

const basket = {
    sprite: undefined,
    name: 'basket'
}

const protractor = {
    sprite: undefined,
    name: 'protractor'
}

const crown = {
    sprite: undefined,
    name: 'crown'
}

const lardna = {
    sprite: undefined,
    name: 'lardna',
    dialogue: 'Oh, why hello there Ness! What brings you here? Wait, lemme guess: My son, Pokey must be up to no good again huh? I know because you only talk to me when he screws up. Youve always been a bit of a tattletale after all. UGH! Im am so tired of dealing with that naughty, naughty boy over and over! I always tell him that its better to do good and treat others with respect. Character and integrity: Those are the keys to living a good clean life! but no matter how hard I punish him, its in one ear and out the other! Ness, you tell that little scoundrel of mine that if he doesnt straighten up, Ill punsih him like hes never been punished before! Hell be grounded for 100...no 1000....NO 10000 YEARS!!!'
}

const npcs = [paula, jeff, poo, pokey];
let objects = [basket, protractor, crown, lardna];

let song, bg;

function preload() {
    song = loadSound('assets/sounds/main_music.mp3'); 
    bg = loadImage('assets/frames/bg.png');
}

function setup() {
    createCanvas(size, size);
    scale(60000.5);
    initializeSprites();
    song.play();
}

function draw() {
    background(bg);
    drawSprites();
    drawViewPoint();
    detectCollisionWithNPCs();
    detectCollisionWithObjects();
    handleMovement();
}

function drawTextBubble(dialogue) {
    textAlign(CENTER);
    // text(`Hi, I'm ${this.name}`, width / 2, height / 2);
    // text(this.dialogue, (width / 2) + 10, (height / 2) + 15);
    stroke("orange");
    strokeWeight(5);
    fill("purple");
    rect(width / 2, height / 2, width - 100, height - 100);
    fill("white");
    noStroke();
    noFill();
    textSize(20);
    fill("white");
    textAlign(CENTER);
    text(dialogue, width / 2, (height / 2) + 50, width - 150, height - 150);
}

function didCollideWithNPC() {
    drawTextBubble(this.dialogue);
}

function detectCollisionWithNPCs() {
    for (const npc of npcs) {
        ness.sprite.collide(npc.sprite, didCollideWithNPC.bind(npc));
    }
}

function didCollideWithObject() {
    if (this.name === 'basket') {
        ness.quests.basket = true;
        paula.dialogue = 'A basket? For moi?! Youre so sweet Ness! Thank you! Huh? My boyfriend? Shoot I forgot I agreed to that. Me and my big mouth! uhhhhh(gotta get outta this somehow) I dont want to ruin our friendship! Youre like a brother to me after all!(phew.. nailed it)';
    }

    if (this.name === 'protractor') {
        ness.quests.protractor = true;
        jeff.dialogue = 'OH BLESS MY FRECKLES AND BOW TIE! You found me a protractor! Now I will ace the homework for sure! You are a real pal Ness. Tell ya what, when I get into Brown, I will put in a good word for you at administration.';
    }

    if (this.name === 'crown') {
        if (ness.quests.lardna) {
            ness.quests.crown = true;
            poo.dialogue = '(sniff) what do you want?.... wait could it be?...IT IS! MY CROWN! YAHOOOOOO!! Ness you have no idea how much youve salvaged! My families history! My princely status! MY BUTT FROM MY PARENTS! You truly have a heart of gold. Thank you Ness. I also would like to apologize for calling you a peasant earlier. Yknow the whole prince thing goes to your head sometimes...heh...I really need to work on that.';
        } else {
            return;
        }
    }

    if (this.name === 'lardna') {
        ness.quests.lardna = true;
        pokey.dialogue = 'Back again Ness? I already told ya the crown AND the cash are as good as mine so scram! Whats that? (gulp) y..you told my mommy on me?? She says to give back the crown or Im grounded for....HUH!?! 10000 YEARS??? THATS RIDICULOUS!! Ill be dead in 10000! Or at the very least all gross and wrinkly... WELL FINE! Since you want to a little snitch and ruin my only chance at happiness, take the stupid crown! (sniff) I was gonna use the money to buy a pony....I wont be forgetting this NESS! NEVER EVER EVER!' ;
    }

    console.log(`Ness found a ${this.name}!`);
    // drawTextBubble(this.name);
    this.sprite.remove();
    objects = objects.filter(object => object.name !== this.name);
}

function detectCollisionWithObjects() {
    for (const object of objects) {
        ness.sprite.collide(object.sprite, didCollideWithObject.bind(object));
    }
}

function drawViewPoint() {
    fill("white");
    rectMode(CORNER);
    noStroke();
    rect(0, 0, ness.sprite.position.x - (viewSize / 2), size);
    rect(0, 0, size, ness.sprite.position.y - (viewSize / 2));
    rect(ness.sprite.position.x + (viewSize / 2), 0, size - (ness.sprite.position.x + (viewSize / 2)), size);
    rect(0, ness.sprite.position.y + (viewSize / 2), size, size - (ness.sprite.position.y + (viewSize / 2)));
    fill("black");
    rectMode(CENTER);
}

function handleMovement() {
    if(keyIsDown(LEFT_ARROW)) {
        ness.sprite.setSpeed(3, 180);
        ness.sprite.changeAnimation('right');
        ness.sprite.mirrorX(-1);
    } else if(keyIsDown(RIGHT_ARROW)) {
        ness.sprite.setSpeed(3, 0);
        ness.sprite.changeAnimation('right');
        ness.sprite.mirrorX(1);
    } else if(keyIsDown(UP_ARROW)) {
        ness.sprite.setSpeed(3, 270);
        ness.sprite.changeAnimation('up');
    } else if(keyIsDown(DOWN_ARROW)) {
        ness.sprite.setSpeed(3,90);
        ness.sprite.changeAnimation('down');
    } else {
        ness.sprite.setSpeed(0);
        ness.sprite.changeAnimation('still');
    }
}

function initializeSprites() {
    ness.sprite = createSprite(width / 2, height / 2, characterSize, characterSize);
    ness.sprite.addAnimation('still', 'assets/frames/still.png');
    ness.sprite.addAnimation('up', 'assets/frames/up0001.png', 'assets/frames/up0002.png');
    ness.sprite.addAnimation('right', 'assets/frames/right0001.png', 'assets/frames/right0002.png');
    ness.sprite.addAnimation('down', 'assets/frames/down0001.png', 'assets/frames/down0002.png');
    paula.sprite = createSprite(100, 50, characterSize, characterSize);
    jeff.sprite = createSprite(size - 100, 100, characterSize, characterSize);
    poo.sprite = createSprite(100, size - 100, characterSize, characterSize);
    pokey.sprite = createSprite(size - 100, size - 100, characterSize, characterSize);

    for (let i = 0; i < npcs.length; i++) {
        npcs[i].sprite.addAnimation('still', 'assets/frames/' + npcs[i].name.toLowerCase() + '.png');
        npcs[i].sprite.changeAnimation('still');
    }

    for (let i = 0; i < objects.length; i++) {
        objects[i].sprite = createSprite(random(objectSize + 10, width - objectSize - 10), random(objectSize + 10, height - objectSize - 10), objectSize, objectSize);
        //add animations just like previous for loop for objects
       
        if (objects[i].name === 'crown') {
            objects[i].sprite.addAnimation('trash', 'assets/frames/trash.png');
        } else if (objects[i].name === 'lardna') {
            objects[i].sprite.addAnimation('lardna', 'assets/frames/lardna.png');
        } else {
            objects[i].sprite.addAnimation('trash', 'assets/frames/present.png');
        }
        
    }

    crown.sprite.position.x = pokey.sprite.position.x;
    crown.sprite.position.y = pokey.sprite.position.y + objectSize;
}
