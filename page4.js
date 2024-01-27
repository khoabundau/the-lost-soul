let human1, human2, human3;
let darkLiquid;
let fontBody;
let showHuman1 = true;
let showText1 = false;
let showText2 = false;
let alphaValue = 0;
let textAlphaValue = 255;
let rectWidth = 1420;
let rectHeight = 35;
let liquidSound;
let bgMusic;

function preload() {
  human1 = loadImage("assets/dealProcess1.png");
  human2 = loadImage("assets/dealProcess2.png");
  human3 = loadImage("assets/dealProcess3.png");
  darkLiquid = loadImage("assets/darkLiquidDealing.png");
  fontBody = loadFont("assets/AmaticSC-Bold.ttf");
  liquidSound = loadSound("assets/dealingLiquidSound.mp3");
  bgMusic = loadSound("assets/dealingBgMusic.mp3");
}

function setup() {
  createCanvas(1420, 800);
  bgMusic.loop();
  bgMusic.setVolume(0.6);
}

function draw() {
  background(55, 110, 140);
  image(darkLiquid, -3.5, -0.5);
  fill(0, 0, 0);
  rect(0, 0, rectWidth, rectHeight);

  if (showHuman1) {
    image(human1, 353, 131.59);
  }
  if (showText1 && !showText2) {
    // The first and second texts will disappear when showText2 is true
    image(human2, 353, 131.59);
    fill(55, 110, 140, textAlphaValue);
    textFont(fontBody);
    textSize(36);
    text(
      "dealing with something you dislike is sometimes necessary",
      88.5,
      100.5
    );
    fill(0, 0, 0, textAlphaValue);
    textFont(fontBody);
    textSize(36);
    text("regardless of how bad or harmful it might be", 860.5, 753.5);
    setTimeout(function () {
      if (rectWidth < width || rectHeight < height) {
        rectWidth += 3.5; // Increase rectWidth to create expanding effect
        rectHeight += 3.5; // Increase rectHeight to create expanding effect
        if (textAlphaValue > 0) {
          textAlphaValue -= 5; // Decrease textAlphaValue to create fade out effect
        }
        if (!liquidSound.isPlaying()) {
          // Check if liquidSound is not already playing
          liquidSound.play(); // Play the liquidSound
          bgMusic.setVolume(0.4); // Mute the bgMusic
        }
      }
    }, 3000);
  }
  if (!liquidSound.isPlaying() && bgMusic.getVolume() == 0) {
    // Check if liquidSound is not playing and bgMusic is muted
    bgMusic.setVolume(1); // Unmute the bgMusic
  }
  if (showText2) {
    // Separate condition for human3 and the third text
    image(human2, 353, 131.59); // Keep human2 visible when showText2 is true
    tint(255, alphaValue); // Apply the fade-in effect to the image
    image(human3, 353, 131.59);
    noTint(); // Remove the tint effect for other elements
    fill(255, alphaValue);
    textFont(fontBody);
    textSize(36);
    text("even if it made you become someone else.", 491, height / 2);
    if (alphaValue < 255) {
      alphaValue += 2; // Increase alphaValue to create fade in effect
    }
  }
}

function keyPressed() {
  if (key === "d" || key === "D") {
    showHuman1 = false;
    showText1 = true;
    setTimeout(function () {
      showText1 = false;
      alphaValue = 0; // Reset alphaValue to 0
      showText2 = true;
    }, 9500); // timer setting
  } else if (key === "b" || key === "B") {
    // Reset everything to initial state when "b" is pressed
    showHuman1 = true;
    showText1 = false;
    showText2 = false;
    alphaValue = 0;
    textAlphaValue = 255;
    rectWidth = 1420;
    rectHeight = 35;
  } else if (key === "Escape") {
    window.location.href = "index.html";
  }
}
