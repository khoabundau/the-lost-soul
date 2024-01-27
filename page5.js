let human, anger, ouch;
let pattern;
let bgNoise;
let ouchSound;
let puzzle;
let puzzleX = 379;
let puzzleY = 312;
let speed = 5; // Increase this for faster movement
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;
let fontBody;
let opacity1 = 0;
let opacity2 = 0;
let fadeIn1 = false;
let fadeIn2 = false;
let fadeOut1 = false;

function preload() {
  human = loadImage("assets/humanaccept.png");
  anger = loadImage("assets/hurtfeelingaccept.png");
  ouch = loadImage("assets/ouchaccept.png");
  pattern = loadImage("assets/patternaccept.png");
  puzzle = loadImage("assets/puzzle.png");
  bgNoise = loadSound("assets/acceptWhiteNoise.mp3");
  ouchSound = loadSound("assets/ouchNoise.mp3");
  fontBody = loadFont("assets/AmaticSC-Bold.ttf");
}

function setup() {
  createCanvas(1420, 1000);
  frameRate(60);
  bgNoise.loop();
  bgNoise.setVolume(0.6);
}

function draw() {
  background(0, 0, 0);
  image(pattern, 0, 0);
  image(human, 194, 178);

  if (
    (puzzleX + puzzle.width >= 673 &&
      puzzleX <= 673 + 108 &&
      puzzleY + puzzle.height >= 371 &&
      puzzleY <= 371 + 63) ||
    (puzzleX + puzzle.width >= 500 &&
      puzzleX <= 500 + 94 &&
      puzzleY + puzzle.height >= 627 &&
      puzzleY <= 627 + 72) ||
    (puzzleX + puzzle.width >= 691 &&
      puzzleX <= 691 + 94 &&
      puzzleY + puzzle.height >= 563 &&
      puzzleY <= 563 + 52) ||
    (puzzleX + puzzle.width >= 644 &&
      puzzleX <= 644 + 94 &&
      puzzleY + puzzle.height >= 712 &&
      puzzleY <= 712 + 52) ||
    (puzzleX + puzzle.width >= 831 &&
      puzzleX <= 831 + 101 &&
      puzzleY + puzzle.height >= 623 &&
      puzzleY <= 623 + 78)
  ) {
    image(anger, 651.25, 256.48);
    image(ouch, 880, 317);
    if (!ouchSound.isPlaying()) {
      ouchSound.play();
    }
  }

  image(puzzle, puzzleX, puzzleY);

  if (moveLeft && puzzleX > 0) {
    puzzleX -= speed;
  }
  if (moveRight && puzzleX < width - puzzle.width) {
    puzzleX += speed;
  }
  if (moveUp && puzzleY > 0) {
    puzzleY -= speed;
  }
  if (moveDown && puzzleY < height - puzzle.height) {
    puzzleY += speed;
  }

  if (frameCount > 10 * frameRate() && !fadeIn1) {
    fadeIn1 = true;
    fadeInText1();
  }

  if (fadeIn1 && !fadeOut1) {
    fill(255, 255, 255, opacity1 * 255);
    textFont(fontBody);
    textSize(44);
    text("still didn't work, press 'h' for hint.", 477, 848);
  }

  if (fadeIn2) {
    fill(255, 255, 255, opacity2 * 255);
    textFont(fontBody);
    textSize(44);
    text(
      "no hint for this! people must have scars and flaws right? no one is perfect, you have to accept it.",
      98,
      848
    );
  }
}

function fadeInText1() {
  if (fadeIn1 && opacity1 < 1 && !fadeOut1) {
    opacity1 += 0.01; // Adjust this value to change the speed of the fade-in
    requestAnimationFrame(fadeInText1);
  }
}

function fadeOutText1() {
  if (fadeOut1 && opacity1 > 0) {
    opacity1 -= 0.01; // Adjust this value to change the speed of the fade-out
    requestAnimationFrame(fadeOutText1);
  }
}

function fadeInText2() {
  if (fadeIn2 && opacity2 < 1) {
    opacity2 += 0.01; // Adjust this value to change the speed of the fade-in
    requestAnimationFrame(fadeInText2);
  }
}

function keyPressed() {
  if (key === "a" || key === "A") {
    moveLeft = true;
  } else if (key === "d" || key === "D") {
    moveRight = true;
  } else if (key === "w" || key === "W") {
    moveUp = true;
  } else if (key === "s" || key === "S") {
    moveDown = true;
  } else if (key === "h" || key === "H") {
    fadeIn1 = false;
    fadeOut1 = true;
    fadeIn2 = true;
    fadeOutText1();
    fadeInText2();
  } else if (key === "Escape") {
    window.location.href = "index.html";
  }
}

function keyReleased() {
  if (key === "a" || key === "A") {
    moveLeft = false;
  } else if (key === "d" || key === "D") {
    moveRight = false;
  } else if (key === "w" || key === "W") {
    moveUp = false;
  } else if (key === "s" || key === "S") {
    moveDown = false;
  }
}
