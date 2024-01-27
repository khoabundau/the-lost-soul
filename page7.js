let humanStill1, humanStill2;
let fontBody;
let startTime;
let fade = 255; // Global variable to control the opacity
let changePage = false; // Variable to control page transition
let fadeInComplete = false; // Variable to control the fade-in effect
let endingMusic;
let fadeSpeed = 0.01;
let isFading = false;
let credit;
let creditAlpha = 0;
let fadeInCredit = false;
let fadeOutCredit = false;
let text5Alpha = 0;
let fadeInText5 = false;

function preload() {
  humanStill1 = loadImage("assets/moveonHumanTransform1.png");
  humanStill2 = loadImage("assets/moveonHumanTransform2.png");
  fontBody = loadFont("assets/AmaticSC-Bold.ttf");
  endingMusic = loadSound("assets/moveonEndingMusic.mp3");
  credit = loadImage("assets/moveOnCredit.png");
}

function setup() {
  endingMusic.loop();
  createCanvas(1420, 800);
  background(0, 0, 0);
  startTime = millis();
  textFont(fontBody);
  textSize(44);
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
}

function draw() {
  background(0, 0, 0);

  let t = millis() - startTime; // Calculate the elapsed time

  // Expansion
  let currentWidth = lerp(
    40.6,
    humanStill1.width,
    constrain((t - 1000) / 26000, 0, 1)
  );
  let currentHeight = lerp(
    104.08,
    humanStill1.height,
    constrain((t - 1000) / 26000, 0, 1)
  );

  if (t > 27000 && t < 39000) {
    let alpha = map(t, 27000, 29000, 255, 0);
    tint(255, alpha);
    image(humanStill1, width / 2, height / 2, currentWidth, currentHeight);
    alpha = map(t, 27000, 29000, 0, 255);
    tint(255, alpha);
    image(humanStill2, width / 2, height / 2);
    noTint();
  } else if (t > 39000) {
    let alpha = map(t, 39000, 41000, 255, 0);
    tint(255, alpha);
    image(humanStill2, width / 2, height / 2);
    noTint();
  } else {
    // Draw humanStill1 with the current size
    image(humanStill1, width / 2, height / 2, currentWidth, currentHeight);
  }

  // Text 1
  if (t < 2000) {
    let alpha = map(t, 0, 2000, 0, 255);
    fill(255, 255, 255, alpha);
    text(
      "this is the new chapter of your life, it might be better from now, or worse...",
      width / 2,
      height / 2
    );
  } else if (t < 8000) {
    let alpha = map(t, 2000, 8000, 255, 0);
    fill(255, 255, 255, alpha);
    text(
      "this is the new chapter of your life, it might be better from now, or worse...",
      width / 2,
      height / 2
    );
  }

  // Text 2
  else if (t < 10000) {
    let alpha = map(t, 8000, 10000, 0, 255);
    fill(255, 255, 255, alpha);
    text(
      "but promise me, at all costs, don't ever think about giving up on your life.",
      width / 2,
      height / 2
    );
  } else if (t < 16000) {
    let alpha = map(t, 10000, 16000, 255, 0);
    fill(255, 255, 255, alpha);
    text(
      "but promise me, at all costs, don't ever think about giving up on your life.",
      width / 2,
      height / 2
    );
  }

  // Text 3
  else if (t < 18000) {
    let alpha = map(t, 16000, 18000, 0, 255);
    fill(255, 255, 255, alpha);
    text(
      "one day, you will achieve your lasting happiness...",
      width / 2,
      height / 2
    );
  } else if (t < 24000) {
    let alpha = map(t, 18000, 24000, 255, 0);
    fill(255, 255, 255, alpha);
    text(
      "one day, you will achieve your lasting happiness...",
      width / 2,
      height / 2
    );
  }
  // Text 4
  else if (t < 26000) {
    let alpha = map(t, 24000, 26000, 0, 255);
    fill(255, 255, 255, alpha);
    text("and find your true self.", width / 2, height / 2);
  } else if (t < 38000) {
    let alpha = map(t, 26000, 38000, 255, 0);
    fill(255, 255, 255, alpha);
    text("and find your true self.", width / 2, height / 2);
  }

  // Display the credit image after 41 seconds
  if (t > 41000 && t < 54000) {
    fadeInCredit = true;
    if (fadeInCredit && creditAlpha < 255) {
      creditAlpha += 2; // Increase creditAlpha to make the credit image fade in
    }
    tint(255, creditAlpha); // Apply the alpha value to the credit image
    image(credit, width / 2, height / 2, credit.width, credit.height); // Display the credit image at the center of the canvas
    noTint(); // Remove the tint effect
  }

  // Fade out the credit image after 54 seconds
  if (t > 54000) {
    fadeOutCredit = true;
    if (fadeOutCredit && creditAlpha > 0) {
      creditAlpha -= 2; // Decrease creditAlpha to make the credit image fade out
    }
    tint(255, creditAlpha); // Apply the alpha value to the credit image
    image(credit, width / 2, height / 2, credit.width, credit.height); // Display the credit image at the center of the canvas
    noTint(); // Remove the tint effect
  }

  // text 5
  if (t > 56000) {
    fadeInText5 = true;
    if (fadeInText5 && text5Alpha < 255) {
      text5Alpha += 2; // Increase text5Alpha to make the fifth text fade in
    }
    fill(255, 255, 255, text5Alpha); // Apply the alpha value to the fifth text
    text(
      "press 'b' to experience this state again or 'esc' to get back to main page.",
      width / 2,
      height / 2
    ); // Display the fifth text at the center of the canvas
  }

  // Draw a rectangle that covers the entire canvas
  fill(0, 0, 0, fade);
  rect(0, 0, width, height);

  if (!fadeInComplete) {
    fade -= 5;
    if (fade <= 0) {
      fadeInComplete = true;
    }
    if (isFading) {
      if (endingMusic.getVolume() > 0) {
        endingMusic.setVolume(max(0, endingMusic.getVolume() - fadeSpeed));
      } else {
        endingMusic.stop();
        isFading = false;
      }
    }
  }

  if (changePage) {
    fade += 5;
    if (fade >= 255) {
      window.location.href = "page6.html";
    }
  } else if (key === "Escape") {
    window.location.href = "index.html";
    isFading = true;
  }
}

function keyPressed() {
  if (key === "b" || key === "B") {
    changePage = true;
    isFading = true;
  }
}
