let heartBeat, heartDark, heartDarkSide;
let hand, needle;
let heartBeatSound;
let rKeyPressed = false;
let needleX = 873,
  needleY = -258;
let targetX = 873,
  targetY = -258;
let easing = 0.04; // Needle speed
let rectHeight = 15;
let needleReached = false;
let startTime;
let clickTime;
let textAlpha = 0; // Transparency of the text
let textAlpha2 = 0;
let fontBody;
let swordSound;
let arrow;
let showTextAndArrow = false;
let fadeIn = 0;

function preload() {
  heartBeat = loadImage("assets/heartBeat1.gif");
  heartDark = loadImage("assets/denialHeartDark.png");
  heartDarkSide = loadImage("assets/denialHeartDarkOtherSide.png");
  hand = loadImage("assets/denialHands.png");
  needle = loadImage("assets/denialNeedle.png");
  heartBeatSound = loadSound("assets/heartBeathuhu.mp3");
  swordSound = loadSound("assets/denialSword1.mp3");
  fontBody = loadFont("assets/AmaticSC-Bold.ttf");
  arrow = loadImage("assets/miseryArrow.png");
}

function setup() {
  createCanvas(1420, 800);
  heartBeatSound.loop();
}

function draw() {
  if (fadeIn < 255) {
    fadeIn += 2; // Increase fadeIn to make the canvas fade in
  }
  if (rKeyPressed) {
    background(0, 0, 0, fadeIn);
    image(heartDark, 559, 392.97);
    needleX = lerp(needleX, targetX, easing);
    needleY = lerp(needleY, targetY, easing);
    image(needle, needleX, needleY);
    image(heartDarkSide, 569, 410.89);

    let d = dist(needleX, needleY, targetX, targetY);
    if (d < 1 && !needleReached) {
      needleReached = true;
    }
    if (needleReached && millis() - clickTime > 3000 && rectHeight < 355) {
      rectHeight += 1;
    }
    if (needleReached && millis() - clickTime > 1500) {
      noStroke();
      fill(205, 68, 56);
      rect(716, 514, 18, rectHeight);
    }
  } else {
    background(255, 255, 255, fadeIn);
    image(hand, 90, 297.99);
    image(heartBeat, 523, 375, 374.69, 183.348);
  }
  if (showTextAndArrow) {
    // Only show the text and the arrow if showTextAndArrow is true
    fill(255, 255, 255);
    textFont(fontBody);
    textSize(36);
    text("click on the needle", 399, 293);
    image(arrow, 537, 181);
  }
  if (needleReached && millis() - clickTime > 3000) {
    fill(255, 255, 255, textAlpha);
    textFont(fontBody);
    textSize(36);
    text("you’d better live in your harsh reality", 165, 415);
    if (textAlpha < 255) {
      textAlpha += 2;
    }
  }
  if (needleReached && millis() - clickTime > 6000) {
    fill(255, 255, 255, textAlpha2);
    textFont(fontBody);
    textSize(36);
    text("than to die in your pink imagination.", 873, 560);
    if (textAlpha2 < 255) {
      textAlpha2 += 2;
    }
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    rKeyPressed = true;
    showTextAndArrow = true;
    heartBeatSound.stop();
  }
  if (key === "b" || key === "B") {
    rKeyPressed = false;
    needleX = 873;
    needleY = -258;
    targetX = 873;
    targetY = -258;
    rectHeight = 15;
    needleReached = false;
    heartBeatSound.loop();
  } else if (key === "Escape") {
    window.location.href = "index.html";
  }
}

function mousePressed() {
  let d = dist(
    mouseX,
    mouseY,
    needleX + needle.width / 2,
    needleY + needle.height / 2
  );
  if (d < max(needle.width / 2, needle.height / 2)) {
    targetX = 597;
    targetY = 240;
    clickTime = millis(); // Start the timer when the needle is clicked
    showTextAndArrow = false; // Set showTextAndArrow to false when the needle is clicked
    setTimeout(function () {
      swordSound.play();
    }, -7000);
  }
}
