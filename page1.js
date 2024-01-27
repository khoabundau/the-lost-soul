let bgImg;
let sheepLong, sheepShort, sheepLeft, sheepRight, wolf, goat;
let sheepSound, wolfSound;
let bgMusic;
let fontBody;

let goatVisible = true;
let fade = 0;
let fadeInSpeed = 2;

function preload() {
  bgImg = loadImage("assets/bgpage1.png");
  sheepLong = loadImage("assets/longline.png");
  sheepShort = loadImage("assets/shortline.png");
  sheepLeft = loadImage("assets/halfleft.png");
  sheepRight = loadImage("assets/halfright.png");
  wolf = loadImage("assets/wolf.png");
  goat = loadImage("assets/goat.png");
  sheepSound = loadSound("assets/sheepsound.mp3");
  wolfSound = loadSound("assets/wolfsound1.mp3");
  bgMusic = loadSound("assets/page1BgMusic.mp3");
  fontBody = loadFont("assets/AmaticSC-Bold.ttf");
}

function setup() {
  createCanvas(1420, 1000);
}

function draw() {
  background(0, 0, 0);
  image(bgImg, 0, 0);
  image(sheepShort, -15.5, -122);
  image(sheepLeft, -136, 30);
  image(sheepRight, 1059, 30);
  if (goatVisible) {
    image(goat, 820, 30);
  } else {
    image(wolf, 820, 30);
  }
  image(sheepShort, -15.5, 182);
  image(sheepLong, -136, 334);
  image(sheepShort, -15.5, 487);
  fill(255, 255, 255, fade);
  textFont(fontBody);
  textSize(44);
  text(
    "staying true to yourself is always more vital than trying to pretend as someone else.",
    168,
    848
  );

  if (!goatVisible && fade < 255) {
    fade += fadeInSpeed;
  }
}

function mousePressed() {
  // Check if the mouse click is within the area of the goat image
  if (
    mouseX >= 820 &&
    mouseX <= goat.width + 800 &&
    mouseY >= 30 &&
    mouseY <= goat.height + -90 &&
    goatVisible
  ) {
    goatVisible = false;
    wolfSound.play();
  }
  // Check if the mouse click is within the area of the wolf image
  else if (
    mouseX >= 820 &&
    mouseX <= wolf.width + 800 &&
    mouseY >= 30 &&
    mouseY <= wolf.height + -90 &&
    !goatVisible
  ) {
    wolfSound.play();
  }
  // Then check if the mouse click is within the area of the sheep images
  else if (
    mouseX >= -15.5 &&
    mouseX <= sheepShort.width - 15.5 &&
    ((mouseY >= -122 && mouseY <= sheepShort.height - 122) ||
      (mouseY >= 182 && mouseY <= sheepShort.height + 182) ||
      (mouseY >= 487 && mouseY <= sheepShort.height + 487))
  ) {
    sheepSound.play();
  } else if (
    mouseX >= -136 &&
    mouseX <= sheepLeft.width - 136 &&
    mouseY >= 30 &&
    mouseY <= sheepLeft.height + 30
  ) {
    sheepSound.play();
  } else if (
    mouseX >= 1059 &&
    mouseX <= sheepRight.width + 1059 &&
    mouseY >= 30 &&
    mouseY <= sheepRight.height + 30
  ) {
    sheepSound.play();
  }
}

function keyPressed() {
  if (key === "Escape") {
    window.location.href = "index.html";
  }
}
