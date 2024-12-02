// Custom variables for character features and effects
let faceOpacity = 255;
let auraSize = 300;
let auraDirection = 1;
let auraColor = [255, 255, 255, 200];
let invisible = false;
let posX = 300;
let posY = 400;
let moveX = 2;
let moveY = 2;

// Setup function to initialize the canvas
function setup() {
  createCanvas(1000, 800); // Larger canvas for more detail
  noStroke(); // No border lines to keep it smooth
}

// Draw function for character and effects
function draw() {
  background(100); // Dark background for good contrast

  // Draw enlarged and brighter aura around character's head
  if (!invisible) {
    fill(auraColor); // Bright white with slight transparency
    ellipse(posX, posY, auraSize, auraSize);
  }

  // Pulse the aura size
  auraSize += auraDirection * 0.8;
  if (auraSize > 350 || auraSize < 300) {
    auraDirection *= -1; // Reverse direction for pulsing effect
  }

  // Draw head - inspired by the image
  if (!invisible) {
    fill(100, 100, 100, faceOpacity); // Gray tone for the head
    ellipse(posX, posY, 200, 250); // Elliptical head shape

    // Draw ears
    fill(100, 100, 100, faceOpacity); // Same color as the head
    ellipse(posX - 120, posY, 40, 60); // Left ear
    ellipse(posX + 120, posY, 40, 60); // Right ear

    // Draw neck
    fill(100, 100, 100, faceOpacity); // Same color as the head
    rect(posX - 50, posY + 125, 100, 100); // Neck extending down

    // Draw chest
    fill(100, 100, 100, faceOpacity); // Same color as the head and neck
    rect(posX - 100, posY + 225, 200, 150, 20); // Chest with rounded corners

    // Draw facial features
    drawEyes();
    drawNose();
    drawMouth();
  }

  // Move character when visible
  if (!invisible) {
    posX += moveX;
    posY += moveY;

    // Check for border collisions and reset position if necessary
    if (posX > width - 100 || posX < 100) {
      posX = 300; // Reset to initial position
      moveX *= -1; // Change direction
    }
    if (posY > height - 125 || posY < 125) {
      posY = 400; // Reset to initial position
      moveY *= -1; // Change direction
    }
  }
}

// Function to draw eyes
function drawEyes() {
  fill(255); // White for eye whites
  ellipse(posX - 50, posY - 40, 40, 30); // Left eye
  ellipse(posX + 50, posY - 40, 40, 30); // Right eye

  fill(0); // Black for pupils
  ellipse(posX - 50, posY - 40, 20, 20); // Left pupil
  ellipse(posX + 50, posY - 40, 20, 20); // Right pupil
}

// Function to draw nose
function drawNose() {
  fill(80, 80, 80, faceOpacity); // Darker gray for the nose
  ellipse(posX, posY, 25, 35); // Oval nose
}

// Function to draw mouth with lips
function drawMouth() {
  noFill(); // No fill for the mouth
  stroke(0); // Black for mouth outline
  strokeWeight(2); // Thicker line for lips
  arc(posX, posY + 60, 80, 40, 0, PI); // Smiling mouth arc
  line(posX - 40, posY + 60, posX + 40, posY + 60); // Line for lips
}

// Function to handle mouse interaction - activate superpower
function mousePressed() {
  invisible = !invisible; // Toggle invisibility
  if (invisible) {
    auraColor = [0, 255, 0, 150]; // Change aura to green to signify activation
  } else {
    auraColor = [255, 255, 255, 200]; // Reset aura to original color
  }

  // Reset position when becoming visible again
  if (!invisible) {
    posX = 300;
    posY = 400;
  }
}

// Function to handle element following the mouse
function mouseMoved() {
  if (invisible) {
    auraColor = [random(255), random(255), random(255), 150]; // Change aura color to random when invisible and moving the mouse
  }
}
