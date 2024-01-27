let img;
let images = [];
let fontBody;
let groundX = -1;
let frontElementsX = 1445;
let speed = 1.75; // Movement speed
//text 1
let textToDisplay =
  "things in life have different purposes, and whether they bring you joy or sorrow.\nthey are needs for your grown-up.";
let words = textToDisplay.split(" ");
let wordIndex = 0;
let displayText = false;
let alphaValue1 = 0;
// text 2
let textToDisplay2 = "but is it worth dwelling on things that have passed?";
let words2 = textToDisplay2.split(" ");
let wordIndex2 = 0;
let displayText2 = false;
let alphaValue2 = 0;
// text 3
let textToDisplay3 =
  "moving on doesn’t mean denying all of your past.\nit’s about leaving them and moving forward.";
let words3 = textToDisplay3.split(" ");
let wordIndex3 = 0;
let displayText3 = false;
let alphaValue3 = 0;
// text 4
let textToDisplay4 = "this is not the end.";
let words4 = textToDisplay4.split(" ");
let wordIndex4 = 0;
let displayText4 = false;
let alphaValue4 = 0;
// text 5
let textToDisplay5 = "this is just the beginning.";
let words5 = textToDisplay5.split(" ");
let wordIndex5 = 0;
let displayText5 = false;
let alphaValue5 = 0;
// text 6
let textToDisplay6 =
  "hey you just reach the new checkpoint of your life, click 'e' to enter!";
let words6 = textToDisplay6.split(" ");
let wordIndex6 = 0;
let displayText6 = false;
let alphaValue6 = 0;
// text 7
let textToDisplay7 =
  "hey! just don't try to move backward.\nthere are things awaiting you ahead!";
let words7 = textToDisplay7.split(" ");
let wordIndex7 = 0;
let displayText7 = false;
let alphaValue7 = 0;
let fadeIn = true;
let fadeOut = false;
let moveRight = false;
let moveLeft = false;
let bgMusic;
let shadow;
let movingHuman;
let isMoving = false;
let currentCanvas = 1;
let fade = 255; // Global variable to control the opacity
let changePage = false; // Variable to control page transition
let fadeInComplete = false; // Variable to control the fade-in effect

function preload() {
  ground = loadImage("assets/groundmoveon.png");
  human = loadImage("assets/moveonHuman.png");
  frontElements = loadImage("assets/frontmoveon.png");
  fontBody = loadFont("assets/AmaticSC-Bold.ttf");
  bgMusic = loadSound("assets/moveonBgMusic1.mp3");
  movingHuman = loadImage("assets/moveonMovingHuman.gif");
  shadow = loadImage("assets/moveonShadow.png");
}

function setup() {
  // Create the canvas
  createCanvas(1420, 800);
  frameRate(60);
  bgMusic.loop();
}

function draw() {
  background(255, 255, 255);
  image(ground, groundX, 302.97);
  image(shadow, 533, 693);
  if (isMoving) {
    image(movingHuman, 658, 532);
  } else {
    image(human, 668, 532);
  }
  image(frontElements, frontElementsX, 360);

  // sun
  fill(205, 68, 56);
  noStroke();
  ellipse(1290, 135, 120, 120);

  if (groundX <= -1421 && groundX > -2820 && !displayText) {
    displayText = true;
    fadeIn = true;
  }

  // Check if the ground has reached the position (-2820,208)
  if (groundX <= -2820 && groundX > -2840) {
    displayText = false;
    fadeIn = false;
    fadeOut = true;
  }

  // Check if the ground has reached the position (-2840,208)
  if (groundX <= -2840 && groundX > -4261) {
    if (!displayText2) {
      displayText2 = true;
      fadeIn = true;
      fadeOut = false;
    }
  }

  // Check if the ground has reached the position (-4261,208)
  if (groundX <= -4261 && groundX > -5680) {
    if (displayText2) {
      displayText2 = false;
      fadeIn = false;
      fadeOut = true;
    }
    if (!displayText3) {
      displayText3 = true;
      fadeIn = true;
      fadeOut = false;
    }
  }

  // Check if the ground has reached the position (-5680,208)
  if (groundX <= -5680 && groundX > -7100) {
    if (displayText3) {
      displayText3 = false;
      fadeIn = false;
      fadeOut = true;
    }
    if (!displayText4) {
      displayText4 = true;
      fadeIn = true;
      fadeOut = false;
    }
  }

  // Check if the ground has reached the position (-7100,208)
  if (groundX <= -7100) {
    if (displayText4) {
      displayText4 = false;
      fadeOut = true;
    }
  }

  if (displayText) {
    if (fadeIn) {
      alphaValue1 += 4;
      if (alphaValue1 >= 255) {
        fadeIn = false;
      }
    }
    fill(0, 0, 0, alphaValue1);
    textFont(fontBody);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(textToDisplay, width / 2, 230);
  }

  if (displayText2) {
    if (fadeIn) {
      alphaValue2 += 4;
      if (alphaValue2 >= 255) {
        fadeIn = false;
      }
    }
    fill(0, 0, 0, alphaValue2);
    textFont(fontBody);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(textToDisplay2, width / 2, 234);
  }

  if (displayText3) {
    if (fadeIn) {
      alphaValue3 += 4;
      if (alphaValue3 >= 255) {
        fadeIn = false;
      }
    }
    fill(0, 0, 0, alphaValue3);
    textFont(fontBody);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(textToDisplay3, width / 2, 230);
  }

  if (displayText4) {
    if (fadeIn) {
      alphaValue4 += 4;
      if (alphaValue4 >= 255) {
        fadeIn = false;
      }
    }
    fill(0, 0, 0, alphaValue4);
    textFont(fontBody);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(textToDisplay4, width / 2, 234);
  }

  // text 5
  if (groundX <= -7101 && groundX > -8520) {
    if (displayText4) {
      displayText4 = false;
      fadeIn = false;
      fadeOut = true;
    }
    if (!displayText5) {
      displayText5 = true;
      fadeIn = true;
      fadeOut = false;
    }
  }

  // Check if the ground has reached the position (-8520,208)
  if (groundX <= -8520) {
    if (displayText5) {
      displayText5 = false;
      fadeOut = true;
    }
  }

  if (displayText5) {
    if (fadeIn) {
      alphaValue5 += 4;
      if (alphaValue5 >= 255) {
        fadeIn = false;
      }
    }
    fill(0, 0, 0, alphaValue5);
    textFont(fontBody);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(textToDisplay5, width / 2, 234);
  }

  // sixth text
  if (groundX <= -8521) {
    if (displayText5) {
      displayText5 = false;
      fadeIn = false;
      fadeOut = true;
    }
    if (!displayText6) {
      displayText6 = true;
      fadeIn = true;
      fadeOut = false;
    }
  }

  if (displayText6) {
    if (fadeIn) {
      alphaValue6 += 4;
      if (alphaValue6 >= 255) {
        fadeIn = false;
      }
    }
    fill(0, 0, 0, alphaValue6);
    textFont(fontBody);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(textToDisplay6, width / 2, 234);
  }
  // seventh text
  if (displayText7) {
    if (fadeIn) {
      alphaValue7 += 4;
      if (alphaValue7 >= 255) {
        fadeIn = false;
      }
    }
    fill(0, 0, 0, alphaValue7);
    textFont(fontBody);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(textToDisplay7, width / 2, 230);
  }

  if (fadeOut) {
    alphaValue1 -= 4;
    alphaValue2 -= 4;
    alphaValue3 -= 4;
    alphaValue4 -= 4;
    alphaValue5 -= 4;
    alphaValue6 -= 4;
    if (
      alphaValue1 <= 0 &&
      alphaValue2 <= 0 &&
      alphaValue3 <= 0 &&
      alphaValue4 <= 0 &&
      alphaValue5 <= 0 &&
      alphaValue6 <= 0
    ) {
      fadeOut = false;
    }
  }

  if (moveRight) {
    if (groundX > -8597) {
      groundX -= speed;
    }
    if (frontElementsX > -7151) {
      frontElementsX -= speed;
    }
  } else if (moveLeft) {
    if (groundX < -1) {
      groundX += speed;
    }
    if (frontElementsX < 1445) {
      frontElementsX += speed;
    }
  }
  // Draw a rectangle that covers the entire canvas
  fill(0, 0, 0, fade);
  rect(0, 0, width, height);

  // Decrease the opacity to create a fade-in effect
  if (!fadeInComplete) {
    fade -= 5;
    if (fade <= 0) {
      fadeInComplete = true;
    }
  }

  // Increase the opacity to create a fade-out effect
  if (changePage) {
    fade += 5;
    if (fade >= 255) {
      window.location.href = "page7.html";
    }
  }
}

function keyPressed() {
  if (key === "d" || key === "D") {
    moveRight = true;
    isMoving = true; // Switch the state of the human
  } else if (key === "a" || key === "A") {
    isMoving = true; // Switch the state of the human
    if (groundX >= -1 && groundX <= 800) {
      displayText = false;
      displayText2 = false;
      displayText3 = false;
      displayText4 = false;
      displayText5 = false;
      displayText6 = false;
      displayText7 = true;
      fadeIn = true;
      fadeOut = false;
    }
  } else if (key === "Escape") {
    window.location.href = "index.html";
  } else if (key === "e") {
    let fadeOutInterval = setInterval(function () {
      let currentVolume = bgMusic.getVolume();
      if (currentVolume > 0.01) {
        // Check if the volume is greater than 0
        bgMusic.setVolume(currentVolume - 0.01);
      } else {
        clearInterval(fadeOutInterval);
        bgMusic.stop();
        changePage = true;
      }
    }, 50);
  }
}

function keyReleased() {
  if (key === "d" || key === "D") {
    moveRight = false;
    isMoving = false;
  } else if (key === "a" || key === "A") {
    isMoving = false;
    if (displayText7) {
      displayText7 = false;
      fadeIn = false;
      fadeOut = true;
    }
  }
}
