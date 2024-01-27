let bgImg, bgUnder;
let humanBody, hands, sun;
let angleHands = 0;
let handsStopped = false;
let particles = [];
let fireEffect = false;
let cryingSound;
let bgMusic;
let fontBody;
let displayText = false;

let angle1 = 0,
  angle2 = 0;
let circleDiameter1 = 1247,
  circleDiameter2 = 1387;
let circleX, circleY;
let dashCount = 40;
let circleColor1, circleColor2;

function preload() {
  bgImg = loadImage("assets/bgpage2.png");
  bgUnder = loadImage("assets/underBgpagemisery.png");
  humanBody = loadImage("assets/bodypagemisery.png");
  hands = loadImage("assets/handpagemisery.png");
  sun = loadImage("assets/sunpagemisery.png");
  cryingSound = loadSound("assets/page2CryingSound.mp3");
  bgMusic = loadSound("assets/page2BgMusic_1.mp3");
  fontBody = loadFont("assets/AmaticSC-Bold.ttf");
}

function setup() {
  createCanvas(1420, 800);
  bgMusic.loop();

  circleX = width / 2;
  circleY = 880.5;
  circleColor1 = color(0, 0, 0);
  circleColor2 = color(255, 0, 0);
}

function draw() {
  background(0, 0, 0);
  image(bgImg, 0, 0);

  // dash cicles
  stroke(circleColor1);
  strokeWeight(2);
  drawDashedCircle(angle1, circleDiameter1);
  drawDashedCircle(angle1, 1525);
  drawDashedCircle(angle1, 1850);
  stroke(circleColor2);
  drawDashedCircle(-angle2, circleDiameter2);
  drawDashedCircle(-angle2, 1687);
  drawDashedCircle(-angle2, 20);

  angle1 += 0.001; //speed adjustment
  angle2 += 0.001;
}

function drawDashedCircle(angle, diameter) {
  beginShape();
  for (let i = 0; i < dashCount; i++) {
    let startAngle = map(i, 0, dashCount, 0, TWO_PI) + angle;
    let endAngle = startAngle + PI / dashCount;
    let startX = circleX + (cos(startAngle) * diameter) / 2;
    let startY = circleY + (sin(startAngle) * diameter) / 2;
    let endX = circleX + (cos(endAngle) * diameter) / 2;
    let endY = circleY + (sin(endAngle) * diameter) / 2;
    line(startX, startY, endX, endY);
  }
  endShape();

  image(sun, 154.5, 343);
  image(bgUnder, 0, 668);
  image(humanBody, 611.71, 474.11);

  // Create new particles
  if (fireEffect) {
    let p = new Particle(725, 514);
    particles.push(p);
  }

  // Draw all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // If the particle is done, remove it.
      particles.splice(i, 1);
    }
  }

  let handsY = 506.6;
  if (!handsStopped) {
    handsY += sin(angleHands) * 4.5;
    angleHands += 0.01;
  }
  image(hands, 654.41, handsY);
  if (displayText) {
    fill(0, 0, 0);
    textFont(fontBody);
    textSize(36);
    textAlign(CENTER, CENTER);
    text(
      "it’s okay not to be okay, just cry, the sun still shines, the stars still go around",
      width / 2,
      87
    );
  }
}

function keyPressed() {
  if (key === "c" || key === "C") {
    cryingSound.loop();
    bgMusic.setVolume(0.5);
    handsStopped = true;
    fireEffect = true;
    displayText = true;
  } else if (key === "Escape") {
    window.location.href = "index.html";
  }
}

function keyReleased() {
  if (key === "c" || key === "C") {
    cryingSound.stop();
    bgMusic.setVolume(1.0);
    handsStopped = false;
    fireEffect = false;
    displayText = false;
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(0.1, 2);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    fill(186, 206, 204, this.alpha);
    ellipse(this.x, this.y, 16);
  }
}
